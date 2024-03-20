import React from "react";
import { FaCheckSquare } from "react-icons/fa";

function Checklist() {
  return (
    <>
      <div className="overflow-x-auto">
        <table>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <FaCheckSquare size={20} />
              </th>
              <td className="text-xl">Interior design</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>
                <FaCheckSquare size={20} />
              </th>
              <td className="text-xl">Custom furniture</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>
                <FaCheckSquare size={20} />
              </th>
              <td className="text-xl">Eco-friendly design</td>
            </tr>
            {/* row 4 */}
            <tr>
              <th>
                <FaCheckSquare size={20} />
              </th>
              <td className="text-xl">Outdoor Living</td>
            </tr>
            {/* row 5 */}
            <tr>
              <th>
                <FaCheckSquare size={20} />
              </th>
              <td className="text-xl">Architectural Concept</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Checklist;
