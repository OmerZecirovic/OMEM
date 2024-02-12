"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !!(searchContainerRef.current as any).contains &&
        !(searchContainerRef.current as any).contains(event.target as Node)
      ) {
        setIsSearchVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // Perform the search operation
  };

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    // Toggle the menu state
    setMenuOpen(!isMenuOpen);
    console.log("Menu State:", isMenuOpen);

    // Add any additional logic for closing the menu here
  };

  const [isWomenVisible, setIsWomenVisible] = useState(false);
  const [isMenVisible, setIsMenVisible] = useState(false);

  const handleToggleWomenVisibility = () => {
    setIsWomenVisible(!isWomenVisible);
    setIsMenVisible(false); // Close men's menu when women's menu is toggled
  };

  const handleToggleMenVisibility = () => {
    setIsMenVisible(!isMenVisible);
    setIsWomenVisible(false); // Close women's menu when men's menu is toggled
  };

  return (
    <div className="bg-white">
      <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-black bg-opacity-25"></div>
        <div className="fixed inset-0 z-40 flex">
          <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                onClick={handleMenuToggle}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-2">
              <div className="border-b border-gray-200">
                <div
                  className="-mb-px flex space-x-8 px-4"
                  aria-orientation="horizontal"
                  role="tablist"
                >
                  <button
                    id="tabs-1-tab-1"
                    className="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                    aria-controls="tabs-1-panel-1"
                    role="tab"
                    type="button"
                  >
                    Women
                  </button>
                  <button
                    id="tabs-1-tab-2"
                    className="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                    aria-controls="tabs-1-panel-2"
                    role="tab"
                    type="button"
                  >
                    Men
                  </button>
                </div>
              </div>

              <div
                id="tabs-1-panel-1"
                className="space-y-10 px-4 pb-8 pt-10"
                aria-labelledby="tabs-1-tab-1"
                role="tabpanel"
                tabIndex={0}
              >
                <div className="grid grid-cols-2 gap-x-4">
                  <div className="group relative text-sm">
                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                      <Image
                        src="/assets/zduks2.jpeg"
                        width={300}
                        height={300}
                        alt="Models sitting back to back, wearing Basic Tee in black and bone."
                        className="object-cover object-center"
                      ></Image>
                    </div>
                    <a
                      href="/woman"
                      className="mt-6 block font-medium text-gray-900"
                    >
                      <span
                        className="absolute inset-0 z-10"
                        aria-hidden="true"
                      ></span>
                      New Arrivals
                    </a>
                    <p aria-hidden="true" className="mt-1">
                      Shop now
                    </p>
                  </div>
                  <div className="group relative text-sm">
                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                      <Image
                        src="/assets/zduks1.jpg"
                        width={300}
                        height={300}
                        alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
                        className="object-cover object-center"
                      ></Image>
                    </div>
                    <a
                      href="woman"
                      className="mt-6 block font-medium text-gray-900"
                    >
                      <span
                        className="absolute inset-0 z-10"
                        aria-hidden="true"
                      ></span>
                      Basic Tees
                    </a>
                    <p aria-hidden="true" className="mt-1">
                      Shop now
                    </p>
                  </div>
                </div>
                <div>
                  <p
                    id="women-clothing-heading-mobile"
                    className="font-medium text-gray-900"
                  >
                    Clothing
                  </p>
                  <ul
                    role="list"
                    aria-labelledby="women-clothing-heading-mobile"
                    className="mt-6 flex flex-col space-y-6"
                  >
                    <a href="/woman" className="-m-2 block p-2 text-gray-500">
                      Tops
                    </a>
                    <li className="flow-root">
                      <a href="/woman" className="-m-2 block p-2 text-gray-500">
                        Dresses
                      </a>
                    </li>
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Pants
                      </a>
                    </li>
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Denim
                      </a>
                    </li>
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Sweaters
                      </a>
                    </li>
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        T-Shirts
                      </a>
                    </li>
                    {/* <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Jackets
                      </a>
                    </li>
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Activewear
                      </a>
                    </li> */}
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Browse All
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p
                    id="women-accessories-heading-mobile"
                    className="font-medium text-gray-900"
                  >
                    Accessories
                  </p>
                  <ul
                    role="list"
                    aria-labelledby="women-accessories-heading-mobile"
                    className="mt-6 flex flex-col space-y-6"
                  >
                    {/* <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Watches
                      </a>
                    </li>
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Wallets
                      </a>
                    </li> */}
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Bags
                      </a>
                    </li>
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Sunglasses
                      </a>
                    </li>
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Hats
                      </a>
                    </li>
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Belts
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <div>
                  <p
                    id="women-brands-heading-mobile"
                    className="font-medium text-gray-900"
                  >
                    Brands
                  </p>
                  <ul
                    role="list"
                    aria-labelledby="women-brands-heading-mobile"
                    className="mt-6 flex flex-col space-y-6"
                  >
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Full Nelson
                      </a>
                    </li>
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        My Way
                      </a>
                    </li>
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Re-Arranged
                      </a>
                    </li>
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Counterfeit
                      </a>
                    </li>
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Significant Other
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
              <div
                id="tabs-1-panel-2"
                className="space-y-10 px-4 pb-8 pt-10"
                aria-labelledby="tabs-1-tab-2"
                role="tabpanel"
                tabIndex={0}
              >
                <div className="grid grid-cols-2 gap-x-4">
                  <div className="group relative text-sm">
                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                      <Image
                        src="/assets/duks1.jpg"
                        width={300}
                        height={300}
                        alt="Drawstring top with elastic loop closure and textured interior padding."
                        className="object-cover object-center"
                      ></Image>
                    </div>
                    <a
                      href="/man"
                      className="mt-6 block font-medium text-gray-900"
                    >
                      <span
                        className="absolute inset-0 z-10"
                        aria-hidden="true"
                      ></span>
                      New Arrivals
                    </a>
                    <p aria-hidden="true" className="mt-1">
                      Shop now
                    </p>
                  </div>
                  <div className="group relative text-sm">
                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                      <Image
                        src="/assets/duks2.jpg"
                        width={300}
                        height={300}
                        alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt."
                        className="object-cover object-center"
                      ></Image>
                    </div>
                    <a
                      href="/man"
                      className="mt-6 block font-medium text-gray-900"
                    >
                      <span
                        className="absolute inset-0 z-10"
                        aria-hidden="true"
                      ></span>
                      Artwork Tees
                    </a>
                    <p aria-hidden="true" className="mt-1">
                      Shop now
                    </p>
                  </div>
                </div>
                <div>
                  <p
                    id="men-clothing-heading-mobile"
                    className="font-medium text-gray-900"
                  >
                    Clothing
                  </p>
                  <ul
                    role="list"
                    aria-labelledby="men-clothing-heading-mobile"
                    className="mt-6 flex flex-col space-y-6"
                  >
                    {/* <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Tops
                      </a>
                    </li> */}
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        T-Shirts
                      </a>
                    </li>
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Sweaters
                      </a>
                    </li>
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Pants
                      </a>
                    </li>
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Jackets
                      </a>
                    </li>
                    {/* <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Activewear
                      </a>
                    </li> */}
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Browse All
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p
                    id="men-accessories-heading-mobile"
                    className="font-medium text-gray-900"
                  >
                    Accessories
                  </p>
                  <ul
                    role="list"
                    aria-labelledby="men-accessories-heading-mobile"
                    className="mt-6 flex flex-col space-y-6"
                  >
                    {/* <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Watches
                      </a>
                    </li>
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Wallets
                      </a>
                    </li> */}
                    {/* <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Bags
                      </a>
                    </li> */}
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Sunglasses
                      </a>
                    </li>
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Hats
                      </a>
                    </li>
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Belts
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <div>
                  <p
                    id="men-brands-heading-mobile"
                    className="font-medium text-gray-900"
                  >
                    Brands
                  </p>
                  <ul
                    role="list"
                    aria-labelledby="men-brands-heading-mobile"
                    className="mt-6 flex flex-col space-y-6"
                  >
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Re-Arranged
                      </a>
                    </li>
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Counterfeit
                      </a>
                    </li>
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        Full Nelson
                      </a>
                    </li>
                    <li className="flow-root">
                      <a href="#" className="-m-2 block p-2 text-gray-500">
                        My Way
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a
                  onClick={() => {
                    router.push("/login");
                  }}
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Sign in
                </a>
              </div>
              <div className="flow-root">
                <a
                  onClick={() => {
                    router.push("/register");
                  }}
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Create account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over 55€
        </p>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              <div className="flex z-10">
                <div className="flex h-full space-x-8">
                  <div className="flex">
                    <div className="relative flex">
                      <button
                        onClick={handleToggleWomenVisibility}
                        type="button"
                        className={`
                border-transparent text-gray-400 hover:text-gray-800 relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out
              `}
                        aria-expanded={isWomenVisible ? "true" : "false"}
                      >
                        Women
                      </button>
                    </div>

                    <div
                      className={`
              absolute inset-x-0 top-full text-sm text-gray-500
              ${
                isWomenVisible
                  ? "opacity-100 transition ease-out duration-200"
                  : "opacity-0 transition ease-in duration-150"
              }
            `}
                    >
                      <div className="relative bg-white">
                        <div className="mx-auto max-w-7xl px-8">
                          <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                            <div className="col-start-2 grid grid-cols-2 gap-x-8">
                              <div className="group relative text-base sm:text-sm">
                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                  <Image
                                    src="/assets/zduks2.jpeg"
                                    width={300}
                                    height={300}
                                    alt="Models sitting back to back, wearing Basic Tee in black and bone."
                                    className="object-cover object-center"
                                  ></Image>
                                </div>
                                <a
                                  href="/woman"
                                  className="mt-6 block font-medium text-gray-900"
                                >
                                  <span
                                    className="absolute inset-0 z-50"
                                    aria-hidden="true"
                                  ></span>
                                  New Arrivals
                                </a>
                                <p aria-hidden="true" className="mt-1">
                                  Shop now
                                </p>
                              </div>
                              <div className="group relative text-base sm:text-sm">
                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                  <Image
                                    src="/assets/zduks1.jpg"
                                    width={300}
                                    height={300}
                                    alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
                                    className="object-cover object-center"
                                  ></Image>
                                </div>
                                <a
                                  href="/woman"
                                  className="mt-6 block font-medium text-gray-900"
                                >
                                  <span
                                    className="absolute inset-0 z-10"
                                    aria-hidden="true"
                                  ></span>
                                  Basic Tees
                                </a>
                                <p aria-hidden="true" className="mt-1">
                                  Shop now
                                </p>
                              </div>
                            </div>
                            <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                              <div>
                                <p
                                  id="Clothing-heading"
                                  className="font-medium text-gray-900"
                                >
                                  Clothing
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby="Clothing-heading"
                                  className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                >
                                  <li className="flex">
                                    <a
                                      href="/woman"
                                      className="hover:text-gray-800"
                                    >
                                      Tops
                                    </a>
                                  </li>
                                  <li className="flex">
                                    <a
                                      href="/woman"
                                      className="hover:text-gray-800"
                                    >
                                      Dresses
                                    </a>
                                  </li>
                                  {/* <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Pants
                                    </a>
                                  </li> */}
                                  <li className="flex">
                                    <a
                                      href="/woman"
                                      className="hover:text-gray-800"
                                    >
                                      Denim
                                    </a>
                                  </li>
                                  <li className="flex">
                                    <a
                                      href="/woman"
                                      className="hover:text-gray-800"
                                    >
                                      Sweaters
                                    </a>
                                  </li>
                                  <li className="flex">
                                    <a
                                      href="/woman"
                                      className="hover:text-gray-800"
                                    >
                                      T-Shirts
                                    </a>
                                  </li>
                                  {/* <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Jackets
                                    </a>
                                  </li> */}
                                  {/* <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Activewear
                                    </a>
                                  </li> */}
                                  <li className="flex">
                                    <a
                                      href="/woman"
                                      className="hover:text-gray-800"
                                    >
                                      Browse All
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <p
                                  id="Accessories-heading"
                                  className="font-medium text-gray-900"
                                >
                                  Accessories
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby="Accessories-heading"
                                  className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                >
                                  {/* <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Watches
                                    </a>
                                  </li> */}
                                  {/* <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Wallets
                                    </a>
                                  </li> */}
                                  <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Bags
                                    </a>
                                  </li>
                                  <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Sunglasses
                                    </a>
                                  </li>
                                  <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Hats
                                    </a>
                                  </li>
                                  <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Belts
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* <div>
                                <p
                                  id="Brands-heading"
                                  className="font-medium text-gray-900"
                                >
                                  Brands
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby="Brands-heading"
                                  className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                >
                                  <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Full Nelson
                                    </a>
                                  </li>
                                  <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      My Way
                                    </a>
                                  </li>
                                  <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Re-Arranged
                                    </a>
                                  </li>
                                  <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Counterfeit
                                    </a>
                                  </li>
                                  <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Significant Other
                                    </a>
                                  </li>
                                </ul>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex z-10">
                    <div className="flex h-full space-x-8">
                      <div className="flex">
                        <div className="relative flex">
                          <button
                            onClick={handleToggleMenVisibility}
                            type="button"
                            className={`
                border-transparent text-gray-400 hover:text-gray-800 relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out
              `}
                            aria-expanded={isMenVisible ? "true" : "false"}
                          >
                            Men
                          </button>
                        </div>

                        <div
                          className={`
              absolute inset-x-0 top-full text-sm text-gray-500
              ${
                isMenVisible
                  ? "opacity-100 transition ease-out duration-200"
                  : "opacity-0 transition ease-in duration-150"
              }
            `}
                        >
                          <div className="relative bg-white">
                            <div className="mx-auto max-w-7xl px-8">
                              <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                  <div className="group relative text-base sm:text-sm">
                                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                      <Image
                                        src="/assets/duks1.jpg"
                                        width={300}
                                        height={300}
                                        alt="Drawstring top with elastic loop closure and textured interior padding."
                                        className="object-cover object-center"
                                      ></Image>
                                    </div>
                                    <a
                                      href="#"
                                      className="mt-6 block font-medium text-gray-900"
                                    >
                                      <span
                                        className="absolute inset-0 z-10"
                                        aria-hidden="true"
                                      ></span>
                                      New Arrivals
                                    </a>
                                    <p aria-hidden="true" className="mt-1">
                                      Shop now
                                    </p>
                                  </div>
                                  <div className="group relative text-base sm:text-sm">
                                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                      <Image
                                        src="/assets/duks2.jpg"
                                        width={300}
                                        height={300}
                                        alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt."
                                        className="object-cover object-center"
                                      ></Image>
                                    </div>
                                    <a
                                      href="#"
                                      className="mt-6 block font-medium text-gray-900"
                                    >
                                      <span
                                        className="absolute inset-0 z-10"
                                        aria-hidden="true"
                                      ></span>
                                      Artwork Tees
                                    </a>
                                    <p aria-hidden="true" className="mt-1">
                                      Shop now
                                    </p>
                                  </div>
                                </div>
                                <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                  <div>
                                    <p
                                      id="Clothing-heading"
                                      className="font-medium text-gray-900"
                                    >
                                      Clothing
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby="Clothing-heading"
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {/* <li className="flex">
                                    <a
                                      href="/man"
                                      className="hover:text-gray-800"
                                    >
                                      Tops
                                    </a>
                                  </li> */}
                                      <li className="flex">
                                        <a
                                          href="/man"
                                          className="hover:text-gray-800"
                                        >
                                          T-Shirts
                                        </a>
                                      </li>
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Sweaters
                                        </a>
                                      </li>
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Pants
                                        </a>
                                      </li>
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Jackets
                                        </a>
                                      </li>
                                      {/* <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Activewear
                                    </a>
                                  </li> */}
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Browse All
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div>
                                    <p
                                      id="Accessories-heading"
                                      className="font-medium text-gray-900"
                                    >
                                      Accessories
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby="Accessories-heading"
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {/* <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Watches
                                    </a>
                                  </li> */}
                                      {/* <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Wallets
                                    </a>
                                  </li> */}
                                      {/* <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Bags
                                    </a>
                                  </li> */}
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Sunglasses
                                        </a>
                                      </li>
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Hats
                                        </a>
                                      </li>
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Belts
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  {/* <div>
                                <p
                                  id="Brands-heading"
                                  className="font-medium text-gray-900"
                                >
                                  Brands
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby="Brands-heading"
                                  className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                >
                                  <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Re-Arranged
                                    </a>
                                  </li>
                                  <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Counterfeit
                                    </a>
                                  </li>
                                  <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      Full Nelson
                                    </a>
                                  </li>
                                  <li className="flex">
                                    <a href="#" className="hover:text-gray-800">
                                      My Way
                                    </a>
                                  </li>
                                </ul>
                              </div> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <button
                    onClick={() => {
                      router.push("/login");
                    }}
                    className="text-sm font-medium text-gray-400 hover:text-gray-800 rounded-md h-10"
                  >
                    Sign in
                  </button>
                  <span
                    className="h-6 w-px bg-gray-200"
                    aria-hidden="true"
                  ></span>
                  <button
                    onClick={() => {
                      router.push("/register");
                    }}
                    className="text-sm font-medium text-gray-400 hover:text-gray-800 rounded-md h-10"
                  >
                    Create account
                  </button>
                </div>

                <div className="flex lg:ml-6 relative" ref={searchContainerRef}>
                  <button
                    onClick={toggleSearchVisibility}
                    className="p-2 text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    <span className="sr-only">Search</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                  {isSearchVisible && (
                    <div className="absolute top-0 right-0 mt-2">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search..."
                        className="p-2 border rounded-md focus:outline-none text-black -mt-5 mr-10"
                        onKeyDown={handleKeyPress}
                      />
                    </div>
                  )}
                </div>

                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <svg
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
