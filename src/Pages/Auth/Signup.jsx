import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/auth";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Toaster from "../../Components/Toaster";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";


export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [toast, setToast] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();


  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    return re.test(password);
  };

  const passwordStrength = (password) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[!@#$%^&*]/.test(password)) score++;
    return score;
  };
  
  const getPasswordStrengthLabel = () => {
    const score = passwordStrength(password);
    if (score <= 2) return { label: "Weak", color: "bg-red-500" };
    if (score === 3) return { label: "Medium", color: "bg-yellow-400" };
    if (score >= 4) return { label: "Strong", color: "bg-green-500" };
  };
  

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setToast({ message: "Please enter a valid email address", type: "error" });
      return;
    }

    if (!validatePassword(password)) {
      setToast({
        message:
          "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.",
        type: "error",
      });
      return;
    }    
    
    if (password !== confirmPassword) {
      setToast({ message: "Passwords do not match!", type: "error" });
      return;
    }

    try {
      const result = await registerUser(email, password);

      if (result.success) {
        setToast({ message: "Signup successful!", type: "success" });
        setTimeout(() => navigate("/auth/login"), 1500);
      } else {
        setToast({ message: result.message || "Signup failed", type: "error" });
      }
    } catch (err) {
      setToast({ message: "An error occurred during signup.", type: "error" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <Header />

      <main className="flex flex-grow items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-white shadow-xl rounded-2xl p-8 backdrop-blur-sm border border-gray-100">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                Create Account
              </h2>
              <p className="text-gray-600">Join us and start managing tickets</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSignup} className="space-y-5">
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
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Password
                </label>
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
                  >
                    {showPassword ? (
                      <IoEyeOffOutline className="h-5 w-5 text-gray-500" />
                    ) : (
                      <IoEyeOutline className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </div>
                {password && (
                  <div className="mt-2 h-2 w-full bg-gray-300 rounded">
                    <div
                      className={`h-2 rounded ${getPasswordStrengthLabel().color}`}
                      style={{ width: `${(passwordStrength(password) / 5) * 100}%` }}
                    ></div>
                    <p className="text-sm mt-1 text-gray-700">
                      Strength: {getPasswordStrengthLabel().label}
                    </p>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3 border text-black border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                  <div
                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
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
                Create Account
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                Already have an account?{" "}
                <a
                  href="/auth/login"
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Log in
                </a>
              </p>
            </div>
          </div>

          {/* Terms text */}
          <p className="text-center text-gray-500 text-sm mt-6">
            By signing up, you agree to our Terms and Privacy Policy
          </p>

          {/* Toast notification */}
          {toast && <Toaster message={toast.message} type={toast.type} />}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
