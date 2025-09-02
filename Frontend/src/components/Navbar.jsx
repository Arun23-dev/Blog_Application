import { useState } from "react";
import { Image } from '@imagekit/react';
import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser, clearAuth0User } from "../../authSlice";
import { useNavigate } from "react-router";
import { useAuth0 } from '@auth0/auth0-react';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isAuthenticated, isAuth0Authenticated } = useSelector((state) => state.auth);
    const { logout: auth0Logout } = useAuth0();

    const handleLogout = () => {
        if (isAuth0Authenticated) {
            // Auth0 logout
            auth0Logout({
                logoutParams: {
                    returnTo: window.location.origin
                }
            });
            dispatch(clearAuth0User());
        } else {
            // Regular logout
            dispatch(logoutUser());
        }
        navigate("/");
    };

    return (
        <div className="flex justify-between mt-5">
            {/* logo */}
            <div className="flex gap-2">
                <Image src="/logo.png"
                    width={32}
                    height={32}
                    alt="Picture of the author"
                    loading="lazy"
                />
                <span className="text-2xl font-bold">Iamblog</span>
            </div>

            {/* mobile button */}
            <div className="md:hidden">
                <div
                    className="cursor-pointer text-4xl font-extrabold"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    {open ? "X" : "="}
                </div>
                <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-bold text-2xl bg-amber-400 absolute top-20 transition-all ease-in-out duration-75 ${open ? "right-0" : "right-[100%]"}`}>
                    <Link to="/home">Home</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/recent">Recent</Link>
                    <Link to="/about">About</Link>
                    {!isAuthenticated ? (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Sign Up</Link>
                        </>
                    ) : (
                        <>
                            {user?.role === 'admin' && (
                                <Link to="/admin">Admin Panel</Link>
                            )}
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-sm">Welcome, {user?.firstName}</span>
                                {isAuth0Authenticated && (
                                    <span className="text-xs text-blue-600">(Auth0)</span>
                                )}
                                <button 
                                    onClick={handleLogout}
                                    className="btn btn-outline btn-sm"
                                >
                                    Logout
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <div className="hidden md:flex font-bold gap-5 xl:gap-12 items-center text-xl">
                <Link to="/home">Home</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/recent">Recent</Link>
                <Link to="/about">About</Link>
                {!isAuthenticated ? (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                    </>
                ) : (
                    <>
                        {user?.role === 'admin' && (
                            <Link to="/admin" className="btn btn-primary btn-sm">
                                Admin Panel
                            </Link>
                        )}
                        <div className="flex items-center gap-3">
                            <span className="text-sm">Welcome, {user?.firstName}</span>
                            {isAuth0Authenticated && (
                                <span className="text-xs text-blue-600">(Auth0)</span>
                            )}
                            <button 
                                onClick={handleLogout}
                                className="btn btn-outline btn-sm"
                            >
                                Logout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
