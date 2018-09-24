import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FootballData from './components/FootBallData';


const Root = () => {
  return (
        <div className="container">
               <FootballData />
          </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
