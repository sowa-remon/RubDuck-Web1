import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const SeleccionarlenguajePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-jost items-center justify-start mx-auto p-12 md:px-10 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[82px] items-center justify-start max-w-[1295px] mb-[92px] mx-auto w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
            <Img
              className="h-[98px] md:h-auto object-cover"
              src="images/img_rubduck1.png"
              alt="rubduckOne"
            />
            <div
              className="common-pointer flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-start justify-between mb-[3px] md:mt-0 mt-6 w-[44%] md:w-full"
              onClick={() => navigate("/perfil")}
            >
              <div className="flex flex-row gap-[26px] items-center justify-between p-1 w-[58%] sm:w-full">
                <Text
                  className="ml-[9px] text-black-900 text-center text-xl"
                  size="txtJostRomanMedium20"
                >
                  Continuar aprendiendo
                </Text>
                <div className="h-[60px] mr-[17px] relative w-[60px]">
                  <Img
                    className="h-[60px] m-auto object-cover rounded-[15px] w-[60px]"
                    src="images/img_image1.png"
                    alt="imageOne"
                  />
                  <Img
                    className="absolute h-[60px] inset-[0] justify-center m-auto object-cover rounded-[15px] w-[60px]"
                    src="images/img_image1.png"
                    alt="imageTwo"
                  />
                </div>
              </div>
              <Button
                className="bg-transparent cursor-pointer flex items-center justify-center min-w-[162px]"
                rightIcon={
                  <Img
                    className="h-[70px] ml-[25px]"
                    src="images/img_personfill0wght400grad0opsz24_1.svg"
                    alt="person_FILL0_wght400_GRAD0_opsz24 1"
                  />
                }
              >
                <div className="font-medium leading-[normal] text-black-900 text-center text-xl">
                  Usuario
                </div>
              </Button>
            </div>
          </div>
          <div className="border-[5px] border-indigo-600 border-solid flex flex-col items-center justify-start p-[43px] md:px-10 sm:px-5 rounded-[25px] shadow-bs w-[82%] md:w-full">
            <div className="flex flex-col items-center justify-start mb-[27px] w-[81%] md:w-full">
              <Text
                className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-900"
                size="txtJostRomanBold50"
              >
                Selecciona un lenguaje
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between mt-[38px] w-full">
                <div className="flex flex-col relative w-[16%] md:w-full">
                  <Img
                    className="h-[130px] mx-auto object-cover w-full"
                    src="images/img_image6.png"
                    alt="imageSix"
                  />
                  <Text
                    className="mt-[-0.5px] mx-auto text-gray-900 text-xl z-[1]"
                    size="txtJostRomanMedium20Gray900"
                  >
                    C++
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col justify-start md:mt-0 mt-2.5 w-[62%] md:w-full">
                  <div className="flex flex-row items-start justify-between ml-9 md:ml-[0] w-[93%] md:w-full">
                    <Img
                      className="h-[110px] md:h-auto object-cover rounded-[15px] w-[110px]"
                      src="images/img_image3.png"
                      alt="imageThree"
                    />
                    <Img
                      className="h-[120px] md:h-auto object-cover rounded-[15px] w-[120px]"
                      src="images/img_image7.png"
                      alt="imageSeven"
                    />
                  </div>
                  <div className="flex flex-row gap-[218px] items-center justify-start w-[92%] md:w-full">
                    <Text
                      className="text-gray-900 text-xl"
                      size="txtJostRomanMedium20Gray900"
                    >
                      Javascript (en curso)
                    </Text>
                    <Text
                      className="text-gray-900 text-xl"
                      size="txtJostRomanMedium20Gray900"
                    >
                      Java
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between mt-[26px] w-[98%] md:w-full">
                <Img
                  className="h-[110px] md:h-auto object-cover w-[110px]"
                  src="images/img_image2.png"
                  alt="imageTwo_One"
                />
                <Img
                  className="h-[120px] md:h-auto object-cover w-[120px]"
                  src="images/img_image8.png"
                  alt="imageEight"
                />
                <Img
                  className="h-[94px] md:h-auto object-cover w-[95px]"
                  src="images/img_image9.png"
                  alt="imageNine"
                />
              </div>
              <div className="flex flex-row items-start justify-between mt-[7px] w-[91%] md:w-full">
                <Text
                  className="text-gray-900 text-xl"
                  size="txtJostRomanMedium20Gray900"
                >
                  Python
                </Text>
                <Text
                  className="text-gray-900 text-xl"
                  size="txtJostRomanMedium20Gray900"
                >
                  PHP
                </Text>
                <Text
                  className="text-gray-900 text-xl"
                  size="txtJostRomanMedium20Gray900"
                >
                  Dart
                </Text>
              </div>
              <Button
                className="common-pointer border-b-2 border-blue_gray-800 border-r-2 border-solid cursor-pointer font-medium min-w-[300px] mt-[21px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                onClick={() => navigate("/index")}
                shape="round"
                color="indigo_600"
                size="xs"
                variant="fill"
              >
                Aprender
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeleccionarlenguajePage;
