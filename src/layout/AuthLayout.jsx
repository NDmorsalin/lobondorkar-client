import { Navigate, Outlet, useLocation } from "react-router-dom";
import Header from "../Shared/Header/Header";
import { useAuth } from "../provider/Auth/AuthProvider";
import loadingImg from "../assets/loading.gif";

const AuthLayout = () => {
  const { user, loading } = useAuth();
  const location = useLocation();

  return (
    <>
      <Header />

      {loading && <div className="min-h-screen w-full flex items-center justify-center ">
        <img src={loadingImg} alt="loading" className="w-32 h-32 rounded-full object-cover" />
      </div>}
      {user && !loading && (
        <Navigate to={location?.state?.from?.pathname || "/"} />
      )}
      {!user && !loading && <Outlet />}
    </>
  );
};

export default AuthLayout;
