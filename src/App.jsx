import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddData from "./pages/addData/AddData";
import Submission from "./pages/submission/Submission";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddData />} />
        <Route path="/submissions" element={<Submission />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
