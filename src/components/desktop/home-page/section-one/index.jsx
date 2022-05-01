import React from "react";

function SectionOne() {
  return (
    <div className="mb-[16%]">
      <div className="h-full text-center mt-[5%] font-medium top-0 left-0 w-full text-black">
        <span className="text-[1.4rem]">Yeni</span>
        <img className="block m-auto w-[17%]" src="https://www.apple.com/v/home/an/images/logos/iphone-se/logo_hero_iphonese__dtb7zrygggeq_large_2x.png" alt="" />
        <h3 className="font-light text-[31px]">Bu güce ulaşmak hiç güç değil.</h3>
      </div>

      <div>
        <img className="absolute w-full z-[-1] mt-[-8%]" src="https://www.apple.com/v/home/an/images/heroes/iphone-se/hero_iphonese_avail__eg8srhcnpo66_large_2x.jpg" alt="" />
      </div>
    </div>
  );
}

export default SectionOne;
