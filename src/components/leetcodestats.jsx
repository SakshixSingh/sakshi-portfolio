import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './leetcodestats.css';

const LeetCodeStats = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://leetcode-stats-api.herokuapp.com/sakshiii02')
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          setData(data);
        } else {
          // Fallback to approximate stats if status is not success
          setData({
            totalSolved: 380,
            easySolved: 160,
            mediumSolved: 190,
            hardSolved: 30,
            ranking: 185204
          });
        }
      })
      .catch(() => {
        // Fallback to approximate stats if request fails
        setData({
          totalSolved: 380,
          easySolved: 160,
          mediumSolved: 190,
          hardSolved: 30,
          ranking: 185204
        });
      });
  }, []);

  if (!data) return <p className="leetcode-loading">Fetching LeetCode stats...</p>;

  return (
    <section className="leetcode-section py-5">
      <div className="container">
        {/* Editorial Section Number */}
        <div className="section-tag">
          <span>04 / LEETCODE STATS</span>
        </div>

        <motion.div
          className="leetcode-card-editorial mt-5 p-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="row align-items-center">
            <div className="col-md-5 mb-4 mb-md-0">
              <h2 className="leetcode-title">LeetCode Journey</h2>
              <p className="quote text-muted mt-2">"Bit by bit, building logic — one question at a time."</p>
              <div className="rank-badge mt-3">
                <span className="rank-label">GLOBAL RANKING</span>
                <span className="rank-val">{data.ranking.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="col-md-7">
              <div className="stats-editorial-grid">
                <div className="stat-box">
                  <span className="stat-num">{data.totalSolved}</span>
                  <span className="stat-label">TOTAL SOLVED</span>
                </div>
                <div className="stat-box easy">
                  <span className="stat-num">{data.easySolved}</span>
                  <span className="stat-label">EASY</span>
                </div>
                <div className="stat-box medium">
                  <span className="stat-num">{data.mediumSolved}</span>
                  <span className="stat-label">MEDIUM</span>
                </div>
                <div className="stat-box hard">
                  <span className="stat-num">{data.hardSolved}</span>
                  <span className="stat-label">HARD</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeetCodeStats;
