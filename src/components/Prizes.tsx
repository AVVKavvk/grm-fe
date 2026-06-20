import React from "react";

function Prizes() {
  return (
    <div className="font-['Montserrat']">
      <div className=" mx-auto px-4 mt-28 md:mt-40">
        <div className="text-center mb-12">
          <h2 className="font-extrabold text-4xl md:text-5xl text-white mb-5">
            Medals & <span className="text-[#F47B20]">Prizes</span>
          </h2>
        </div>
      </div>

      {/* Full Marathon Prizes */}
      <div className="py-12">
        <section className="mx-auto max-w-[1200px] px-4">
          <h2 className="text-2xl font-bold mb-4">
            Prize amounts for Full Marathon
          </h2>
          <p className="mb-4 text-gray-300">
            All prizes are awarded in Indian Rupees. The prize amounts for the
            Full Marathon are as follows:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-[#1A3A6B]">
              <thead>
                <tr className="bg-[#1A6FB4]">
                  <th className="border border-[#1A3A6B] px-4 py-2 text-left">
                    Category
                  </th>
                  <th className="border border-[#1A3A6B] px-4 py-2 text-left">
                    1st Prize
                  </th>
                  <th className="border border-[#1A3A6B] px-4 py-2 text-left">
                    2nd Prize
                  </th>
                  <th className="border border-[#1A3A6B] px-4 py-2 text-left">
                    3rd Prize
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Open Men (18–44)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹20,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹17,500</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹15,000</td>
                </tr>
                <tr className="bg-[#122B55]">
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Open Women (18–39)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹20,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹17,500</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹15,000</td>
                </tr>
                <tr>
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Veteran Men (45–54)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹9,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹7,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹5,000</td>
                </tr>
                <tr className="bg-[#122B55]">
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Veteran Women (40–49)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹9,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹7,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹5,000</td>
                </tr>
                <tr>
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Sr. Veteran Men (55–64)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹9,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹7,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹5,000</td>
                </tr>
                <tr className="bg-[#122B55]">
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Sr. Veteran Women (50–59)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹9,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹7,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹5,000</td>
                </tr>
                <tr>
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Super Veteran Men (65+)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹9,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹7,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹5,000</td>
                </tr>
                <tr className="bg-[#122B55]">
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Super Veteran Women (60+)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹9,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹7,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹5,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* 20 Miler Prizes */}
      <div className="bg-white py-12">
        <section className="mx-auto max-w-[1200px] px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Prize amounts for 20 Miler (32K)
          </h2>
          <p className="mb-4 text-gray-800">
            All prizes are awarded in Indian Rupees. The prize amounts for the
            20 Miler (32 KM) are as follows:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-[#1A3A6B]">
              <thead>
                <tr className="bg-[#1A6FB4]">
                  <th className="border border-[#1A3A6B] px-4 py-2 text-left">
                    Category
                  </th>
                  <th className="border border-[#1A3A6B] px-4 py-2 text-left">
                    1st Prize
                  </th>
                  <th className="border border-[#1A3A6B] px-4 py-2 text-left">
                    2nd Prize
                  </th>
                  <th className="border border-[#1A3A6B] px-4 py-2 text-left">
                    3rd Prize
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-gray-800 font-semibold">
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Open Men (18–44)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹17,500</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹15,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹12,500</td>
                </tr>
                <tr className="bg-[#122B55]">
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Open Women (18–39)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹17,500</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹15,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹12,500</td>
                </tr>
                <tr className="text-gray-800 font-semibold">
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Veteran Men (45–54)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹6,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹5,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹4,000</td>
                </tr>
                <tr className="bg-[#122B55]">
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Veteran Women (40–49)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹6,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹5,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹4,000</td>
                </tr>
                <tr className="text-gray-800 font-semibold">
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Sr. Veteran Men (55–64)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹6,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹5,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹4,000</td>
                </tr>
                <tr className="bg-[#122B55]">
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Sr. Veteran Women (50–59)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹6,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹5,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹4,000</td>
                </tr>
                <tr className="text-gray-800 font-semibold">
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Super Veteran Men (65+)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹6,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹5,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹4,000</td>
                </tr>
                <tr className="bg-[#122B55]">
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Super Veteran Women (60+)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹6,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹5,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹4,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Half Marathon Prizes */}
      <div className=" py-12">
        <section className="mx-auto max-w-[1200px] px-4">
          <h2 className="text-2xl font-bold mb-4">
            Prize amounts for Half Marathon
          </h2>
          <p className="mb-4 text-gray-300">
            All prizes are awarded in Indian Rupees. The prize amounts for the
            Half Marathon are as follows:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-[#1A3A6B]">
              <thead>
                <tr className="bg-[#1A6FB4]">
                  <th className="border border-[#1A3A6B] px-4 py-2 text-left">
                    Category
                  </th>
                  <th className="border border-[#1A3A6B] px-4 py-2 text-left">
                    1st Prize
                  </th>
                  <th className="border border-[#1A3A6B] px-4 py-2 text-left">
                    2nd Prize
                  </th>
                  <th className="border border-[#1A3A6B] px-4 py-2 text-left">
                    3rd Prize
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Open Men (18–44)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹15,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹12,500</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹10,000</td>
                </tr>
                <tr className="bg-[#122B55]">
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Open Women (18–39)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹15,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹12,500</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹10,000</td>
                </tr>
                <tr>
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Veteran Men (45–54)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹5,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹4,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹3,000</td>
                </tr>
                <tr className="bg-[#122B55]">
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Veteran Women (40–49)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹5,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹4,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹3,000</td>
                </tr>
                <tr>
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Sr. Veteran Men (55–64)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹5,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹4,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹3,000</td>
                </tr>
                <tr className="bg-[#122B55]">
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Sr. Veteran Women (50–59)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹5,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹4,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹3,000</td>
                </tr>
                <tr>
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Super Veteran Men (65+)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹5,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹4,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹3,000</td>
                </tr>
                <tr className="bg-[#122B55]">
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Super Veteran Women (60+)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹5,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹4,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹3,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* 10K Run Prizes */}
      <div className="bg-white py-12">
        <section className="mx-auto max-w-[1200px] px-4">
          <h2 className="text-2xl text-gray-800 font-bold mb-4">
            Prize amounts for 10K Run
          </h2>
          <p className="mb-4 text-gray-800">
            All prizes are awarded in Indian Rupees. The prize amounts for the
            10K Run are as follows:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-[#1A3A6B]">
              <thead>
                <tr className="bg-[#1A6FB4]">
                  <th className="border border-[#1A3A6B] px-4 py-2 text-left">
                    Category
                  </th>
                  <th className="border border-[#1A3A6B] px-4 py-2 text-left">
                    1st Prize
                  </th>
                  <th className="border border-[#1A3A6B] px-4 py-2 text-left">
                    2nd Prize
                  </th>
                  <th className="border border-[#1A3A6B] px-4 py-2 text-left">
                    3rd Prize
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-gray-800 font-semibold">
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Open Men (18–44)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹15,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹12,500</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹10,000</td>
                </tr>
                <tr className="bg-[#122B55]">
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Open Women (18–39)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹15,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹12,500</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹10,000</td>
                </tr>
                <tr className="text-gray-800 font-semibold">
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Veteran Men (45–54)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹5,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹4,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹3,000</td>
                </tr>
                <tr className="bg-[#122B55]">
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Veteran Women (40–49)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹5,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹4,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹3,000</td>
                </tr>
                <tr className="text-gray-800 font-semibold">
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Sr. Veteran Men (55–64)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹5,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹4,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹3,000</td>
                </tr>
                <tr className="bg-[#122B55]">
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Sr. Veteran Women (50–59)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹5,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹4,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹3,000</td>
                </tr>
                <tr className="text-gray-800 font-semibold">
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Super Veteran Men (65+)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹5,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹4,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹3,000</td>
                </tr>
                <tr className="bg-[#122B55]">
                  <td className="border border-[#1A3A6B] px-4 py-2">
                    Super Veteran Women (60+)
                  </td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹5,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹4,000</td>
                  <td className="border border-[#1A3A6B] px-4 py-2">₹3,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <section className="bg-[#122B55] text-white p-6 md:p-20 lg:p-40">
        <div className="">
          <h2 className="text-2xl font-bold mb-4">Age Categories for Prizes</h2>
          <p className="font-semibold mb-2">
            The age brackets for each prize category are as follows:
          </p>
          {/* Changed text-gray-600 to text-gray-300 for better visibility on dark blue */}
          <p className="text-sm italic mb-4 text-gray-300">
            (Age calculated as on Race Day)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Added text-gray-900 to all cards so the text doesn't inherit the white color from the parent section */}
          <div className="bg-[#1A3A6B] text-gray-100 p-4 rounded shadow-sm">
            <p className="font-semibold text-lg mb-2">Open Category:</p>
            <p>Men: 18 years and above, below 45 years</p>
            <p>Women: 18 years and above, below 40 years</p>
          </div>

          <div className="bg-[#1A3A6B] text-gray-100 p-4 rounded shadow-sm">
            <p className="font-semibold text-lg mb-2">Veteran Category:</p>
            <p>Men: 45 years and above, below 55 years</p>
            <p>Women: 40 years and above, below 50 years</p>
          </div>

          <div className="bg-[#1A3A6B] text-gray-100 p-4 rounded shadow-sm">
            <p className="font-semibold text-lg mb-2">
              Senior Veteran Category:
            </p>
            <p>Men: 55 years and above, below 65 years</p>
            <p>Women: 50 years and above, below 60 years</p>
          </div>

          <div className="bg-[#1A3A6B] text-gray-100 p-4 rounded shadow-sm">
            <p className="font-semibold text-lg mb-2">
              Super Veteran Category:
            </p>
            <p>Men: 65 years and above</p>
            <p>Women: 60 years and above</p>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="space-y-6 bg-white p-6 md:p-20 lg:p-40 text-gray-900">
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-semibold mb-2">
            Will I get a finisher medal?
          </h3>
          {/* Changed text-gray-300 to text-gray-600 for contrast against white */}
          <p className="text-gray-600">
            Yes! Every runner who crosses the finish line earns a medal.
          </p>
        </div>

        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-semibold mb-2">
            What prizes are available?
          </h3>
          <p className="text-gray-600">
            Prizes are awarded in Open and Age Categories. Open Category prizes
            are announced on race day, Age Category results are confirmed within
            3 days. Prize money is subject to Indian Income Tax laws.
          </p>
        </div>

        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-semibold mb-2">
            When and where will results be available?
          </h3>
          <p className="text-gray-600">
            Results and timing certificates will be published within a week at
            timingindia.com.
          </p>
        </div>

        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-semibold mb-2">
            Will there be photos of me?
          </h3>
          <p className="text-gray-600">
            Yes. Photos will be searchable by bib number on our website within a
            week of the event.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Prizes;
