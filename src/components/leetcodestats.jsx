import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './leetcodestats.css';

const LeetCodeStats = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://leetcode-stats-api.herokuapp.com/sakshiii02')
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          setData(data);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true));
  }, []);

  if (error) return <p className="leetcode-error">Failed to load LeetCode stats 😢</p>;
  if (!data) return <p className="leetcode-loading">Fetching LeetCode stats...</p>;

  return (
    <motion.div
      className="leetcode-card-glass"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2>🧠 LeetCode Journey</h2>
      <p className="quote">"Bit by bit, building logic — one question at a time."</p>
      <div className="stats">
        <p><strong>Total Solved:</strong> {data.totalSolved}</p>
        <p><strong>Easy:</strong> {data.easySolved} | <strong>Medium:</strong> {data.mediumSolved} | <strong>Hard:</strong> {data.hardSolved}</p>
        <p><strong>Global Rank:</strong> {data.ranking}</p>
        <p><strong>Contribution Points:</strong> {data.contributionPoints}</p>
      </div>
    </motion.div>
  );
};

export default LeetCodeStats;
