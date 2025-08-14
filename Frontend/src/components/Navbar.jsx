import { useState } from "react";
import { Image } from '@imagekit/react';
import { Link } from "react-router";


export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex justify-between mt-5  ">
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
                    {" "}
                    {open ? "X" : "="}
                    {/* mobile menu  */}
                </div>
                <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-bold text-2xl bg-amber-400 absolute top-20  transition-all ease-in-out duration-75 ${open ? "right-0" : "right-[100%]"}`}>

                    <Link to="/home">Home</Link>
                    <Link to="/trending">Most Trending</Link>
                    <Link to="/popular">Most Popular</Link>
                    <Link to="/recent">Recent </Link>
                    <Link to="/login">Login</Link>


                </div>
            </div>

            <div className="hidden md:flex font-bold gap-5 xl:gap-12 items-center text-xl">
                <Link to="/home">Home</Link>
                <Link to="/trending">Most Trending</Link>
                <Link to="/popular">Most Popular</Link>
                <Link to="/recent">Recent </Link>
                <Link to="/login">Login</Link>

            </div>

        </div>
    );
}
