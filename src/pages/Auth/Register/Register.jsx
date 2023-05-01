import { useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../provider/Auth/AuthProvider";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { register } = useAuth();
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // console.log(name, photoUrl, email, password);
    try {
      await register(email, password, name, photoUrl);

      // redirect to previous page
      navigate(location?.state?.from?.pathname || "/");
    } catch (error) {
      console.error(error);
      console.log(error.message);
    }
  };

  return (
    <div className="container px-8 mx-auto">
      <>
        <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative p-10 bg-slate-900 shadow-lg sm:rounded-3xl">
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-2xl font-semibold">Create an account</h1>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-8 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="name"
                        name="name"
      
                        onBlur={(e) => setName(e.target.value)}
                        type="text"
                        className="peer placeholder-transparent rounded-lg px-4 py-2 w-full text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Enter your name"
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-4 -top-6 text-gray-300 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-300 peer-focus:text-sm"
                      >
                        Enter your name
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="photoUrl"
                        name="photoUrl"
      
                        onBlur={(e) => setPhotoUrl(e.target.value)}
                        type="text"
                        className="peer placeholder-transparent rounded-lg px-4 py-2 w-full text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Enter your photoUrl"
                      />
                      <label
                        htmlFor="photoUrl"
                        className="absolute left-4 -top-6 text-gray-300 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-300 peer-focus:text-sm"
                      >
                        Enter your photoUrl
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="email"
                        name="email"
      
                        onBlur={(e) => setEmail(e.target.value)}
                        type="text"
                        className="peer placeholder-transparent rounded-lg px-4 py-2 w-full text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Email address"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-4 -top-6 text-gray-300 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-300 peer-focus:text-sm"
                      >
                        Email Address
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="password"
                        name="password"
                        type="password"
      
                        onBlur={(e) => setPassword(e.target.value)}
                        className="peer placeholder-transparent rounded-lg px-4 py-2 w-full text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Password"
                      />
                      <label
                        htmlFor="password"
                        className="absolute left-4 -top-6 text-gray-300 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-300 peer-focus:text-sm"
                      >
                        Password
                      </label>
                    </div>
                    <div className="relative">
                      <button
                        onClick={handleSubmit}
                        className="bg-blue-500 text-white rounded-md px-2 py-1"
                      >
                        Submit
                      </button>
                    </div>
                    <p className="">
                      Already have an account? go to{" "}
                      <Link className="text-emerald-400" to="/auth/login">
                        Login
                      </Link>{" "}
                      page
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Register;
