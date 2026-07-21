import "../styles/ResultCard.css";

function ResultCard({ result }) {

    return (

        <div className="result-card">

            <h2>Prediction Result</h2>

            <h1>{result.prediction}</h1>

            <div className="probability">

                <div>

                    <h3>Approval</h3>

                    <p>{result.approval_probability}%</p>

                </div>

                <div>

                    <h3>Rejection</h3>

                    <p>{result.rejection_probability}%</p>

                </div>

            </div>

        </div>

    );

}

export default ResultCard;