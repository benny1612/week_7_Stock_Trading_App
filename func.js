import { stockMarket } from "./data.js";
export const searchStock = (identifier) => {
  const match_stock = stockMarket.stocks.filter((stock) =>stock.name===identifier ||stock.id===identifier);
  if (match_stock.length === 0) {
    console.log("stock not found");
  }
  return match_stock
};
