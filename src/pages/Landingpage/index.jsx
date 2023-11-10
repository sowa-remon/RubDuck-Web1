import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const LandingpagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-belanosima items-center justify-end mx-auto pt-12 w-full">
        <div className="flex flex-col md:gap-10 gap-[127px] justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1200px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[151px] justify-start w-[54%] md:w-full">
              <Img
                className="h-[98px] md:h-auto object-cover w-[49%]"
                src="images/img_rubduck1.png"
                alt="rubduckOne"
              />
              <div className="h-[466px] md:ml-[0] ml-[25px] relative w-[97%] md:w-full">
                <Img
                  className="h-[466px] m-auto object-cover rounded-[233px] w-full"
                  src="images/img_image4.png"
                  alt="imageFour"
                />
                <Text
                  className="absolute h-max inset-[0] justify-center m-auto rotate-[22deg] md:text-5xl text-[80px] text-blue_gray-800_a2 text-center tracking-[1.60px] w-max"
                  size="txtBelanosimaSemiBold80"
                >
                  Imagen no final
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col font-jost md:gap-10 gap-20 items-center justify-start md:mt-0 mt-[287px] w-[35%] md:w-full">
              <Text
                className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-900"
                size="txtJostRomanBold50"
              >
                ¡Comienza ahora!
              </Text>
              <div className="flex flex-col md:gap-10 gap-[67px] items-center justify-start w-[73%] md:w-full">
                <Button
                  className="common-pointer border-b-2 border-blue_gray-800 border-r-2 border-solid cursor-pointer font-medium min-w-[300px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                  onClick={() => navigate("/signup")}
                  shape="round"
                  color="indigo_600"
                  size="xs"
                  variant="fill"
                >
                  Regístrate
                </Button>
                <Button
                  className="common-pointer cursor-pointer font-medium min-w-[300px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                  onClick={() => navigate("/login")}
                  shape="round"
                  color="orange_400"
                  size="xs"
                  variant="outline"
                >
                  Ya tengo una cuenta
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-indigo-600 flex md:flex-col flex-row md:gap-5 items-start justify-start p-[31px] sm:px-5 w-full">
            <Img
              className="h-[27px] md:ml-[0] ml-[437px] md:mt-0 mt-7"
              src="images/img_arrowleft.svg"
              alt="arrowleft"
            />
            <Img
              className="h-[60px] md:h-auto md:ml-[0] ml-[74px] md:mt-0 mt-3 object-cover rounded-[15px] w-[60px]"
              src="images/img_image1.png"
              alt="imageOne"
            />
            <Img
              className="h-[27px] md:ml-[0] ml-[343px] md:mt-0 mt-7"
              src="images/img_arrowright.svg"
              alt="arrowright"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingpagePage;
