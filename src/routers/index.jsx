import Home from "pages/home";
import ModalBirth from "pages/home/components/modalBirth";
import WeeksCalculator from "pages/weeksCalculator";
import { useEffect, useState } from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";

const Routers = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [clickId, setClickId] = useState("");
  useEffect(() => {
    setClickId(searchParams.get("clickid"));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="birth" element={<ModalBirth clickId={clickId} />} />
      </Route>
      <Route path="/weeks" element={<WeeksCalculator />} />
    </Routes>
  );
};

export default Routers;
