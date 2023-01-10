import Link from "next/link";
import React from "react";

function account() {
  return (
    <div className="flex items-center justify-center bg-gray-100 h-screen">
      <div
        className="shadow-sm rounded p-3"
        style={{ width: "300px", height: "70%", backgroundColor: "white" }}
      >
        <div className="text-center mb-5 ">Create Account</div>
        <input
          className="mb-5 h-8 w-full bg-gray-50 px-3 rounded shadow-sm"
          placeholder="Full Name"
        />
        <input
          className="mb-5 h-8 w-full bg-gray-50 px-3 rounded shadow-sm"
          placeholder="Email Address"
        />
        <input
          className="mb-5 h-8 w-full bg-gray-50 px-3 rounded shadow-sm"
          placeholder="Password"
        />
        <button className="mb-5 h-8 w-full bg-green-500 text-white px-3 rounded shadow-sm">
          Submit
        </button>
        <Link href={"/"} style={{ backgroundColor: "blue" }}>
          <div className="bg-gray-500 px-3 text-center py-1 text-md rounded text-white hover:bg-green-600 my-2">
            Back
          </div>
        </Link>
      </div>
    </div>
  );
}

export default account;
