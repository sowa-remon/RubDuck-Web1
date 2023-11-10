import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-jost justify-start mx-auto p-12 md:px-10 sm:px-5 w-full">
        <Img
          className="h-[98px] md:h-auto ml-2 md:ml-[0] object-cover w-[24%]"
          src="images/img_rubduck1.png"
          alt="rubduckOne"
        />
        <div className="flex flex-col items-center ml-2 md:ml-[0] mr-[262px] mt-[126px] md:pl-10 sm:pl-5 pl-[254px] w-4/5 md:w-full">
          <div className="border-[5px] border-indigo-600 border-solid flex flex-col gap-[57px] justify-start p-[52px] md:px-10 sm:px-5 rounded-[25px] shadow-bs w-full">
            <Text
              className="md:ml-[0] ml-[3px] sm:text-[40px] md:text-[46px] text-[50px] text-gray-900"
              size="txtJostRomanBold50"
            >
              Login
            </Text>
            <div className="flex flex-col items-center justify-start mb-[22px] ml-3 md:ml-[0] mr-[30px] w-[94%] md:w-full">
              <div className="flex flex-col items-start justify-start max-w-2xl w-full">
                <Input
                  name="rea"
                  placeholder="Correo"
                  className="md:h-auto md:text-[22px] p-0 placeholder:text-blue-200 sm:h-auto sm:text-xl text-2xl text-left w-full"
                  wrapClassName="w-full"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start max-w-2xl mt-[45px] w-full">
                <Input
                  name="rea_One"
                  placeholder="Contraseña"
                  className="md:h-auto md:text-[22px] p-0 placeholder:text-blue-200 sm:h-auto sm:text-xl text-2xl text-left w-full"
                  wrapClassName="w-full"
                ></Input>
              </div>
              <Button
                className="common-pointer border-b-2 border-blue_gray-800 border-r-2 border-solid cursor-pointer font-medium min-w-[300px] mt-[55px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                onClick={() => navigate("/seleccionarlenguaje")}
                shape="round"
                color="indigo_600"
                size="xs"
                variant="fill"
              >
                Ingresar
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end ml-2 md:ml-[0] mr-[262px] my-12 md:pl-10 sm:pl-5 pl-[774px] w-4/5 md:w-full">
          <Button
            className="common-pointer cursor-pointer font-medium min-w-[300px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
            onClick={() => navigate("/signup")}
            shape="round"
            color="orange_400"
            size="xs"
            variant="outline"
          >
            Regístrarme
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
