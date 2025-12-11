import { stockMarket } from "./data.js";
// חיפוש מניה לפי שם או ID
export const searchStock = (identifier) => {
  const match_stock = stockMarket.stocks.filter(
    (stock) => stock.name === identifier || stock.id === identifier
  );
  if (match_stock.length === 0) {
    console.log("stock not found");
  }
  return match_stock;
};
// חיפוש מניה לפי מחיר
export function filterStocksByPrice(givenPrice, above) {
  if (typeof givenPrice === "number") {
    if (above === true) {
      let match_stock = stockMarket.stocks.filter(
        (stock) => stock.currentPrice > givenPrice
      );
      if (match_stock.length === 0) {
        console.log("stock not found");
      }
      return match_stock;
    } else if (above === false) {
      let match_stock = stockMarket.stocks.filter(
        (stock) => stock.currentPrice < givenPrice
      );
      if (match_stock.length === 0) {
        console.log("stock not found");
    }
    return match_stock
  }
}else{console.log("given Price must by a number")}}
