import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const PerfilPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-jost items-center justify-start mx-auto md:pl-10 pl-12 sm:pl-5 py-12 w-full">
        <div className="flex flex-col justify-start max-w-[1384px] mb-[59px] mx-auto w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <Img
              className="common-pointer h-[98px] md:h-auto object-cover"
              src="images/img_rubduck1.png"
              alt="rubduckOne"
              onClick={() => navigate("/index")}
            />
            <div className="flex flex-col items-start justify-start pb-[3px] pr-[3px]">
              <div
                className="common-pointer flex flex-row gap-[26px] items-center justify-start p-1 w-[87%] md:w-full"
                onClick={() => navigate("/index")}
              >
                <Text
                  className="ml-[9px] text-black-900 text-center text-xl"
                  size="txtJostRomanMedium20"
                >
                  Continuar aprendiendo
                </Text>
                <Img
                  className="h-[60px] md:h-auto object-cover rounded-[15px] w-[60px]"
                  src="images/img_image1.png"
                  alt="imageOne"
                />
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[565px] mt-[118px] sm:text-[40px] md:text-[46px] text-[50px] text-gray-900"
            size="txtJostRomanBold50"
          >
            Mi perfil
          </Text>
          <div className="border-[5px] border-indigo-600 border-solid flex flex-col h-[350px] items-center justify-start md:ml-[0] ml-[489px] mt-16 rounded-[50%] w-[350px]">
            <Img
              className="h-[350px] md:h-auto rounded-[50%] w-[350px]"
              src="images/img_image4_350x350.png"
              alt="imageFour"
            />
          </div>
          <Text
            className="md:ml-[0] ml-[530px] mt-[38px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
            size="txtJostRomanMedium30"
          >
            Nombre del Usuario
          </Text>
          <Text
            className="md:ml-[0] ml-[538px] mt-[37px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
            size="txtJostRomanMedium30"
          >
            Correo del Usuario
          </Text>
        </div>
      </div>
    </>
  );
};

export default PerfilPage;
