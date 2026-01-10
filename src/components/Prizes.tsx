import React from "react";

function Prizes() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Results, Medals & Prizes
          </span>
        </h2>
      </div>
      <div className="space-y-12">
        {/* Full Marathon Prizes */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Prize amounts for Full Marathon
          </h2>
          <p className="mb-4 text-gray-700">
            All prizes are awarded in Indian Rupees. The prize amounts for the
            Full Marathon are as follows:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Category
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    1st Prize
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    2nd Prize
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    3rd Prize
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Open Men (18–44)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹20,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹17,500</td>
                  <td className="border border-gray-300 px-4 py-2">₹15,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    Open Women (18–39)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹20,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹17,500</td>
                  <td className="border border-gray-300 px-4 py-2">₹15,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Veteran Men (45–54)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹9,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹7,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹5,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    Veteran Women (40–49)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹9,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹7,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹5,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Sr. Veteran Men (55–64)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹9,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹7,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹5,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    Sr. Veteran Women (50–59)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹9,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹7,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹5,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Super Veteran Men (65+)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹9,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹7,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹5,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    Super Veteran Women (60+)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹9,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹7,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹5,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 20 Miler Prizes */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Prize amounts for 20 Miler (32K)
          </h2>
          <p className="mb-4 text-gray-700">
            All prizes are awarded in Indian Rupees. The prize amounts for the
            20 Miler (32 KM) are as follows:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Category
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    1st Prize
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    2nd Prize
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    3rd Prize
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Open Men (18–44)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹17,500</td>
                  <td className="border border-gray-300 px-4 py-2">₹15,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹12,500</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    Open Women (18–39)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹17,500</td>
                  <td className="border border-gray-300 px-4 py-2">₹15,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹12,500</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Veteran Men (45–54)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹6,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹5,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹4,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    Veteran Women (40–49)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹6,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹5,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹4,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Sr. Veteran Men (55–64)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹6,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹5,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹4,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    Sr. Veteran Women (50–59)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹6,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹5,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹4,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Super Veteran Men (65+)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹6,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹5,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹4,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    Super Veteran Women (60+)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹6,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹5,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹4,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Half Marathon Prizes */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Prize amounts for Half Marathon
          </h2>
          <p className="mb-4 text-gray-700">
            All prizes are awarded in Indian Rupees. The prize amounts for the
            Half Marathon are as follows:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Category
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    1st Prize
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    2nd Prize
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    3rd Prize
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Open Men (18–44)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹15,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹12,500</td>
                  <td className="border border-gray-300 px-4 py-2">₹10,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    Open Women (18–39)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹15,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹12,500</td>
                  <td className="border border-gray-300 px-4 py-2">₹10,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Veteran Men (45–54)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹5,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹4,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹3,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    Veteran Women (40–49)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹5,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹4,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹3,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Sr. Veteran Men (55–64)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹5,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹4,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹3,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    Sr. Veteran Women (50–59)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹5,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹4,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹3,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Super Veteran Men (65+)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹5,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹4,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹3,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    Super Veteran Women (60+)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹5,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹4,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹3,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 10K Run Prizes */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Prize amounts for 10K Run</h2>
          <p className="mb-4 text-gray-700">
            All prizes are awarded in Indian Rupees. The prize amounts for the
            10K Run are as follows:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Category
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    1st Prize
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    2nd Prize
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    3rd Prize
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Open Men (18–44)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹15,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹12,500</td>
                  <td className="border border-gray-300 px-4 py-2">₹10,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    Open Women (18–39)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹15,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹12,500</td>
                  <td className="border border-gray-300 px-4 py-2">₹10,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Veteran Men (45–54)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹5,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹4,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹3,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    Veteran Women (40–49)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹5,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹4,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹3,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Sr. Veteran Men (55–64)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹5,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹4,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹3,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    Sr. Veteran Women (50–59)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹5,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹4,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹3,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Super Veteran Men (65+)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹5,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹4,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹3,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    Super Veteran Women (60+)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">₹5,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹4,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹3,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Age Categories */}
        <section className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Age Categories for Prizes</h2>
          <p className="font-semibold mb-2">
            The age brackets for each prize category are as follows:
          </p>
          <p className="text-sm italic mb-4 text-gray-600">
            (Age calculated as on Race Day)
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded shadow-sm">
              <p className="font-semibold text-lg mb-2">Open Category:</p>
              <p>Men: 18 years and above, below 45 years</p>
              <p>Women: 18 years and above, below 40 years</p>
            </div>

            <div className="bg-white p-4 rounded shadow-sm">
              <p className="font-semibold text-lg mb-2">Veteran Category:</p>
              <p>Men: 45 years and above, below 55 years</p>
              <p>Women: 40 years and above, below 50 years</p>
            </div>

            <div className="bg-white p-4 rounded shadow-sm">
              <p className="font-semibold text-lg mb-2">
                Senior Veteran Category:
              </p>
              <p>Men: 55 years and above, below 65 years</p>
              <p>Women: 50 years and above, below 60 years</p>
            </div>

            <div className="bg-white p-4 rounded shadow-sm">
              <p className="font-semibold text-lg mb-2">
                Super Veteran Category:
              </p>
              <p>Men: 65 years and above</p>
              <p>Women: 60 years and above</p>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold mb-2">
              Will I get a finisher medal?
            </h3>
            <p className="text-gray-700">
              Yes! Every runner who crosses the finish line earns a medal.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold mb-2">
              What prizes are available?
            </h3>
            <p className="text-gray-700">
              Prizes are awarded in Open and Age Categories. Open Category
              prizes are announced on race day, Age Category results are
              confirmed within 3 days. Prize money is subject to Indian Income
              Tax laws.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold mb-2">
              When and where will results be available?
            </h3>
            <p className="text-gray-700">
              Results and timing certificates will be published within a week at
              timingindia.com.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold mb-2">
              Will there be photos of me?
            </h3>
            <p className="text-gray-700">
              Yes. Photos will be searchable by bib number on our website within
              a week of the event.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Prizes;
