import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <nav>
        <Link to={'/userStatistics'}>AppCo</Link>
      </nav>
    </div>
  );
};

export default MainPage;
