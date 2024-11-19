import { Navigate, useLocation } from "react-router-dom";
import { useNavigation } from "./NavigationContext";
import PropTypes from "prop-types";

const ProtectedRoute = ({ element }) => {
  const location = useLocation();
  const { canAccessProtectedRoute, isAdmin } = useNavigation();

  const isPublicRoute =
    location.pathname === "/subscribe" || location.pathname === "/landing";

  // Allow access for users if they have access and are not admins
  const isAllowed = canAccessProtectedRoute && !isAdmin;

  return isAllowed || (isPublicRoute && canAccessProtectedRoute) ? (
    element
  ) : (
    <Navigate to="/" replace />
  );
};

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default ProtectedRoute;
