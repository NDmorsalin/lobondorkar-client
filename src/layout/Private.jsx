import { Navigate, useLocation, useNavigation } from "react-router-dom";
import { useAuth } from "../provider/Auth/AuthProvider";
import Loading from "../Shared/Loading/Loading";

/* eslint-disable react/prop-types */
const Private = ({ children }) => {
  const { user, loading, error } = useAuth();
  const location = useLocation();
  const sts = useNavigation();
  console.log(sts);

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;
  if (!user)
    return (
      <Navigate
        to={"/auth/login"}
        state={{
          from: location,
        }}
        replace
      />
    );

  return <div>{children}</div>;
};

export default Private;
