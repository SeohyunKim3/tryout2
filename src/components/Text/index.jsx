import React from "react";

const sizeClasses = {
  txtPoppinsRegular1283: "font-normal font-poppins",
  txtInterMedium14Gray600: "font-inter font-medium",
  txtPoppinsRegular1584: "font-normal font-poppins",
  txtPoppinsRegular998Black900: "font-normal font-poppins",
  txtPoppinsRegular1283Black900: "font-normal font-poppins",
  txtPoppinsRegular11: "font-normal font-poppins",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsRegular144: "font-normal font-poppins",
  txtInterMedium14Red400: "font-inter font-medium",
  txtPoppinsRegular788: "font-normal font-poppins",
  txtPoppinsRegular1014WhiteA700: "font-normal font-poppins",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtInterMedium10: "font-inter font-medium",
  txtPoppinsRegular1131: "font-normal font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular1232: "font-normal font-poppins",
  txtInterMedium14: "font-inter font-medium",
  txtPoppinsRegular1014: "font-normal font-poppins",
  txtInterMedium84Gray600: "font-inter font-medium",
  txtPoppinsRegular788WhiteA700: "font-normal font-poppins",
  txtPoppinsRegular40: "font-normal font-poppins",
  txtPoppinsRegular14Gray600: "font-normal font-poppins",
  txtInterMedium84: "font-inter font-medium",
  txtPoppinsRegular1584WhiteA700: "font-normal font-poppins",
  txtPoppinsRegular1232WhiteA700: "font-normal font-poppins",
  txtPoppinsRegular998: "font-normal font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
