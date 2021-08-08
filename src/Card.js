import React from 'react';
import './Card.css';

export default function Card() {
  return (
    <>
      <div className="card">
        <div className="image-container">
          {window.innerWidth <= 1023 ? (
            <img
              src="./images/image-header-mobile.jpg"
              alt="People in an open office workspace"
            />
          ) : (
            <img
              src="./images/image-header-desktop.jpg"
              alt="People in an open office workspace"
            />
          )}

          <div className="overlay"></div>
        </div>

        <div className="content-container">
          <h1>
            Get <span>insights</span> that help your business grow.
          </h1>
          <p className="description">
            Discover the benefits of data analytics and make better decisions
            regarding revanue, customer experience, and overall efficiency.
          </p>
          <div className="stats">
            <div className="stat">
              <p className="stat-count">10k+</p>
              <p className="stat-title">Companies</p>
            </div>
            <div className="stat">
              <p className="stat-count">314</p>
              <p className="stat-title">Templates</p>
            </div>
            <div className="stat">
              <p className="stat-count">12M+</p>
              <p className="stat-title">Queries</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
