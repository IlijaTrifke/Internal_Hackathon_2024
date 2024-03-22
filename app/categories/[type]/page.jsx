import CardsContainer from "../../../components/CardsContainer";
import React from "react";
import data from "../../../data.json";
import { getAllUsers } from "../../../actions/server/users";
import { currentUser } from "@clerk/nextjs";

const Type = async ({ params }) => {
  const type = params.type;
  const user = await currentUser();
  const category = data.categories.filter((category) => category.id == type);
  const users = await getAllUsers(type, user?.id);
  console.log(users);
  return (
    <div>
      <div className="flex flex-col relative bg-center p-4 justify-center lg:p-10 items-center">
        <div className="flex flex-col justify-center gap-5 items-center py-10 w-full">
          <h1 className="font-bold text-2xl">
            {type == "obese"
              ? "Obese"
              : type == "smoking"
              ? "Smoking"
              : type == "gambling"
              ? "Gambling"
              : "Alkoholic"}{" "}
            Category
          </h1>
          <p className="w-8/12 text-center">{category[0].subtitle}</p>
          <CardsContainer type={type} users={users} />
        </div>
      </div>
    </div>
  );
};

export default Type;
