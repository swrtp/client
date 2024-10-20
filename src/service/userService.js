import axios from "axios";
import "../config";
export const getUserById = async (id, token) => {
  try {
    const result = await axios.get(global.config.API_PATH + "user/" + id, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
export const callRequestVerifyAccountAsync = async (id, token) => {
  try {
    const result = await axios.post(
      global.config.API_PATH + "user/request-verification/" + id,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
