import "../styles/CalculatedFeatures.css";

function CalculatedFeatures({ features }) {
  return (
    <div className="features-container">

      <h2>Calculated Banking Features</h2>

      <div className="feature-grid">

        <div className="feature-card">
          <h3>Employment Stability</h3>
          <p>{features.employment_stability}</p>
        </div>

        <div className="feature-card">
          <h3>Credit Behaviour</h3>
          <p>{features.credit_behaviour}</p>
        </div>

        <div className="feature-card">
          <h3>Repayment History</h3>
          <p>{features.repayment_history}</p>
        </div>

        <div className="feature-card">
          <h3>Credit Risk</h3>
          <p>{features.credit_risk}</p>
        </div>

        <div className="feature-card">
          <h3>Debt Exposure</h3>
          <p>{features.unsecured_debt_exposure}</p>
        </div>

      </div>

    </div>
  );
}

export default CalculatedFeatures;