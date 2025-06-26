import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as signalR from '@microsoft/signalr';
import { FaCommentDots, FaTimes } from 'react-icons/fa';
import './ActivityFeed.css';

const ActivityFeed = () => {
    const [activities, setActivities] = useState([]);
    const [showNewUpdates, setShowNewUpdates] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    const listRef = useRef(null);

    // --- Draggable/Resizable State ---
    const [position, setPosition] = useState({ x: 20, y: 20 });
    const [size, setSize] = useState({ width: 350, height: 400 });
    const dragInfo = useRef({ isDragging: false, isResizing: false, offsetX: 0, offsetY: 0 });
    // ---------------------------------

    useEffect(() => {
        if (!isOpen) return;

        const fetchData = async () => {
            setActivities([]); // Clear existing activities

            const historyUrl = process.env.NODE_ENV === 'development'
                ? 'http://localhost:5238/api/activity/history'
                : 'https://apicryptonclicker-c7f5e6dsb3facfaw.canadacentral-01.azurewebsites.net/api/activity/history';
            
            const summaryUrl = process.env.NODE_ENV === 'development'
                ? 'http://localhost:5238/api/leaderboards/summary'
                : 'https://apicryptonclicker-c7f5e6dsb3facfaw.canadacentral-01.azurewebsites.net/api/leaderboards/summary';

            try {
                const [historyResponse, summaryResponse] = await Promise.all([
                    fetch(historyUrl),
                    fetch(summaryUrl)
                ]);

                let history = [];
                if (historyResponse.ok) {
                    history = (await historyResponse.json()).reverse();
                } else {
                    console.error("Failed to fetch history");
                }

                let summaryEvent = null;
                if (summaryResponse.ok) {
                    summaryEvent = {
                        id: 'leaderboard-summary',
                        message: await summaryResponse.text(),
                        timestamp: new Date().toISOString()
                    };
                } else {
                    console.error("Failed to fetch summary");
                }
                
                const finalActivities = [...history];
                if (summaryEvent) {
                    finalActivities.push(summaryEvent);
                }

                setActivities(finalActivities);

                setTimeout(() => {
                    if (listRef.current) {
                        listRef.current.scrollTop = listRef.current.scrollHeight;
                    }
                }, 100);

            } catch (error) {
                console.error("Error fetching initial activity data:", error);
            }
        };

        fetchData();

    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;

        const signalrApiUrl = process.env.NODE_ENV === 'development'
            ? 'http://localhost:5238/activityHub'
            : 'https://apicryptonclicker-c7f5e6dsb3facfaw.canadacentral-01.azurewebsites.net/activityHub';

        const connection = new signalR.HubConnectionBuilder()
            .withUrl(signalrApiUrl, {
                // Forcing Server-Sent Events to bypass environment-specific WebSocket issues.
                transport: signalR.HttpTransportType.ServerSentEvents
            })
            .withAutomaticReconnect()
            .build();

        connection.on("ReceiveActivity", (data) => {
            console.log("Received activity:", data);
            setActivities(prevActivities => [...prevActivities, data].slice(-20)); // Keep last 20

            const listEl = listRef.current;
            if (listEl) {
                // If user is scrolled near the bottom, auto-scroll. Otherwise, show the indicator.
                if (listEl.scrollHeight - listEl.scrollTop < listEl.clientHeight + 100) {
                    setTimeout(() => listEl.scrollTop = listEl.scrollHeight, 100);
                } else {
                    setShowNewUpdates(true);
                }
            }
        });

        connection.onreconnecting(error => {
            console.warn(`Connection is reconnecting due to: ${error}`);
        });

        connection.onclose(error => {
            console.error(`Connection closed due to: ${error}. It will attempt to reconnect automatically.`);
        });

        connection.start()
            .then(() => console.log('SignalR Connected via SSE.'))
            .catch(err => console.error('SignalR Connection Error: ', err));

        return () => {
            connection.stop();
        };
    }, [isOpen]);

    // --- Draggable/Resizable Callbacks ---
    const handleMouseDown = useCallback((e, type) => {
        if (type === 'drag') {
            dragInfo.current = {
                isDragging: true,
                isResizing: false,
                offsetX: e.clientX - position.x,
                offsetY: e.clientY - position.y
            };
        } else { // 'resize'
            dragInfo.current = {
                isDragging: false,
                isResizing: true,
                offsetX: e.clientX,
                offsetY: e.clientY
            };
        }
        e.preventDefault();
    }, [position]);

    const handleMouseMove = useCallback((e) => {
        if (dragInfo.current.isDragging) {
            setPosition({
                x: e.clientX - dragInfo.current.offsetX,
                y: e.clientY - dragInfo.current.offsetY
            });
        } else if (dragInfo.current.isResizing) {
            const newWidth = size.width + (e.clientX - dragInfo.current.offsetX);
            const newHeight = size.height + (e.clientY - dragInfo.current.offsetY);
            setSize({
                width: Math.max(newWidth, 250), // Min width
                height: Math.max(newHeight, 200) // Min height
            });
            dragInfo.current.offsetX = e.clientX;
            dragInfo.current.offsetY = e.clientY;
        }
    }, [size]);

    const handleMouseUp = useCallback(() => {
        dragInfo.current = { isDragging: false, isResizing: false, offsetX: 0, offsetY: 0 };
    }, []);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isOpen, handleMouseMove, handleMouseUp]);
    // -----------------------------------

    const scrollToBottom = () => {
        if (listRef.current) {
            listRef.current.scrollTop = listRef.current.scrollHeight;
            setShowNewUpdates(false);
        }
    };

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleTimeString();
    };

    if (!isOpen) {
        return (
            <div className="activity-bubble" onClick={() => setIsOpen(true)} style={{ right: `${position.x}px`, bottom: `${position.y}px` }}>
                <FaCommentDots size={24} />
            </div>
        );
    }

    return (
        <div className="activity-feed" style={{ right: `${position.x}px`, bottom: `${position.y}px`, width: `${size.width}px`, height: `${size.height}px` }}>
            <div className="feed-header" onMouseDown={(e) => handleMouseDown(e, 'drag')}>
                <h4>Live Activity</h4>
                <button className="close-button" onClick={() => setIsOpen(false)}>
                    <FaTimes />
                </button>
            </div>
            <ul ref={listRef}>
                {activities.map((activity) => (
                    <li key={activity.id}>
                        <span className="timestamp">{formatTimestamp(activity.timestamp)}</span>
                        <span className="message">{activity.message}</span>
                    </li>
                ))}
            </ul>
            {showNewUpdates && (
                <div className="new-updates-indicator" onClick={scrollToBottom}>
                    New Updates
                </div>
            )}
            <div className="resize-handle" onMouseDown={(e) => handleMouseDown(e, 'resize')}></div>
        </div>
    );
};

export default ActivityFeed; 