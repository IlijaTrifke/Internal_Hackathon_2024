"use server";

import { storeDatabaseConnection } from "../../lib/connection";

export const getAllUsers = async (category, uid) => {
  try {
    const db = await storeDatabaseConnection();
    const allUsers = await db
      .collection("users")
      .find({
        uid: { $ne: uid },
        bad_habbits: category,
      })
      .toArray();
    return allUsers;
  } catch (error) {
    console.error(error.message);
  }
};
export const getSingleUser = async (uid) => {
  try {
    const db = await storeDatabaseConnection();
    const singleUser = await db.collection("users").findOne({ uid });
    return singleUser;
  } catch (error) {
    console.log(error.message);
  }
};

export async function createNewUser(user) {
  try {
    const db = await storeDatabaseConnection();
    await db.collection("users").insertOne(user);
  } catch (error) {
    console.log(error.message);
  }
}

export const updateUser = async (body) => {
  try {
    const db = await storeDatabaseConnection();
    const singleUser = await getSingleUser(body?.uid);
    await db.collection("users").updateOne(
      { uid: body?.uid },
      {
        $set: {
          uid: body?.uid,
          full_name: body?.full_name || singleUser.full_name,
          email: body?.email || singleUser.email,
          image: body?.image || singleUser.image,
          gender: body?.gender || singleUser.gender,
          age: body?.age || singleUser.age,
          location: body?.location || singleUser.location,
          bad_habbits: body.bad_habbits,
          matchings: [],
        },
      }
    );
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

export const matching = async (uid, matchingUser, category) => {
  try {
    const db = await storeDatabaseConnection();
    const singleUser = await getSingleUser(uid);
    await db.collection("users").updateOne(
      { uid: uid },
      {
        $push: {
          matchings: { habbit: category, user: matchingUser },
        },
      }
    );
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

//
// export async function getSingleUser(uid) {
//   try {
//     const res = await fetchData(`/User?id=${uid}`, {
//       method: "GET",
//       cache: "no-cache",
//     });
//     if (res.ok) {
//       return res;
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }
// export async function createNewUser(newUser) {
//   try {
//     const res = await fetchData("", {
//       method: "POST",
//     });
//     if (res.ok) {
//       return res;
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }
// export async function deleteSingleUser(uid) {
//   try {
//     const res = await fetchData("", {
//       method: "DELETE",
//     });
//     if (res.ok) {
//       return res;
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }
// export async function updateSingleUser(uid, body) {
//   try {
//     const res = await fetchData("", {
//       method: "PATCH",
//     });
//     if (res.ok) {
//       return res;
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }
