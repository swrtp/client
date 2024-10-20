export const formatVNDMoney = (x) => {
  return x.toLocaleString("it-IT", { style: "currency", currency: "VND" });
};
export const formatDateTimeString = (time) => {
  const date = new Date(time);

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${hours}:${minutes} ${day}-${month}-${year}`;
};
export const calculateDaysRental = (dateBooking, dateReturn) => {
  const date1 = new Date(dateBooking);
  const date2 = new Date(dateReturn);

  const diffInMilliseconds = date2 - date1;

  const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);

  const totalDays = Math.floor(diffInDays);
  if (diffInDays - totalDays > 0) {
    return diffInDays.toFixed(1);
  }

  return totalDays;
};
