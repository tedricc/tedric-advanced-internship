import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Plans from "../components/Plans/Plans";

function ChoosePlan() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Plans />
      <Footer />
    </div>
  );
}

export default ChoosePlan;
