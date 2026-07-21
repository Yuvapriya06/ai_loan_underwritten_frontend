import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo-section">
          <div className="logo-circle">🏦</div>

          <div>
            <h1>Explainable AI Loan Approval System</h1>
            <p>Machine Learning • SHAP • Local LLM</p>
          </div>
        </div>

        <div className="status">
          <span className="status-dot"></span>
          System Ready
        </div>
      </div>
    </header>
  );
}

export default Navbar;