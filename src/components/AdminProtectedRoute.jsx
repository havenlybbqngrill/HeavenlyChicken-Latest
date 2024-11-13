import { Navigate } from "react-router-dom";
import { useNavigation } from "./NavigationContext";
import PropTypes from "prop-types";
const AdminProtectedRoute = ({ element }) => {
  const { isAdmin } = useNavigation();

  if (!isAdmin) {
    return <Navigate to="/" replace />; // Redirect non-admins
  }

  return element; // Allow access for admins
};
AdminProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};
export default AdminProtectedRoute;
