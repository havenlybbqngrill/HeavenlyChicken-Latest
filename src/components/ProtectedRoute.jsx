import { Navigate } from "react-router-dom";
import { useNavigation } from "./NavigationContext";
import PropTypes from "prop-types";

const ProtectedRoute = ({ element, fallbackPath = "/" }) => {
  const { canAccessProtectedRoute, isAdmin } = useNavigation();

  // If not an admin and cannot access protected route, redirect
  if (!canAccessProtectedRoute && !isAdmin) {
    return <Navigate to={fallbackPath} replace />;
  }

  return element;
};

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
  fallbackPath: PropTypes.string
};

export default ProtectedRoute;