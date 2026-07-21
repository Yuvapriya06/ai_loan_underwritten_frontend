import { useState } from "react";
import "../styles/LoanForm.css";
import { predictLoan } from "../services/api";

function LoanForm({ setResult }) {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    education: "",
    maritalStatus: "",
    monthlyIncome: "",
    creditScore: "",
    creditEnquiries: "",
    creditCard: "No",
    personalLoan: "No",
    homeLoan: "No",
    goldLoan: "No",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await predictLoan(formData);

      console.log("Prediction Result");
      setResult(response);
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="loan-container">
      <h2>Loan Application Form</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid">

          <div>
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div>
            <label>Education</label>
            <select
              name="education"
              value={formData.education}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="SSC">SSC</option>
              <option value="12TH">12TH</option>
              <option value="UNDER GRADUATE">UNDER GRADUATE</option>
              <option value="GRADUATE">GRADUATE</option>
              <option value="POST-GRADUATE">POST-GRADUATE</option>
              <option value="PROFESSIONAL">PROFESSIONAL</option>
              <option value="OTHERS">OTHERS</option>
            </select>
          </div>

          <div>
            <label>Marital Status</label>
            <select
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
            </select>
          </div>

          <div>
            <label>Monthly Income</label>
            <input
              type="number"
              name="monthlyIncome"
              value={formData.monthlyIncome}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Credit Score</label>
            <input
              type="number"
              name="creditScore"
              value={formData.creditScore}
              onChange={handleChange}
              min="300"
              max="900"
              required
            />
          </div>

          <div>
            <label>Credit Enquiries</label>
            <input
              type="number"
              name="creditEnquiries"
              value={formData.creditEnquiries}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Has Credit Card?</label>
            <select
              name="creditCard"
              value={formData.creditCard}
              onChange={handleChange}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>

          <div>
            <label>Has Personal Loan?</label>
            <select
              name="personalLoan"
              value={formData.personalLoan}
              onChange={handleChange}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>

          <div>
            <label>Has Home Loan?</label>
            <select
              name="homeLoan"
              value={formData.homeLoan}
              onChange={handleChange}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>

          <div>
            <label>Has Gold Loan?</label>
            <select
              name="goldLoan"
              value={formData.goldLoan}
              onChange={handleChange}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>

        </div>

        <button className="predict-btn" disabled={loading}>
          {loading ? "Predicting..." : "Predict Loan"}
        </button>
      </form>
    </div>
  );
}

export default LoanForm;