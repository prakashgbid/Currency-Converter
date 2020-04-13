const formatCurrency = amount => {
  const temp = amount.split(".").join("");
  if (temp.length > 0) {
    if (temp === ".") {
      return "";
    } else {
      return temp.slice(0, -2) + "." + temp.slice(-2);
    }
  } else {
    return temp;
  }
};

export default formatCurrency;
