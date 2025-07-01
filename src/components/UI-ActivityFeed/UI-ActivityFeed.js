import React, { useState, useEffect, useMemo } from 'react';
import * as signalR from '@microsoft/signalr';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiRss, FiLoader } from 'react-icons/fi';
import './UI-ActivityFeed.css';

const UIActivityFeed = () => {
    const [activities, setActivities] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [connectionStatus, setConnectionStatus] = useState('Connecting...');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchHistory = async () => {
            setIsLoading(true);
            const historyUrl = 'https://apicryptonclicker-c7f5e6dsb3facfaw.canadacentral-01.azurewebsites.net/api/activity/history';
            try {
                const response = await fetch(historyUrl);
                if (response.ok) {
                    const history = await response.json();
                    // Sort by timestamp descending to ensure newest is first
                    history.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
                    setActivities(history);
                } else {
                    console.error("Failed to fetch activity history.");
                    setConnectionStatus('Error');
                }
            } catch (error) {
                console.error("Error fetching activity history:", error);
                setConnectionStatus('Error');
            }
            setIsLoading(false);
        };

        const setupSignalR = () => {
            const signalrApiUrl = 'https://apicryptonclicker-c7f5e6dsb3facfaw.canadacentral-01.azurewebsites.net/activityHub';
            const connection = new signalR.HubConnectionBuilder()
                .withUrl(signalrApiUrl, { transport: signalR.HttpTransportType.ServerSentEvents })
                .withAutomaticReconnect()
                .build();

            connection.on("ReceiveActivity", (data) => {
                setActivities(prevActivities => [data, ...prevActivities].slice(0, 100));
            });

            connection.onreconnecting(() => setConnectionStatus('Reconnecting...'));
            connection.onreconnected(() => setConnectionStatus('Live'));
            connection.onclose(() => setConnectionStatus('Disconnected'));

            connection.start()
                .then(() => setConnectionStatus('Live'))
                .catch(err => {
                    console.error('SignalR Connection Error: ', err);
                    setConnectionStatus('Error');
                });
            
            return connection;
        };

        fetchHistory();
        const connection = setupSignalR();

        return () => {
            connection.stop();
        };
    }, []);

    const filteredActivities = useMemo(() =>
        activities.filter(activity =>
            activity.message.toLowerCase().includes(searchTerm.toLowerCase())
        ), [activities, searchTerm]
    );

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    };

    return (
        <div className="activity-feed-container">
            <div className="feed-header">
                <h3 className="text-2xl font-bold text-white">Live Game Activity</h3>
                <div className={`status-light ${connectionStatus.toLowerCase()}`}>
                    <FiRss />
                    <span>{connectionStatus}</span>
                </div>
            </div>
            <div className="search-bar">
                <FiSearch className="search-icon" />
                <input
                    type="text"
                    placeholder="Search activities..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>
            <div className="feed-list">
                {isLoading ? (
                    <div className="loading-indicator">
                        <FiLoader className="animate-spin" />
                        <span>Loading History...</span>
                    </div>
                ) : (
                    <AnimatePresence>
                        {filteredActivities.map((activity) => (
                            <motion.div
                                key={activity.id}
                                className="activity-item"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                layout
                            >
                                <span className="timestamp">{formatTimestamp(activity.timestamp)}</span>
                                <span className="message">{activity.message}</span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                )}
            </div>
        </div>
    );
};

export default UIActivityFeed; 
 