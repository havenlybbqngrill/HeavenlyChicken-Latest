import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [canAccessProtectedRoute, setCanAccessProtectedRoute] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Function to update isAdmin based on current location
  const checkAdmin = (pathname) => {
    setIsAdmin(pathname.startsWith("/admin"));
  };

  return (
    <NavigationContext.Provider
      value={{
        canAccessProtectedRoute,
        setCanAccessProtectedRoute,
        isAdmin,
        checkAdmin,
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
