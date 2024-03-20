import React from "react";

function SingleDescription1() {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table rounded-none">
          {/* head */}
          <thead>
            <tr>
              <th>Architect:</th>
              <th>Client:</th>
              <th>Terms:</th>
              <th>Project Type:</th>
              <th>Strategy:</th>
              <th>Date:</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>David Oswald</th>
              <th>Ocean Themes</th>
              <th>6 months</th>
              <th>Interior Design</th>
              <th>Minimalistic</th>
              <th>22 November 2020</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SingleDescription1;
