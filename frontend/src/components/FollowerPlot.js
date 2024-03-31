import React, { useState, useEffect } from 'react';

function FollowerPlot() {
  const [followerPlot, setFollowerPlot] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/followerPlot');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setFollowerPlot(url);
      } catch (error) {
        console.error('Error fetching plot data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {followerPlot && <img src={followerPlot} alt="Matplotlib Plot" />}
    </div>
  );
}

export default FollowerPlot;