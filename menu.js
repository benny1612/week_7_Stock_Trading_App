import { stockMarket } from "./data.js";
import {
  BuySellStock,
  filterStocksByPrice,
  OperateOnStock,
  searchStock,
} from "./func.js";
import input from "analiza-sync";

function menu() {
  let fleg = true;
  while (fleg) {
    let menu_options = input(
      "\nHey, what would you like to do?\n 1.Search for a stock by name or id: \n 2.Show all stocks above or below a given price: \n 3. Buy or sell a stock:\n 4.Exit:\n > "
    );
    switch(menu_options){
        case "1":
           const identifier =input("enter id name or id stock :\n>")
           console.table(searchStock(identifier))
           break;
        case "2":
            const given_price=Number(input("enter given price:\n>"))
            const above_or_below =input("enter true for abuve false for below:\n>" )
            console.table(filterStocksByPrice(given_price,above_or_below))
            break;
        case "3":
           const operation = input("enter operation:\n>")
             const identifier2 = input ("enter id name or id stock :\n>")
           OperateOnStock(operation,identifier2)
           break;
        case "4":
            console.log("goodbye!")
            fleg=false
            break;




    }
  }
}
menu()