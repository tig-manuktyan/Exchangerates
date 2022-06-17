export const baseUrl = "https://api.coincap.io/v2/rates";
export const price = (onePrice = 0, twoPrice) => (onePrice * twoPrice).toFixed(1);
export const priceReverse = (onePrice = 1, twoPrice = 1) => (onePrice / twoPrice).toFixed(1);