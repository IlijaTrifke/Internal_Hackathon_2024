import React from "react";
import UserProfile from "../../../components/UserProfile";
import { getSingleUser } from "../../../actions/server/users";

const UserPage = async ({ params }) => {
  const uid = params.uid;
  const user = await getSingleUser(uid);
  console.log(user);
  if (user)
    return (
      <UserProfile
        uid={user.uid}
        fullName={user.full_name}
        image={user.image}
        age={user.age}
        email={user.email}
        gender={user.gender}
        location={user.location}
        badHabbits={user.bad_habbits}
        matchings={user.matchings}
      />
    );
};

export default UserPage;
