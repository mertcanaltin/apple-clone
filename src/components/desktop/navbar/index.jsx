import React from "react";
import AppleLogo from "../../../assets/svgs/apple-logo";
import SearchLogo from "../../../assets/svgs/search-logo";
import CartLogo from "../../../assets/svgs/cart-logo";

function NavbarDesktop() {
  return (
    <nav class="bg-apple-nav-bg h-10 overflow-hidden">
      <div class="container ml-[14rem] flex flex-wrap items-center">
        <a href="https://apple.com" class="flex items-center">
          <AppleLogo />
        </a>
        <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="hidden w-full ml-30 md:block md:w-auto" id="mobile-menu">
          <ul class="flex flex-col h-[18px] text-xs mt-4 ml-[2rem] md:flex-row md:space-x-8 md:mt-0 md:text-xs md:font-light">
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent md: md:p-0 " aria-current="page">Store</a>
            </li>
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover: md:p-0  ">Mac</a>
            </li>
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover: md:p-0  ">İpad</a>
            </li>
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover: md:p-0  ">İphone</a>
            </li>
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover: md:p-0  ">Watch</a>
            </li>
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover: md:p-0  ">AirPods</a>
            </li>
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover: md:p-0  ">Tv ve Ev</a>
            </li>
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover: md:p-0  ">Yalnızca apple'da</a>
            </li>
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover: md:p-0  ">Aksesuarlar</a>
            </li>
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover: md:p-0 ">Destek</a>
            </li>
            <li className="m-[-13px]">
              <SearchLogo />
            </li>
            <li className="m-[-13px]">
              <CartLogo />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarDesktop;
