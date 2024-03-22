import { matching } from "../actions/server/users";
import { currentUser } from "@clerk/nextjs";
import React from "react";
import { IoMdMale } from "react-icons/io";
import { IoMdFemale } from "react-icons/io";
import MatchButton from "./common/MatchButton";

const UserProfile = async ({
  uid,
  fullName,
  image,
  email,
  age,
  gender,
  location,
  badHabbits,
  matchings,
}) => {
  const clerkUser = await currentUser();
  return (
    <div className="max-w-3xl mx-4 relative sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
      <li className="flex flex-col items-center gap-1 absolute top-2 right-2">
        <div className="font-bold text-xl text-amber-600">100 PTS</div>
      </li>
      <div className="rounded-t-lg h-32 overflow-hidden">
        <img
          className="object-cover object-top w-full"
          src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="Mountain"
        />
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img
          className="object-cover object-center h-32"
          src={image}
          alt="Profile picture"
        />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold text-black">{fullName}</h2>
        <h3 className="font-light">{email}</h3>
      </div>
      <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
        <li className="flex flex-col items-center gap-1">
          <div className="font-bold text-xl">Location</div>
          <div>{location}</div>
        </li>
        <li className="flex flex-col items-center gap-1">
          <div className="font-bold text-xl">Age</div>
          <div>{age}</div>
        </li>
        <li className="flex flex-col items-center gap-1">
          <div className="font-bold text-xl">Gender</div>
          {gender == "male" ? <IoMdMale /> : <IoMdFemale />}
        </li>
        <li className="flex flex-col items-center gap-1">
          <div className="font-bold text-xl">Bad Habbits:</div>
          <div>
            {badHabbits.length > 0 &&
              badHabbits?.map((item) => {
                return `${item}  `;
              })}
          </div>
        </li>
      </ul>
      {matchings?.length > 0 ? (
        <div className={`p-4 mt-2 text-center`}>
          <table className="table w-full">
            <thead className="font-bold">
              <tr className="border-2 border-gary-900">
                <th className="border-2 border-gary-900">Bad habbits</th>
                <th className="border-2 border-gary-900">Matcher</th>
              </tr>
            </thead>
            <tbody>
              {matchings.map(async (item) => {
                return (
                  <tr className="border-2 border-gary-900">
                    <td className="border-2 border-gary-900">{item.habbit}</td>
                    <td className="border-2 border-gary-900">{item.user}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}
      {badHabbits.length == 0 && (
        <p className="text-center py-5">
          No bad habbits, perfect person exists
        </p>
      )}
      {clerkUser.id != uid && (
        <div className="p-4 mt-2 flex flex-row w-full justify-center items-center gap-5">
          <button className="w-1/3 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
            Match
          </button>
          <button className="w-1/3 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
            Message
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
