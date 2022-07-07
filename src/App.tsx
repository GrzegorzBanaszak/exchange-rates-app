import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useAppSelector } from "./app/hooks";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import GetUser from "./pages/GetUser";

function App() {
  const { user } = useAppSelector((state) => state.user);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={user ? <Navigate to="/dashboard" /> : <GetUser />}
          />
          <Route
            path="dashboard"
            element={!user ? <Navigate to="/" /> : <Dashboard />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
