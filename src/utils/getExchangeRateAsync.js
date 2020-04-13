async function getExchangeRateAsync(baseURL, baseCurrSymbol) {
  let response = await fetch(`${baseURL}${baseCurrSymbol}`);
  let data = await response.json();
  return data;
}

export default getExchangeRateAsync;
