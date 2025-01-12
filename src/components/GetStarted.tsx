import React from 'react';
import getStarted from "../../assets/getstarted.png"

export const GetStarted = () => {
  return (
    <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Get Started with KoinX for FREE</h2>
      <p className="mb-8">
        With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
      </p>
      <img
        src={getStarted}
        alt="Crypto analysis"
        className="mx-auto mb-8 rounded-lg"
      />
      <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">
        Get Started for FREE →
      </button>
    </div>
  );
};