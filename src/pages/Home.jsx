import { useState } from "react";

import Navbar from "../components/Navbar";
import LoanForm from "../components/LoanForm";
import ResultCard from "../components/ResultCard";
import ApplicantSummary from "../components/ApplicantSummary";
import CalculatedFeatures from "../components/CalculatedFeatures";
import ShapSection from "../components/ShapSection";
import AIReport from "../components/AIReport";

function Home() {

  const [result, setResult] = useState(null);

  return (
    <>
      <Navbar />

      <LoanForm setResult={setResult} />

      {result && (
        <>
          <ResultCard result={result} />

          <ApplicantSummary summary={result.applicant_summary} />

          <CalculatedFeatures
            features={result.calculated_features}
          />

          <ShapSection result={result} />

          <AIReport report={result.llm_report} />
        </>
      )}
    </>
  );
}

export default Home;