import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
const AdminNavigationContext = createContext();

export const AdminNavigationProvider = ({ children }) => {
  const [canAccessProtectedRoute, setCanAccessProtectedRoute] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const checkAdmin = (pathname) => {
    setIsAdmin(pathname.startsWith("/admin"));
  };

  return (
    <AdminNavigationContext.Provider
      value={{
        canAccessProtectedRoute,
        setCanAccessProtectedRoute,
        isAdmin,
        checkAdmin,
      }}
    >
      {children}
    </AdminNavigationContext.Provider>
  );
};
AdminNavigationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAdminNavigation = () => {
  return useContext(AdminNavigationContext);
};
