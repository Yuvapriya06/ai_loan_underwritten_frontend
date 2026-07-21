import "../styles/ApplicantSummary.css";

function ApplicantSummary({ summary }) {
  return (
    <div className="summary-card">
      <h2>Applicant Summary</h2>

      <table>
        <tbody>
          <tr>
            <td>Age</td>
            <td>{summary.Age}</td>
          </tr>

          <tr>
            <td>Gender</td>
            <td>{summary.Gender}</td>
          </tr>

          <tr>
            <td>Education</td>
            <td>{summary.Education}</td>
          </tr>

          <tr>
            <td>Marital Status</td>
            <td>{summary.MaritalStatus}</td>
          </tr>

          <tr>
            <td>Monthly Income</td>
            <td>₹ {summary.MonthlyIncome}</td>
          </tr>

          <tr>
            <td>Credit Score</td>
            <td>{summary.CreditScore}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ApplicantSummary;