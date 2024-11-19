import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [canAccessProtectedRoute, setCanAccessProtectedRoute] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Function to update access and admin status
  const updateAccess = (isAdminRoute = false, accessGranted = false) => {
    setIsAdmin(isAdminRoute);
    setCanAccessProtectedRoute(accessGranted);
  };

  return (
    <NavigationContext.Provider
      value={{
        canAccessProtectedRoute,
        setCanAccessProtectedRoute,
        isAdmin,
        updateAccess,
        setIsAdmin,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

NavigationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useNavigation = () => {
  return useContext(NavigationContext);
};