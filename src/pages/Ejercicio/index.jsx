import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const EjercicioPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-jost items-center justify-start mx-auto p-12 md:px-10 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[82px] items-center justify-start max-w-[1299px] mb-[92px] mx-auto w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <Img
              className="common-pointer h-[98px] md:h-auto object-cover"
              src="images/img_rubduck1.png"
              alt="rubduckOne"
              onClick={() => navigate("/index")}
            />
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[204px]"
              onClick={() => navigate("/perfil")}
              rightIcon={
                <Img
                  className="h-[70px] ml-[11px]"
                  src="images/img_personfill0wght400grad0opsz24_1.svg"
                  alt="person_FILL0_wght400_GRAD0_opsz24 1"
                />
              }
            >
              <div className="font-medium leading-[normal] text-black-900 text-center text-xl">
                Rubén El Pato
              </div>
            </Button>
          </div>
          <div className="border-[5px] border-indigo-600 border-solid flex flex-col justify-start p-[62px] md:px-10 sm:px-5 rounded-[25px] shadow-bs w-[82%] md:w-full">
            <Text
              className="md:ml-[0] ml-[23px] sm:text-[40px] md:text-[46px] text-[50px] text-gray-900"
              size="txtJostRomanBold50"
            >
              Título
            </Text>
            <Text
              className="leading-[24.00px] md:ml-[0] mt-8 mx-[34px] text-black-900 text-xl w-[93%] sm:w-full"
              size="txtJostRomanRegular20"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. At
              urna condimentum mattis pellentesque id. Massa enim nec dui nunc
              mattis enim ut tellus. Quis lectus nulla at volutpat diam ut
              venenatis.
            </Text>
            <div className="bg-gray-900_01 border border-orange-400 border-solid flex flex-col font-ubuntumono items-start justify-start md:ml-[0] ml-[42px] mr-[34px] mt-3.5 p-[34px] sm:px-5 rounded-[19px]">
              <Text
                className="mb-[105px] text-gray-100_87 text-xl"
                size="txtUbuntuMonoRegular20"
              >
                Código
              </Text>
            </div>
            <Button
              className="border-b-2 border-blue_gray-800 border-r-2 border-solid cursor-pointer font-medium mb-2 min-w-[300px] mt-[41px] mx-auto sm:text-[21px] md:text-[23px] text-[25px] text-center"
              shape="round"
              color="indigo_600"
              size="xs"
              variant="fill"
            >
              Comprobar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EjercicioPage;
