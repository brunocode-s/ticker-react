import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/auth";
// import { useAuthStore } from "../../store/useAuthStore";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Toaster from "../../Components/Toaster";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

export default function Login({setSession}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const result = await loginUser(email, password);

      if (result.success) {
        // save session in localStorage
        localStorage.setItem("ticketapp_session", JSON.stringify(result.user));
        // update App's session state
        setSession(result.user);

        setToast({ message: "Login successful!", type: "success" });
        setTimeout(() => navigate("/dashboard"), 1200);
      } else {
        setToast({
          message: result.message || "Invalid email or password",
          type: "error",
        });
      }
    } catch (error) {
      setToast({
        message: "An error occurred while logging in.",
        type: "error",
      });
    }
  };


  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      <main className="flex flex-grow items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">

          <div className="bg-white shadow-xl rounded-2xl p-8 backdrop-blur-sm border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                Welcome Back
              </h2>
              <p className="text-gray-600">
                Sign in to continue to your dashboard
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <a
                    href="/auth/forgot-password"
                    className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Forgot?
                  </a>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border text-black border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                  <div
                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <IoEyeOffOutline className="h-5 w-5 text-gray-500" />
                    ) : (
                      <IoEyeOutline className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Sign In
              </button>
            </form>

            {/* Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                Don't have an account?{" "}
                <a
                  href="/auth/signup"
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>

          {/* Toast Notification */}
          {toast && <Toaster message={toast.message} type={toast.type} />}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
