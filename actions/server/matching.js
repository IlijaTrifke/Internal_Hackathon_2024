import { BACKEND_URL } from "@/constants";

export async function like(uid, match_uid, category) {
  try {
    const res = await fetch(`${BACKEND_URL}/`, {
      method: "GET",
      body: JSON.stringify({ uid, match_uid }),
    });
    if (res.ok) {
      return res.json();
    }
  } catch (err) {
    console.log(err);
  }
}
