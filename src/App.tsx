import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import GetUser from "./pages/GetUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<GetUser />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
