import axios from "axios";
import "../config";
export const handleCallApiLogin = async (value) => {
  try {
    const result = await axios.post(
      global.config.API_PATH + "public/auth/login",
      value
    );
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
export const handleCallApiRegister = async (value) => {
  try {
    const result = await axios.post(
      global.config.API_PATH + "public/auth/register",
      value
    );
    console.log(result.data);
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
export const handleCallApiActiveAccount = async (value) => {
  try {
    const result = await axios.post(
      global.config.API_PATH + "public/auth/active/" + value
    );
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
