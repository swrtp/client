import axios from "axios";
import "../config";

export const getVehicles = async (filter) => {
  const params = setFilterSearch(filter);
  try {
    const url = `${global.config.API_PATH}vehicles?${params.toString()}`;

    const result = await axios.get(url);
    return result.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
export const getVehicleById = async (id) => {
  console.log(`${global.config.API_PATH}vehicles/${id}`);
  try {
    const url = `${global.config.API_PATH}vehicles/${id}`;
    const result = await axios.get(url);
    return result.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
export const checkVehicleAvailable = async (value) => {
  console.log(value);
  const params = setParamCheckAvailable(value);
  try {
    const url = `${
      global.config.API_PATH
    }vehicles/check-available?${params.toString()}`;
    const result = await axios.get(url);
    return result.data;
  } catch (e) {
    console.error(e);
  }
};
const setFilterSearch = (filter) => {
  const params = new URLSearchParams();

  if (filter.OrderBy) params.append("OrderBy", filter.OrderBy);
  if (filter.FromDate) params.append("FromDate", filter.FromDate);
  if (filter.ToDate) params.append("ToDate", filter.ToDate);
  if (filter.SearchText) params.append("SearchText", filter.SearchText);
  params.append("Page", filter.Page);
  return params;
};
const setParamCheckAvailable = (value) => {
  const params = new URLSearchParams();
  if (value.vehicleId) params.append("vehicleId", value.vehicleId);
  if (value.dateOfBooking) params.append("dateOfBooking", value.dateOfBooking);
  if (value.dateOfReturn) params.append("dateOfReturn", value.dateOfReturn);
  return params;
};
