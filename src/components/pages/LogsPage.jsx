import Header from "../common/Header";
import React, { useState } from "react";
import DUMMY_DATA from "./LogsData.json";

const LogsPage = () => {
  const [LogsData, setLogsData] = useState(DUMMY_DATA);

  return (
    <>
      <Header pageTitle={"Logs"} />
      <div>
        <h2 className="text-center text-2xl font-bold py-4 bg-red-900 text-white">
          Logs
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-800 w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {LogsData.map((log, index) => (
                <tr key={index}>
                  <td className="border border-gray-400 px-4 py-2">
                    {log.name}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {log.time}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {log.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LogsPage;
