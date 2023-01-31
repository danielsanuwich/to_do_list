module.exports = getDate;

function getDate() {
  const today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  //Index into array using current day as int
  const day = today.toLocaleDateString("en-US", options);

  return day;
}


