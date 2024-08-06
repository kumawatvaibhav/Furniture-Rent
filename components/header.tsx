'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const handle = () => {
    router.push("/Login");
  }

  return (
    <div className="fixed top-0 left-0 right-0 flex px-8 py-3 justify-between z-10">
      <Link href="/">
        <div className="font-bold text-2xl flex justify-center items-center">
          Ario!
        </div>
      </Link>
      <div className="flex px-2 pl-6 space-x-6 justify-between py-2">
        <Link href="#Explore">
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
        <button
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          onClick={handle}
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-400 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Login
          </span>
        </button>
      </div>
    </div>
  );
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}

export default Header;
