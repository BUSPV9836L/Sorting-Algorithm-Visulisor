import React from "react";

const Welcome = () => {
  return (
    <div className="flex-col w-[95%] h-screen">
      <h2 className="ml-5 flex mt-2 text-2xl">User guide menue.</h2>
      <div className="ml-5 mt-5 flex-col w-full">
        <ol className="flex-col w-fit">
          <li className="my-1">
            <p>
              First of all click on the{" "}
              <u>
                <i>Generate Array</i>
              </u>{" "}
              button to generate new array.
            </p>
          </li>
          <li className="my-1">
            <p>
              Then click on the{" "}
              <u>
                <i>Selcect Sorting Algorithm </i>
              </u>{" "}
              button to start Sorting with the selected sorting algorithm.
            </p>
          </li>
          <li className="my-1">
            <p>
              Click on the{" "}
              <u>
                <i>Reset Array</i>
              </u>{" "}
              to reset the array after sorting is done.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Welcome;
