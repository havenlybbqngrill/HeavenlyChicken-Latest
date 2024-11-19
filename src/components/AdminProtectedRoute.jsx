import { Navigate } from "react-router-dom";
import { useNavigation } from "./NavigationContext";
import PropTypes from "prop-types";

const AdminProtectedRoute = ({ element, fallbackPath = "/" }) => {
  const { isAdmin } = useNavigation();

  if (!isAdmin) {
    return <Navigate to={fallbackPath} replace />; 
  }

  return element;
};

AdminProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
  fallbackPath: PropTypes.string
};

export default AdminProtectedRoute;