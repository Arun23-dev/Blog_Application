
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from "../../authSlice";
import { useNavigate, Link } from 'react-router';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const signupSchema = z
  .object({
    firstName: z.string().min(3, "First name must be at least 3 characters"),
    email: z
      .email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        strongPasswordRegex,
        "Password must include uppercase, lowercase, number, and special character"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default function SignUp() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { user, isAuthenticated, loading, error } = useSelector((state) => state.auth);
   const { loginWithRedirect, isAuthenticated: isAuth0Authenticated } = useAuth0();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupSchema) });

  useEffect(() => {
    if (isAuthenticated) {
      // Redirect admin users to admin panel, regular users to home
      if (user?.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    }
  }, [isAuthenticated, navigate, user]);

  const submittedData = (data) => {
    const dispatchData = {
      firstName: data.firstName,
      emailId: data.email,
      password: data.password
    };
    console.log(dispatchData);
    dispatch(registerUser(dispatchData));
  };

  const handleAuth0SignUp = () => {
    loginWithRedirect({
      screen_hint: 'signup'
    });
  };

  const handleAuth0Login = () => {
    loginWithRedirect();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        
        {error && (
          <div className="alert alert-error mb-4">
            <span>{error}</span>
          </div>
        )}
        
        <form onSubmit={handleSubmit(submittedData)} className="space-y-4">
          <div>
            <input
              {...register("firstName")}
              placeholder="Enter your first name"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("email")}
              placeholder="Enter your email"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("password")}
              type="password"
              placeholder="Enter your password"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirm password"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          <button
            type="submit"
            className={`w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>
        
        <div className="divider">OR</div>
        
        <div className="space-y-3">
          <button
            type="button"
            onClick={handleAuth0SignUp}
            className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
          >
            Sign Up with Auth0
          </button>

          <button
            type="button"
            onClick={handleAuth0Login}
            className="w-full py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
          >
            Login with Auth0
          </button>
        </div>
        
        <div className="divider">OR</div>
        
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">
            Already have an account?
          </p>
          <Link to="/login" className="btn btn-outline btn-sm">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
