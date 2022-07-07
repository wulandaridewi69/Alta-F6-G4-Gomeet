import React, { useState } from "react";
import Layout from "../components/Layout";

import Image from "next/image";
import poster from "../assets/poster.png";

function ConfirmationAttend() {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <Layout>
        <div className="mb-auto">
          <div className="text-center text-white text-5xl p-12 w-full">
            Confirmation of Attendance
          </div>

          <div className="w-full bg-gray-200 h-px mb-6 ">
            <div className="bg-white h-px"></div>
          </div>

          <div className="w-full overflow-auto text-white font-bold flex justify-evenly">
            <div>
              <div>CODING EVENT</div>
              <div className="h-64">
                <Image src={poster} className="h-full" alt="" />
              </div>
            </div>
            <div>
              <div className="mt-5">
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
          </div>

          <div className="w-full bg-gray-200 h-px mb-6  mt-5">
            <div className="bg-white h-px"></div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
export default ConfirmationAttend;
