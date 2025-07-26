import { twMerge } from "tailwind-merge";
import Button from "../common/button";
import { IButton } from "@/types/common";

interface ITable {
  rows: {
    cells: string[];
  }[];
}

interface IPricingTable {
  title: string;
  dailyPrice: ITable;
  weeklyPrice: ITable;
  monthlyPrice: ITable;
  button: IButton;
}

export default function PricingTable({ data }: { data: IPricingTable }) {
  return (
    <div className="bg-[#1A1F22] min-h-screen flex flex-col items-center pt-16 md:pt-[226px] pb-12 md:pb-[165px] px-4">
      <div className="custom_container w-full">
        <h2
          className={twMerge(
            "heading_secondary text-white font-black mb-10 md:mb-[143px] max-w-[1232px]",
            "lg:leading-[1.22]"
          )}
        >
          {data.title}
        </h2>

        {/* Mobile view - stacked tables */}
        <div className="md:hidden w-full flex flex-col gap-8">
          {/* Daily prices - Mobile */}
          <div className="w-full rounded-lg border border-white border-solid overflow-hidden">
            <div className="bg-[#1a1a1a] py-4 px-4 border-b border-white border-solid">
              <h2 className="text-white font-bold text-lg">
                {data.dailyPrice.rows[0].cells[0]}
              </h2>
              <p className="text-white font-bold mt-1">
                {data.dailyPrice.rows[0].cells[1]}
              </p>
            </div>
            <div className="px-4">
              {data.dailyPrice.rows.slice(1).map((row, index) => (
                <div
                  key={index}
                  className={`py-4 ${
                    index < data.dailyPrice.rows.length - 2
                      ? "border-b border-white/30 border-solid"
                      : ""
                  }`}
                >
                  <p className="text-white">{row.cells[0]}</p>
                  <p className="text-white font-medium mt-1">{row.cells[1]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly prices - Mobile */}
          <div className="w-full rounded-lg border border-white border-solid overflow-hidden">
            <div className="bg-[#1a1a1a] py-4 px-4 border-b border-white border-solid">
              <h2 className="text-white font-bold text-lg">
                {data.weeklyPrice.rows[0].cells[0]}
              </h2>
              <p className="text-white font-bold mt-1">
                {data.weeklyPrice.rows[0].cells[1]}
              </p>
            </div>
            <div className="px-4">
              {data.weeklyPrice.rows.slice(1).map((row, index) => (
                <div
                  key={index}
                  className={`py-4 ${
                    index < data.weeklyPrice.rows.length - 2
                      ? "border-b border-white/30 border-solid"
                      : ""
                  }`}
                >
                  <p className="text-white">{row.cells[0]}</p>
                  <p className="text-white font-medium mt-1">{row.cells[1]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly prices - Mobile */}
          <div className="w-full rounded-lg border border-white border-solid overflow-hidden">
            <div className="bg-[#1a1a1a] py-4 px-4 border-b border-white border-solid">
              <h2 className="text-white font-bold text-lg">
                {data.monthlyPrice.rows[0].cells[0]}
              </h2>
              <p className="text-white font-bold mt-1">
                {data.monthlyPrice.rows[0].cells[1]}
              </p>
            </div>
            <div className="px-4">
              {data.monthlyPrice.rows.slice(1).map((row, index) => (
                <div
                  key={index}
                  className={`py-4 ${
                    index < data.monthlyPrice.rows.length - 2
                      ? "border-b border-white/30 border-solid"
                      : ""
                  }`}
                >
                  <p className="text-white">{row.cells[0]}</p>
                  <p className="text-white font-medium mt-1">{row.cells[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop view - side by side tables */}
        <div className="hidden md:flex w-full overflow-x-auto rounded-lg border border-white border-solid">
          {/* First table - Daily prices */}
          <div className="flex-1 border-r border-white border-solid">
            <table className="w-full h-full">
              {data.dailyPrice.rows.map((row, index) => {
                if (index === 0) {
                  return (
                    <thead key={index}>
                      <tr className="border-b border-white border-solid">
                        {row.cells.map((cell, key) => (
                          <th
                            key={key}
                            className={`pt-[38px] pb-6 px-6 xl:px-[42px] text-white font-bold ${
                              key === row.cells.length - 1
                                ? "text-right"
                                : "text-left"
                            }`}
                          >
                            {cell}
                          </th>
                        ))}
                      </tr>
                    </thead>
                  );
                } else {
                  return (
                    <tbody key={index}>
                      <tr key={index} className="">
                        {row.cells.map((cell, key) => (
                          <td
                            key={key}
                            className={`py-4 px-6 xl:px-[42px] text-white ${
                              key === row.cells.length - 1
                                ? "text-right"
                                : "text-left"
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  );
                }
              })}
            </table>
          </div>

          {/* Second table - Weekly prices */}
          <div className="flex-1 border-r border-white border-solid">
            <table className="w-full h-full">
              {data.weeklyPrice.rows.map((row, index) => {
                if (index === 0) {
                  return (
                    <thead key={index}>
                      <tr className="border-b border-white border-solid">
                        {row.cells.map((cell, key) => (
                          <th
                            key={key}
                            className={`pt-[38px] pb-6 px-6 xl:px-[42px] text-white font-bold ${
                              key === row.cells.length - 1
                                ? "text-right"
                                : "text-left"
                            }`}
                          >
                            {cell}
                          </th>
                        ))}
                      </tr>
                    </thead>
                  );
                } else {
                  return (
                    <tbody key={index}>
                      <tr key={index} className="">
                        {row.cells.map((cell, key) => (
                          <td
                            key={key}
                            className={`py-4 px-6 xl:px-[42px] text-white ${
                              key === row.cells.length - 1
                                ? "text-right"
                                : "text-left"
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  );
                }
              })}
            </table>
          </div>

          {/* Third table - Monthly prices */}
          <div className="flex-1">
            <table className="w-full h-full">
              {data.monthlyPrice.rows.map((row, index) => {
                if (index === 0) {
                  return (
                    <thead key={index}>
                      <tr className="border-b border-white border-solid">
                        {row.cells.map((cell, key) => (
                          <th
                            key={key}
                            className={`pt-[38px] pb-6 px-6 xl:px-[42px] text-white font-bold ${
                              key === row.cells.length - 1
                                ? "text-right"
                                : "text-left"
                            }`}
                          >
                            {cell}
                          </th>
                        ))}
                      </tr>
                    </thead>
                  );
                } else {
                  return (
                    <tbody key={index}>
                      <tr key={index} className="">
                        {row.cells.map((cell, key) => (
                          <td
                            key={key}
                            className={`py-4 px-6 xl:px-[42px] text-white ${
                              key === row.cells.length - 1
                                ? "text-right"
                                : "text-left"
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  );
                }
              })}
            </table>
          </div>
        </div>

        <div className="flex justify-center mt-8 md:mt-16">
          {data.button.label && <Button button={data.button} />}
        </div>
      </div>
    </div>
  );
}
