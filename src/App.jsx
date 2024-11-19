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
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <NavigationProvider>
      <Router>
        <ToastContainer />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Join />} />
          
          {/* Protected User Routes */}
          <Route 
            path="/landing" 
            element={
              <ProtectedRoute 
                element={<Landing />} 
                fallbackPath="/" 
              />
            } 
          />
          <Route 
            path="/subscribe" 
            element={
              <ProtectedRoute 
                element={<Subscribe />} 
                fallbackPath="/" 
              />
            } 
          />

          {/* Admin Routes */}
          <Route path="/admin" element={<Join />} />
          <Route 
            path="/admin/landing" 
            element={
              <AdminProtectedRoute 
                element={<Landing />} 
                fallbackPath="/admin" 
              />
            } 
          />
          <Route 
            path="/admin/subscribe" 
            element={
              <AdminProtectedRoute 
                element={<Subscribe />} 
                fallbackPath="/admin" 
              />
            } 
          />

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </NavigationProvider>
  );
}