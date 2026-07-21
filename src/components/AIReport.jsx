import "../styles/AIReport.css";

function AIReport({ report }) {
  return (
    <div className="report-container">

      <h2>AI Underwriting Report</h2>

      <div className="report-card">

        <p>{report}</p>

      </div>

    </div>
  );
}

export default AIReport;