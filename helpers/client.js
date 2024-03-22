import { BACKEND_URL } from "../constants";

export async function fetchData(path, options) {
  try {
    const { method, cache } = options;
    const res = await fetch(`${BACKEND_URL}${path}`, {
      method,
      cache: cache || "force-cache",
    });
    if (!res.ok) {
      throw new Error(
        `Failed to fetch data from ${path}. Status: ${res.status}`
      );
    }
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}
