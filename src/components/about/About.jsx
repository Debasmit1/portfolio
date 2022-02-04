import React from 'react';
import "./about.css"

const About = () => {
  return (
  <div className='a'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="" className='a-img'></img>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          I love to travel a lot.I love to capture these moments with me by taking a photograph or making a video . Sometimes I even post them in youtube. But not a professional vlogger!!!
        </p>
        <div className="a-award">
          <img src="https://images.chesscomfiles.com/uploads/v1/article/24916.42c534a5.668x375o.7f852b4f91cc@2x.jpeg" alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">District Champion</h4>
            <p className="a-award-desc">
              Won a few title during my school days and during my college days. But try to play even today. Because that's my hobby.
            </p>
          </div>
        </div>
      </div>
  </div>);
};

export default About;
