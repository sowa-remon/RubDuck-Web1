import React from "react";

const sizeClasses = {
  txtBelanosimaSemiBold80: "font-belanosima font-semibold",
  txtJostRomanRegular20: "font-jost font-normal",
  txtJostRomanBold50: "font-bold font-jost",
  txtJostRomanMedium20Gray900: "font-jost font-medium",
  txtUbuntuMonoRegular20: "font-normal font-ubuntumono",
  txtJostRomanMedium30: "font-jost font-medium",
  txtJostRomanMedium20: "font-jost font-medium",
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
