import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const IndexPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-jost items-center justify-start mx-auto p-12 md:px-10 sm:px-5 w-full">
        <div className="flex flex-col justify-start max-w-[1293px] mb-[210px] mx-auto w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <Img
              className="h-[98px] md:h-auto object-cover"
              src="images/img_rubduck1.png"
              alt="rubduckOne"
            />
            <div
              className="common-pointer flex md:flex-1 sm:flex-col flex-row gap-[39px] items-start justify-between w-[45%] md:w-full"
              onClick={() => navigate("/perfil")}
            >
              <div className="flex flex-row gap-[26px] items-center justify-between p-1 w-[58%] sm:w-full">
                <Text
                  className="ml-[9px] text-black-900 text-center text-xl"
                  size="txtJostRomanMedium20"
                >
                  Continuar aprendiendo
                </Text>
                <Img
                  className="h-[60px] md:h-auto mr-[17px] object-cover rounded-[15px] w-[60px]"
                  src="images/img_image1.png"
                  alt="imageOne"
                />
              </div>
              <div className="flex flex-row gap-[11px] items-center justify-between w-[36%] sm:w-full">
                <Text
                  className="text-black-900 text-center text-xl"
                  size="txtJostRomanMedium20"
                >
                  Rubén El Pato
                </Text>
                <Img
                  className="h-[70px] w-[70px]"
                  src="images/img_personfill0wght400grad0opsz24_1.svg"
                  alt="personfill0wg"
                />
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[303px] mt-[87px] sm:text-[40px] md:text-[46px] text-[50px] text-gray-900"
            size="txtJostRomanBold50"
          >
            Fundamentos de Programación
          </Text>
          <Img
            className="h-[143px] md:h-auto md:ml-[0] ml-[590px] mt-[37px] object-cover w-[15%] sm:w-full"
            src="images/img_component3.png"
            alt="componentThree"
          />
          <Text
            className="md:ml-[0] ml-[629px] mt-[9px] text-gray-900 text-xl"
            size="txtJostRomanMedium20Gray900"
          >
            Historia
          </Text>
          <div className="flex flex-row items-center justify-between md:ml-[0] ml-[426px] mt-[50px] w-[37%] md:w-full">
            <div
              className="common-pointer border-[5px] border-indigo-600 border-solid flex flex-col items-center justify-end p-[21px] sm:px-5 rounded-[71px] shadow-bs"
              onClick={() => navigate("/ejercicio")}
            >
              <Img
                className="h-[100px] md:h-auto object-cover w-[100px]"
                src="images/img_group1.png"
                alt="groupOne"
              />
            </div>
            <Img
              className="h-[143px] md:h-auto object-cover"
              src="images/img_component1.png"
              alt="componentOne"
            />
          </div>
          <div className="flex flex-row items-start justify-between md:ml-[0] ml-[456px] mt-[15px] w-[32%] md:w-full">
            <Text
              className="mt-0.5 text-gray-900 text-xl"
              size="txtJostRomanMedium20Gray900"
            >
              Principios
            </Text>
            <Text
              className="mb-0.5 text-gray-900 text-xl"
              size="txtJostRomanMedium20Gray900"
            >
              Variables
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
