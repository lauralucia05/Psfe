import React, { useRef } from 'react';
import TMS from '../components/TMS';
import TMSProcedure from '../components/TMSProcedure';

export default function TmsInfo() {
  const howRef = useRef(null);
  const procedureRef = useRef(null);

  const scrollToHow = () => {
    if (howRef.current) {
      howRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProcedure = () => {
    if (procedureRef.current) {
      procedureRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#f8faff] min-h-screen pb-16 pt-1 px-4">
      <div className="max-w-6xl mx-auto mb-12">
        <TMS />
        {/* Pricing Section */}
      <div className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2A5DCC] mb-4">TMS Pricing in Australia</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-[#2A5DCC] text-white">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Type/MBS#</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">14216</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">14217</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">14219</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">14220</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold text-[#2A5DCC]">Privately Funded</td>
                <td className="border border-gray-300 px-4 py-3">$100</td>
                <td className="border border-gray-300 px-4 py-3">$100</td>
                <td className="border border-gray-300 px-4 py-3">$100</td>
                <td className="border border-gray-300 px-4 py-3">$100</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold text-[#2A5DCC]">Medicare (Bulk Billed)</td>
                <td className="border border-gray-300 px-4 py-3">$177.65</td>
                <td className="border border-gray-300 px-4 py-3">$152.45</td>
                <td className="border border-gray-300 px-4 py-3">$177.65</td>
                <td className="border border-gray-300 px-4 py-3">$152.45</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold text-[#2A5DCC]">DVA</td>
                <td className="border border-gray-300 px-4 py-3">$261.00</td>
                <td className="border border-gray-300 px-4 py-3">$224.00</td>
                <td className="border border-gray-300 px-4 py-3">$261.00</td>
                <td className="border border-gray-300 px-4 py-3">$224.00</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold text-[#2A5DCC]">Workcover NSW (iCARE)</td>
                <td className="border border-gray-300 px-4 py-3">-</td>
                <td className="border border-gray-300 px-4 py-3">-</td>
                <td className="border border-gray-300 px-4 py-3">-</td>
                <td className="border border-gray-300 px-4 py-3">-</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold text-[#2A5DCC]">Workcover QLD</td>
                <td className="border border-gray-300 px-4 py-3">$450</td>
                <td className="border border-gray-300 px-4 py-3">$388</td>
                <td className="border border-gray-300 px-4 py-3">$450</td>
                <td className="border border-gray-300 px-4 py-3">$388</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
      
      
       

   {/* Useful resources */}
        <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
          <h3 className="text-2xl font-semibold text-[#2A5DCC] mb-3">Useful resources</h3>
          <a href="https://www.msac.gov.au/sites/default/files/documents/1196.3%2520-%2520rTMS-Final%2520PSD.pdf" target="_blank" rel="noopener noreferrer" className="text-[#2A5DCC] underline break-all">https://www.msac.gov.au/sites/default/files/documents/1196.3%2520-%2520rTMS-Final%2520PSD.pdf</a>
        </div>
        
    </div>
  );
}