import './App.css';

function App() {
  return (
    <>
      <div className="card">
        <div className="image-container">
          <img
            src="./images/image-header-mobile.jpg"
            alt="People in an open office workspace"
          />
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

export default App;
