import React, { useState } from "react";
import Layout from "../components/Layout";
import CustomeButton from "../components/CustomButton";
import { useRouter } from "next/router";

function Confirmation() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  }
  


  return (
    <div>
      <Layout>
        <div className="mb-auto">
          <div className="text-center text-white text-5xl p-12 w-full">
            Receipt
          </div>
          <div className="w-full bg-gray-200 h-px mb-6 ">
            <div className="bg-white h-px"></div>
          </div>
          <div className="flex justify-evenly items-center w-full overflow-auto text-white">
            <div className="font-bold">
              <div>CODING EVENT</div>
              <div>
                <div>Status</div>
                <div className="font-thin">offline/online</div>
              </div>
              <div>
                <div>Date Location</div>
                <div className="flex font-thin">
                  <div>Jalan Paragan</div>
                  <div>21 November 2020</div>
                </div>
              </div>
              <div>
                <div>Harga</div>
                <div className="font-thin">100000</div>
              </div>
              <div>
                <div>Qty</div>
                <div className="font-thin">1</div>
              </div>
            </div>
            <div>
              <div className="bg-slate-100 bg-opacity-20 p-8 rounded-lg">
                <div className="mb-5 text-white font-bold">
                  CODING EVENT RECEIPT
                </div>
                <div className="flex">
                  <div>Lokasi</div>
                  <div>Tanggal</div>
                </div>
                <div>Harga</div>
                <div>Metod Payment</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10" onClick={handleClick}>
            <CustomeButton
              label="Pay"
              className={`bg-[#E49318] text-white font-bold py-1 px-14 rounded-lg ${
                loading && "bg-orange-200 cursor-not-allowed"
              }`}
            />
          </div>
          <div className="w-full bg-gray-200 h-px mb-6  mt-5">
            <div className="bg-white h-px"></div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
export default Confirmation;
