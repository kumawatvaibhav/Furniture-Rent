"use client";
import { ShoppingCartIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const router = useRouter();
  const [user, setUser] = useState(false); // Updated to use state
  const [isAdmin, setIsAdmin] = useState(false); // Assuming admin check based on user role

  useEffect(() => {
    // Check for token in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setUser(true); // User is logged in
      // Here you can also verify if the user is an admin using token or a role check
      // For example, by decoding the JWT or making an API call to fetch user role
      setIsAdmin(false); // Set based on token or role (if applicable)
    }
  }, []);

  const handleLogin = () => {
    router.push("/Login");
  };

  return (
    <div className="fixed top-0 left-0 right-0 flex px-8 py-3 justify-between z-10 transition-all">
      <Link href="/">
        <div className="font-bold text-2xl flex justify-center items-center">
          Ario!
        </div>
      </Link>
      <div className="flex px-2 pl-6 space-x-6 justify-between py-2">
        <Link href="/#Explore">
          <nav className="text-black text-bold flex justify-center items-center">
            About
          </nav>
        </Link>
        <Link href="/catalog">
          <nav className="text-black text-bold flex justify-center items-center">
            Catalog
          </nav>
        </Link>
        <Link href="/cart" prefetch={false}>
          <ShoppingCartIcon className="text-black flex justify-center items-center" />
        </Link>

        <div>
          {user ? (
            <>
              {isAdmin ? (
                <Link href="/api/admin">
                  <Avatar>
                    <AvatarImage src="./Movers.png" />
                    <AvatarFallback>Admin</AvatarFallback>
                  </Avatar>
                </Link>
              ) : (
                <Link href={`/profile`}>
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                    />
                    <AvatarFallback>VK</AvatarFallback>
                  </Avatar>
                </Link>
              )}
            </>
          ) : (
            <button
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              onClick={handleLogin}
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-400 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Login
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
