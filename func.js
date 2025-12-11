import { stockMarket } from "./data.js";
import input from "analiza-sync";
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
      return match_stock;
    }
  } else {
    console.log("given Price must by a number");
  }
}
// פונקציות עזר
export function BuySellStock(operation, identifier) {
  const ask_units = input("how many units?:\n>");
  let find_stock = stockMarket.stocks.findIndex(
    (stock) => stock.id === identifier || stock.name == identifier
  );
  if (operation === "buy" || operation === "BUY") {
    stockMarket.stocks[find_stock].availableStocks -= Number(ask_units);
    stockMarket.stocks[find_stock].currentPrice +=
      (stockMarket.stocks[find_stock].currentPrice / 100) * 5;
    let caengh_cagory_p = stockMarket.stocks.map((stock) => {
      if (
        stock.category === stockMarket.stocks[find_stock].category &&
        stock.id !== stockMarket.stocks[find_stock].id
      ) {
        stockMarket.lastUpdated=Date.now()
        stock.previousPrices.push(stock.currentPrice)
        stock.currentPrice += (stock.currentPrice / 100) * 1;
      }
    });
  } else if (operation === "sell" || operation === "SELL") {
    stockMarket.stocks[find_stock].availableStocks += Number(ask_units);
    stockMarket.stocks[find_stock].currentPrice -=
      (stockMarket.stocks[find_stock].currentPrice / 100) * 5;
    let caengh_cagory_p = stockMarket.stocks.map((stock) => {
      if (
        stock.category === stockMarket.stocks[find_stock].category &&
        stock.id !== stockMarket.stocks[find_stock].id
      ) {
        stockMarket.lastUpdated=Date.now()
        stock.previousPrices.push(stock.currentPrice)
        stock.currentPrice -= (stock.currentPrice / 100) * 1;
      } 
    });
  }else if (
        operation !== "sell" ||
        operation !== "SELL" ||
        operation !== "buy" ||
        operation !== "BUY"
      ) {
        console.log("operation not allowed");
      }
}

// ביצוע פעולות על מניה

export function OperateOnStock(operation, identifier) {
  const match_stock = searchStock(identifier);
  if (match_stock.length > 0) {
    BuySellStock(operation, identifier);
  }
}

