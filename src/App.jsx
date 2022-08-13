import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import AddData from "./pages/addData/AddData";
import Submission from "./pages/submission/Submission";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<AddData />} />
        <Route path="/submissions" exact element={<Submission />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
