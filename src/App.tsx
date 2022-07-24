import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useAppSelector } from "./app/hooks";
import Layout from "./components/Layout";
import CurrenciesList from "./pages/CurrenciesList";
import Dashboard from "./pages/Dashboard";
import Favorites from "./pages/Favorites";
import GetUser from "./pages/GetUser";

function App() {
  const { user } = useAppSelector((state) => state.user);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={user ? <Navigate to="/dashboard" /> : <GetUser />}
          />
          <Route
            path="dashboard"
            element={!user ? <Navigate to="/" /> : <Dashboard />}
          >
            <Route index element={<CurrenciesList />} />
            <Route path="favorites" element={<Favorites />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
