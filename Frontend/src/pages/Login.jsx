import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router";
import { useEffect } from "react";
import { loginUser } from "../../authSlice";
import { useAuth0 } from '@auth0/auth0-react';

const loginSchema = z.object({
  emailId: z.string().email("Invalid Email"),
  password: z.string().min(1, "Password is required"),
});

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated, loading, error } = useSelector(
    (state) => state.auth
  );
  const { loginWithRedirect } = useAuth0();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  useEffect(() => {
    if (isAuthenticated) {
      // Redirect admin users to admin panel, regular users to home
      if (user?.role === 'admin') {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  }, [isAuthenticated, navigate, user]);

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  const handleAuth0Login = () => {
    loginWithRedirect();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="card w-96 bg-white shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center text-3xl mb-6">Login</h2>
          
          {error && (
            <div className="alert alert-error mb-4">
              <span>{error}</span>
            </div>
          )}
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control mt-4">
              <label className="label mb-1">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className={`input input-bordered ${errors.emailId && "input-error"
                  }`}
                {...register("emailId")}
              />
              {errors.emailId && (
                <span className="text-error text-sm mt-1">{errors.emailId.message}</span>
              )}
            </div>

            <div className="form-control mt-4">
              <label className="label mb-1">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className={`input input-bordered ${errors.password && "input-error"
                  }`}
                {...register("password")}
              />
              {errors.password && (
                <span className="text-error text-sm mt-1">{errors.password.message}</span>
              )}
            </div>

            <div className="form-control mt-6">
              <button 
                type="submit" 
                className={`btn btn-primary ${loading ? 'loading' : ''}`}
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </form>
          
          <div className="divider">OR</div>
          
          <button
            type="button"
            onClick={handleAuth0Login}
            className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
          >
            Login with Auth0
          </button>
          
          <div className="divider">OR</div>
          
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">
              Don't have an account?
            </p>
            <Link to="/signup" className="btn btn-outline btn-sm">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
