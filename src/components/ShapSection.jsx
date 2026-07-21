import "../styles/ShapSection.css";

function ShapSection() {
  return (
    <div className="shap-container">

      <h2>SHAP Explainability</h2>

      <p className="subtitle">
        SHAP explains why the model approved or rejected the loan application.
      </p>

      <div className="shap-grid">

        <div className="shap-card">
          <h3>SHAP Summary Plot</h3>

          <img
            src="/images/shap_summary.png"
            alt="SHAP Summary"
          />
        </div>

        <div className="shap-card">
          <h3>Feature Impact Plot</h3>

          <img
            src="/images/feature_impact.png"
            alt="Feature Impact"
          />
        </div>

      </div>

    </div>
  );
}

export default ShapSection;