import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { NavigationProvider } from "./components/NavigationContext";
import Join from "./components/ConnectUs/Join";
import Subscribe from "./components/ConnectUs/Subscribe";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import Landing from "./pages/Landing";
import Home from "./Home";   // 👈 new
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <NavigationProvider>
      <Router>
        <ToastContainer />
        <Routes>
          {/* Default User Routes */}
          {/* <Route path="/" element={<Join />} /> */}
          <Route path="/" element={<Home />} />   {/* 👈 fixed */}
          <Route
            path="/subscribe"
            element={<ProtectedRoute element={<Subscribe />} />}
          />
          <Route
            path="/landing"
            element={<ProtectedRoute element={<Landing />} />}
          />

          {/* Admin Routes */}
          <Route path="/admin" element={<Join />} />
          <Route
            path="/admin/subscribe"
            element={<AdminProtectedRoute element={<Subscribe />} />}
          />
          <Route
            path="/admin/landing"
            element={<AdminProtectedRoute element={<Landing />} />}
          />

          {/* Redirect all other routes to the default Join page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </NavigationProvider>
  );
}
