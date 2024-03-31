export const formatPrice = (value: string | number) =>
  Number(value).toLocaleString("en");

export default function formatDate(inputDate: string | number) {
  const date = new Date(inputDate);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedHours = hours.toString().padStart(2, "0");
  const minutesStr = minutes.toString().padStart(2, "0");

  const formattedDate = `${formattedHours}:${minutesStr} ${day}-${month}-${year}`;
  return formattedDate;
}
