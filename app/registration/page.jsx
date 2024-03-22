"use client";
import { useUser } from "@clerk/nextjs";
import { updateUser } from "../../actions/server/users";
import React, { useState } from "react";
import { useRouter } from "next/router";

// gender: "male",
// age: 23,
// location: "",
// bad_habbits: [],

const Register = () => {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);
  const [location, setLocation] = useState("");
  const [badHabbits, setHabbits] = useState([]);
  const { user } = useUser();
  const handleSubmit = async () => {
    const data = {
      uid: user.id,
      full_name: user.fullName,
      gender,
      age: parseInt(age),
      location,
      bad_habbits: badHabbits,
    };
    const res = await updateUser(data);
    if (res == true) {
      alert("Your answer was successfully submited");
      window.location.href = "/";
    } else {
      alert("error");
    }
  };
  return (
    <div className="w-full flex flex-col justify-center items-center py-20">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded p-6 mb-4">
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Gender
            </label>
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold"
              htmlFor="password"
            >
              Age
            </label>
            <input
              className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <div />
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold"
                htmlFor="password"
              >
                Location
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Bad habbits
              </label>
              <select
                multiple
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="badHabbits"
                type="text"
                value={badHabbits}
                onChange={(e) => setHabbits([...badHabbits, e.target.value])}
              >
                <option value="">Select bad habbits</option>
                <option value="smoking">Smoking</option>
                <option value="obese">Obese</option>
                <option value="alkoholic">Alcoholic</option>
                <option value="gambling">Gambling</option>
              </select>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
