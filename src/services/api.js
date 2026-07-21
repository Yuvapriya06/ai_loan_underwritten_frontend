export const predictLoan = async (formData) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve({

                prediction: "Approved",

                approval_probability: 94.82,

                rejection_probability: 5.18,

                applicant_summary: {
                    Age: formData.age,
                    Gender: formData.gender,
                    Education: formData.education,
                    MaritalStatus: formData.maritalStatus,
                    MonthlyIncome: formData.monthlyIncome,
                    CreditScore: formData.creditScore
                },

                calculated_features: {

                    employment_stability: 160,

                    credit_behaviour: 0.89,

                    repayment_history: 18,

                    credit_risk: "Low",

                    unsecured_debt_exposure: "Medium"

                },

                shap_summary: "/sample/shap_summary.png",

                feature_impact: "/sample/feature_impact.png",

                llm_report:
                    "The applicant demonstrates a strong financial profile with a good credit score and stable monthly income. The overall credit behaviour is positive and the calculated risk is low. Based on the machine learning prediction and feature analysis, the applicant is recommended for loan approval."

            });

        },1500);

    });

};