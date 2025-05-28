import React, { useState, useEffect, useCallback } from 'react';
import './FallingFruit.css';

const FRUIT_IMAGES = [
  { name: 'lemon', src: '/images/lemon.png' },
  { name: 'kiwi', src: '/images/kiwi.png' },
];

const MAX_FRUIT_ON_SCREEN = 20; 
const BASE_SPAWN_NEW_FRUIT_INTERVAL = 1500; // Renamed for clarity
const SCROLLED_SPAWN_MULTIPLIER = 0.5; // 50% of original interval (so 2x faster spawn rate)
const SCROLL_THRESHOLD_Y = 200; // Pixels scrolled down to trigger faster spawn
const FALL_ANIMATION_DURATION_SECONDS = 10; 

const FallingFruit = () => {
  const [fruits, setFruits] = useState([]);
  const [currentSpawnInterval, setCurrentSpawnInterval] = useState(BASE_SPAWN_NEW_FRUIT_INTERVAL);

  const addFruit = useCallback(() => {
    console.log("FallingFruit: addFruit CALLED.");
    const randomFruitImage = FRUIT_IMAGES[Math.floor(Math.random() * FRUIT_IMAGES.length)];
    const newFruit = {
      id: `fruit-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, 
      src: randomFruitImage.src,
      alt: randomFruitImage.name,
      left: `${Math.random() * 95}vw`, 
      size: Math.floor(Math.random() * 40) + 50, // New size: 50px to 90px (approx 2x)
      animationDelay: `${(Math.random() * FALL_ANIMATION_DURATION_SECONDS * 0.8).toFixed(2)}s`, // Ensure delay is less than full duration for staggering
    };

    setFruits(prevFruits => {
      console.log("FallingFruit: setFruits in addFruit. Current length:", prevFruits.length);
      const updatedFruits = [...prevFruits, newFruit];
      if (updatedFruits.length > MAX_FRUIT_ON_SCREEN) {
        return updatedFruits.slice(updatedFruits.length - MAX_FRUIT_ON_SCREEN);
      }
      return updatedFruits;
    });
  }, []);

  // Effect for scroll-based spawn rate adjustment
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD_Y) {
        setCurrentSpawnInterval(BASE_SPAWN_NEW_FRUIT_INTERVAL * SCROLLED_SPAWN_MULTIPLIER);
      } else {
        setCurrentSpawnInterval(BASE_SPAWN_NEW_FRUIT_INTERVAL);
      }
    };

    window.addEventListener('scroll', handleScroll);
    console.log("FallingFruit: Scroll listener added.");

    // Initial check in case page loads scrolled
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log("FallingFruit: Scroll listener removed.");
    };
  }, []); // Empty dependency array, runs once on mount and cleans up on unmount

  // Effect to spawn fruit periodically, now depends on currentSpawnInterval
  useEffect(() => {
    console.log(`FallingFruit: Setting up spawn interval with duration: ${currentSpawnInterval}ms`);
    const intervalId = setInterval(addFruit, currentSpawnInterval);
    return () => {
      console.log("FallingFruit: Clearing spawn interval.");
      clearInterval(intervalId);
    };
  }, [addFruit, currentSpawnInterval]); // Re-run if addFruit or currentSpawnInterval changes

  // More robust state cleanup based on actual fruit IDs present in state
  useEffect(() => {
    if (fruits.length === 0) return;

    const now = Date.now();
    const fruitsToKeep = fruits.filter(fruit => {
      const creationTime = parseInt(fruit.id.split('-')[1], 10);
      if (isNaN(creationTime)) return false;
      const delayMs = parseFloat(fruit.animationDelay) * 1000;
      const expectedEndTime = creationTime + delayMs + (FALL_ANIMATION_DURATION_SECONDS * 1000);
      // Keep fruit if its expected end time (plus a small buffer) is in the future
      return now < (expectedEndTime + 2000); // Buffer of 2 seconds
    });

    if (fruitsToKeep.length < fruits.length) {
      // console.log(`FallingFruit: Cleaning up ${fruits.length - fruitsToKeep.length} old fruits from state. New count: ${fruitsToKeep.length}`);
      setFruits(fruitsToKeep);
    }
  }, [fruits]); // Re-run when fruits array changes to check for cleanup


  if (fruits.length === 0 && BASE_SPAWN_NEW_FRUIT_INTERVAL > 0) {
    // This log might be too frequent if interval is short and no fruits spawn due to MAX_FRUIT quickly
    // console.log("FallingFruit: No fruits to render yet or all cleaned up.");
  }

  return (
    <div className="falling-fruit-container" aria-hidden="true">
      {fruits.map(fruit => {
        // console.log(`FallingFruit: Rendering fruit ${fruit.id} at ${fruit.left} with delay ${fruit.animationDelay}`);
        return (
          <img
            key={fruit.id}
            src={fruit.src}
            alt={fruit.alt}
            className="falling-fruit-item"
            style={{
              left: fruit.left,
              width: `${fruit.size}px`,
              height: `${fruit.size}px`,
              animationName: 'fallAndRotate', 
              animationDuration: `${FALL_ANIMATION_DURATION_SECONDS}s`,
              animationDelay: fruit.animationDelay,
            }}
          />
        );
      })}
    </div>
  );
};

export default FallingFruit; 