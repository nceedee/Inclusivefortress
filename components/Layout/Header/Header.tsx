import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router"; // Import the useRouter hook

export const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter(); // Get the router object

  return (
    <div>
      <nav className="w-full bg-primary fixed top-0 left-0 right-0 z-[1000]">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-c`enter justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <Image
                  alt="app logo"
                  src="/image/logo.png"
                  width={60}
                  height={60}
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li
                  className={`pb-6 text-xl ${
                    router.pathname === "/about"
                      ? "text-secondary"
                      : "text-accent"
                  } py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-secondary  border-secondary  md:hover:text-secondary md:hover:bg-transparent`}
                >
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    About Us
                  </Link>
                </li>
                <li
                  onClick={() => setShowDropdown(!showDropdown)}
                  className={`relative pb-6 text-xl sm:hidden md:block cursor-pointer ${
                    router.pathname === "/divisions/inclusive-white"
                      ? "text-secondary"
                      : "text-accent"
                  } py-2 md:px-6 text-center border-b-2 md:border-b-0 border-secondary md:hover:text-secondary md:hover:bg-transparent`}
                >
                  <div>
                    Divisions
                    {showDropdown && (
                      <div className="p-4 bg-accent rounded-b absolute top-20 w-[180px] left-[-24px]">
                        <Link
                          href="/divisions/inclusive-white"
                          className="text-primary"
                        >
                          Inclusive White
                        </Link>
                      </div>
                    )}
                  </div>
                </li>
                <li
                  onClick={() => setShowDropdown(!showDropdown)}
                  className={`relative pb-6 text-xl cursor-pointer sm:block  md:hidden ${
                    router.pathname === "/divisions/inclusive-white"
                      ? "text-secondary"
                      : "text-accent"
                  } py-2 md:px-6 text-center border-b-2 md:border-b-0 border-secondary md:hover:text-secondary md:hover:bg-transparent`}
                >
                  <Link
                    href="/divisions/inclusive-white"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Inclusive White
                  </Link>
                </li>
                <li
                  className={`pb-6 text-xl ${
                    router.pathname === "/mision&vision"
                      ? "text-secondary"
                      : "text-accent"
                  } py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-secondary  border-secondary  md:hover:text-secondary md:hover:bg-transparent`}
                >
                  <Link
                    href="/mision&vision"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Mision | Vision Statement
                  </Link>
                </li>
                <li
                  className={`pb-6 text-xl ${
                    router.pathname === "/contact"
                      ? "text-secondary"
                      : "text-accent"
                  } py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-secondary  border-secondary  md:hover:text-secondary md:hover:bg-transparent`}
                >
                  <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
