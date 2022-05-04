import React from "react";
import AppleLogo from "../../../assets/svgs/apple-logo";
import SearchLogo from "../../../assets/svgs/search-logo";
import CartLogo from "../../../assets/svgs/cart-logo";

function NavbarDesktop() {
  return (
    <nav class="bg-apple-nav-bg h-10 overflow-hidden fixed w-100 t-0 z-50">
      <div class="container ml-[14rem] flex flex-wrap items-center 2xl:ml-[32rem]">
        <a href="https://apple.com" class="flex items-center">
          <AppleLogo />
        </a>
   
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
