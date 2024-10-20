import axios from "axios";
import "../config";
export const saveBooking = async (value, token) => {
  try {
    const result = await axios.post(
      global.config.API_PATH + "bookings/add",
      value,
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
