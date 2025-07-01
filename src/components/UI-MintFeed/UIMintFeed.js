import React, { useState, useEffect, useMemo } from 'react';
import * as signalR from '@microsoft/signalr';
import { motion, AnimatePresence } from 'framer-motion';
import './UIMintFeed.css';

const UIMintFeed = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const fetchHistory = async () => {
            const historyUrl = 'https://apicryptonclicker-c7f5e6dsb3facfaw.canadacentral-01.azurewebsites.net/api/activity/history';
            try {
                const response = await fetch(historyUrl);
                if (response.ok) {
                    const history = await response.json();
                    history.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
                    setActivities(history);
                } else {
                    console.error("Failed to fetch activity history for mint feed.");
                }
            } catch (error) {
                console.error("Error fetching activity history for mint feed:", error);
            }
        };

        const setupSignalR = () => {
            const signalrApiUrl = 'https://apicryptonclicker-c7f5e6dsb3facfaw.canadacentral-01.azurewebsites.net/activityHub';
            const connection = new signalR.HubConnectionBuilder()
                .withUrl(signalrApiUrl, { transport: signalR.HttpTransportType.ServerSentEvents })
                .withAutomaticReconnect()
                .build();
            
            connection.on("ReceiveActivity", (data) => {
                setActivities(prevActivities => [data, ...prevActivities]);
            });

            connection.start()
                .catch(err => console.error('Mint Feed SignalR Connection Error: ', err));
            
            return connection;
        };

        fetchHistory();
        const connection = setupSignalR();

        return () => {
            connection.stop();
        };
    }, []);
    
    const mintActivities = useMemo(() => 
        activities
            .filter(act => act.message.toLowerCase().includes('mint'))
            .slice(0, 5),
        [activities]
    );

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        const secondsAgo = Math.round((new Date() - date) / 1000);
        if (secondsAgo < 60) return `${secondsAgo}s ago`;
        const minutesAgo = Math.floor(secondsAgo / 60);
        return `${minutesAgo}m ago`;
    };

    return (
        <div className="ui-mint-feed">
            <h4 className="mint-feed-title">Recent Minting Activity</h4>
            <div className="mint-feed-list">
                <ul>
                    <AnimatePresence>
                        {mintActivities.map((activity) => (
                            <motion.li 
                                key={activity.id} 
                                className="mint-feed-item"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                layout
                            >
                                <span className="mint-message">{activity.message}</span>
                                <span className="mint-timestamp">{formatTimestamp(activity.timestamp)}</span>
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </ul>
            </div>
        </div>
    );
};

export default UIMintFeed; 