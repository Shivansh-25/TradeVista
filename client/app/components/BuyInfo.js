import React from "react";

export default function BuyInfo() {
  return (
    <>
      <div className="flex justify-around">
        {" "}
        <div className="rounded-lg p-5 flex justify-between mt-10">
          <div className=" flex flex-col items-center justify-center">
            <div className="mb-5 bg-black rounded-full border-white border-2 p-2 pr-5 pl-5 ">
              VIRTUAL BALANCE 2030CN
            </div>
            <div className="bg-gray w-[40vw] h-[75vh] mr-5 p-5 rounded-lg">
              <div className="flex justify-between items-center max-h-[15vh]">
                <div>
                  <p className="text-md">STOCK INFORMATION</p>
                </div>
                <div>
                  {" "}
                  <button className="bg-orange-500 w-30 h-10 rounded-md p-2 mr-5  text-sm">
                    VIRTUAL BUY
                  </button>
                  <button className="bg-green-500 w-30 h-10 rounded-md p-2 text-sm">
                    REAL BUY
                  </button>
                </div>
              </div>
              <div className="flex items-center mt-3">
                <div className="border-t border-white w-[30vw]"></div>
                <span className="ml-2">Rs 42000</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <div className="mb-5 bg-black rounded-full border-white border-2 p-2 pr-5 pl-5 ">
            REAL BALANCE 2030CN
          </div>
          <div className="bg-gray w-[40vw] h-[75vh] mr-5 p-5 rounded-lg">
            <div className="flex justify-between items-center max-h-[15vh]">
              <div>
                <p className="text-md">STOCK INFORMATION</p>
              </div>
              <div>
                <button className="bg-orange-500 w-30 h-10 rounded-md p-2 mr-5 text-sm">
                  VIRTUAL BUY
                </button>
                <button className="bg-green-500 w-30 h-10 rounded-md p-2 text-sm">
                  REAL BUY
                </button>
              </div>
            </div>
            <div className="flex items-center mt-3">
              <div className="border-t border-white w-[30vw]"></div>
              <span className="ml-2">Rs 6969</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
