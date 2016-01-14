"use strict";

function myMoney(money){
    money = 20.00
    return money;
}

function moneyDone(money,advertisement,lemons,sugar,iceCubes){
    var newCash;
    newCash =  Number(lemons) + Number(sugar) + Number(iceCubes) + Number(advertisement);
    money -= newCash
    return money;       
}

function myMoneyRight(money,moneyLeft){
    var newMoney;
    newMoney = Number(money) - Number(moneyLeft);
    return newMoney;
}

function userInput(idOf){
  var adv
      adv = document.getElementById(idOf).value
      if(isNaN(adv)){
        console.log("Use numbers only!")
      }
      return adv;
}

function theWeather(weather){
    var weather = new Array("Sunny", "Cloudy", "Rainy", "Hazy", "Partly Cloudy");
    return (weather[Math.floor(Math.random()*weather.length)]);   
}

function temperature(){
	var tempNow;
	tempNow = Math.floor(Math.random()*60+35);
	return tempNow;
}

function advertisementToTotalRatio(advertisement,total){
    var bonus;
    bonus = advertisement + total;
    return bonus;
}

function lemonToTempRatio(lemons,currentTemp,tempBuyRatio){
  var lem;
  lem = 0;    
    if (lemons <= (Math.floor(currentTemp / 10)) && lemons >= (Math.floor(currentTemp / 12))){
        lem +=  5;
        return lem;
    } else if (lemons <= (Math.floor(currentTemp / 13)) && lemons >= (Math.floor(currentTemp / 16))){
        lem +=  4;
        return lem;
    } else if (lemons <= (Math.floor(currentTemp / 17)) && lemons >= (Math.floor(currentTemp / 25))){
        lem +=  3;
        return lem;
    } else if (lemons <= (Math.floor(currentTemp / 26)) && lemons >= (Math.floor(currentTemp / 35))){
        lem +=  2;
        return lem;
    } else { lem -=15;
        return lem;
    }  
}

function sugarToTempRatio(sugar,currentTemp,tempBuyRatio){
  var sug;
  sug = 0;   
    if (sugar <= (Math.floor(currentTemp / 10)) && sugar >= (Math.floor(currentTemp / 12))){
        sug += 5;
        return sug;
    } else if (sugar <= (Math.floor(currentTemp / 13)) && sugar >= (Math.floor(currentTemp / 16))){
        sug += 4;
        return sug;
    } else if (sugar <= (Math.floor(currentTemp / 17)) && sugar >= (Math.floor(currentTemp / 25))){
        sug += 3;
        return sug;
    } else if (sugar <= (Math.floor(currentTemp / 26)) && sugar >= (Math.floor(currentTemp / 35))){
        sug += 2;
        return sug;
    } else { sug -=15;
        return sug;
    }  
}

function iceToTempRatio(iceCubes,currentTemp,tempBuyRatio){
  var ice;    
  ice = 0;
    if (iceCubes <= (Math.floor(currentTemp / 10)) && iceCubes >= (Math.floor(currentTemp / 12))){
        ice += 5;
        return ice;
    } else if (iceCubes <= (Math.floor(currentTemp / 13)) && iceCubes >= (Math.floor(currentTemp / 16))){
        ice += 4;
        return ice;
    } else if (iceCubes <= (Math.floor(currentTemp / 17)) && iceCubes >= (Math.floor(currentTemp / 25))){
        ice += 3;
        return ice;
    } else if (iceCubes <= (Math.floor(currentTemp / 26)) && iceCubes >= (Math.floor(currentTemp / 35))){
        ice += 2;
        return ice;
    } else { ice -= 15;
        return ice;
    }  
}

function populateCustomersSunny(myWeather){
    var pop;
    if ( myWeather.indexOf("Sunny") === 0){
        pop = Math.floor(Math.random()*10+91);
        return pop; 
    }
        return false;   
}

function populateCustomersCloud(myWeather){
    var pop;
    if ( myWeather.indexOf("Cloudy") === 0){
        pop = Math.floor(Math.random()*10+61);
        return pop; 
    }
        return false; 
}

function populateCustomersRainy(myWeather){
    var pop;
    if ( myWeather.indexOf("Rainy") === 0){
        pop = Math.floor(Math.random()*10+51);
        return pop; 
    }
        return false; 
}

function populateCustomersHazy(myWeather){
    var pop;
    if ( myWeather.indexOf("Hazy") === 0){
        pop = Math.floor(Math.random()*10+71);
        return pop; 
    }
        return false; 
}

function populateCustomersPartly(myWeather,pop){
    var pop;
    if ( myWeather.indexOf("Partly Cloudy") === 0){
        pop = Math.floor(Math.random()*10+81);
        return pop; 
    }
        return false;     
}
function tempSalesEffect(currentTemp,populate){
    var ratio, potentialSales, highestSaleTotal;
    highestSaleTotal = Math.floor((populate / 100) * currentTemp);
        potentialSales = highestSaleTotal;
        return potentialSales;
}


function populationCalc(myWeather){
    var newPop;
    if (populateCustomersSunny(myWeather)){
        newPop = populateCustomersSunny(myWeather);
        return newPop;
    }
    if (populateCustomersCloud(myWeather)){
        newPop = populateCustomersCloud(myWeather);
        return newPop;
    }
    if (populateCustomersRainy(myWeather)){
        newPop = populateCustomersRainy(myWeather);
        return newPop;
    }
    if (populateCustomersHazy(myWeather)){
        newPop = populateCustomersHazy(myWeather);
        return newPop;
    }
    if (populateCustomersPartly(myWeather)){
        newPop = populateCustomersPartly(myWeather);
        return newPop;
    }
}

function total(lemonsAffect,sugarAffect,iceAffect){
  var myTotal;
  myTotal = lemonsAffect + sugarAffect + iceAffect;
  return myTotal;
}

function totalBuyers(tempBuyRatio,advertisementAffect){
    var newTotalBuyers;
    newTotalBuyers = Number(tempBuyRatio) + Number(advertisementAffect);
    return newTotalBuyers;
}

function none(lemonsAffect, sugarAffect, iceAffect){
    var zero;
    zero = 0;
    if (lemonsAffect === 0 || sugarAffect === 0  || iceAffect === 0){
        console.log("Noone bought any lemonade because it tastes nasty!")
        return zero;
    } else {
        zero += 1;
        return zero;
    } 
}
function salesSunny(myWeather,perCup,buyers,currentTemp){
    if (myWeather === "Sunny" && perCup >= .40 && currentTemp >= 90){
            buyers *= 1;
            buyers *= perCup;
            return buyers; 
    } else if (myWeather === "Sunny" && perCup < .40 && perCup >= .30 || myWeather === "Sunny" && currentTemp <= 40){
            buyers *= .20;
            buyers *= perCup;
            return buyers;         
    } else if (myWeather === "Sunny" && perCup < .30 && perCup >= .20 || myWeather === "Sunny" && currentTemp > 40 && currentTemp <= 60){
            buyers *= .30;
            buyers *= perCup;
            return buyers; 
    } else if (myWeather === "Sunny" && perCup < .20 && perCup >= .10 || myWeather === "Sunny" && currentTemp > 60 && currentTemp <= 70){
            buyers *= .40;
            buyers *= perCup;
            return buyers; 
    } else if (myWeather === "Sunny" && perCup < .10 || myWeather === "Sunny" && currentTemp > 70 && currentTemp < 90){
            buyers *= .75;
            buyers *= perCup;
            return buyers;         
    } else {
            return 0;
    }
    
}

function salesCloudy(myWeather,perCup,buyers,currentTemp){
    if (myWeather === "Cloudy" && perCup >= .40 && currentTemp >= 90){
            buyers *= .50;
            buyers *= perCup;
            return buyers; 
    } else if (myWeather === "Cloudy" && perCup < .40 && perCup >= .30 || myWeather === "Cloudy" && currentTemp < 50){
            buyers *= .20;
            buyers *= perCup;
            return buyers;         
    } else if (myWeather === "Cloudy" && perCup < .30 && perCup >= .20 || myWeather === "Cloudy" && currentTemp > 60 && currentTemp <= 70){
            buyers *= .25;
            buyers *= perCup;
            return buyers; 
    } else if (myWeather === "Cloudy" && perCup < .20 && perCup >= .10 || myWeather === "Cloudy" && currentTemp > 70 && currentTemp <= 80){
            buyers *= .30;
            buyers *= perCup;
            return buyers; 
    } else if (myWeather === "Cloudy" && perCup < .10 || myWeather === "Cloudy" && currentTemp > 80 && currentTemp < 90){
            buyers *= .35;
            buyers *= perCup;
            return buyers;         
    } else {
            return 0;
    }
}

function salesRainy(myWeather,perCup,buyers,currentTemp){
    if (myWeather === "Rainy" && perCup >= .40 && currentTemp >= 90){
            buyers *= .50;
            buyers *= perCup;
            return buyers; 
    } else if (myWeather === "Rainy" && perCup < .40 && perCup >= .30 || myWeather === "Rainy" && currentTemp < 50){
            buyers *= .05;
            buyers *= perCup;
            return buyers;         
    } else if (myWeather === "Rainy" && perCup < .30 && perCup >= .20 || myWeather === "Rainy" && currentTemp > 60 && currentTemp <= 70){
            buyers *= .10;
            buyers *= perCup;
            return buyers; 
    } else if (myWeather === "Rainy" && perCup < .20 && perCup >= .10 || myWeather === "Rainy" && currentTemp > 70 && currentTemp <= 80){
            buyers *= .20;
            buyers *= perCup;
            return buyers; 
    } else if (myWeather === "Rainy" && perCup < .10 || myWeather === "Rainy" && currentTemp > 80 && currentTemp < 90){
            buyers *= .30;
            buyers *= perCup;
            return buyers;         
    } else {
            return 0;
    }
}

function salesHazy(myWeather,perCup,buyers,currentTemp){
    if (myWeather === "Hazy" && perCup >= .40 && currentTemp >= 90){
            buyers *= .65;
            buyers *= perCup;
            return buyers; 
    } else if (myWeather === "Hazy" && perCup < .40 && perCup >= .30 || myWeather === "Hazy" && currentTemp < 50){
            buyers *= .10;
            buyers *= perCup;
            return buyers;         
    } else if (myWeather === "Hazy" && perCup < .30 && perCup >= .20 || myWeather === "Hazy" && currentTemp > 0 && currentTemp < 70){
            buyers *= .15;
            buyers *= perCup;
            return buyers; 
    } else if (myWeather === "Hazy" && perCup < .20 && perCup >= .10 || myWeather === "Hazy" && currentTemp > 60 && currentTemp <= 70){
            buyers *= .20;
            buyers *= perCup;
            return buyers; 
    } else if (myWeather === "Hazy" && perCup < .10 || myWeather === "Hazy" && currentTemp > 80 && currentTemp < 90){
            buyers *= .30;
            buyers *= perCup;
            return buyers;         
    } else {
            return 0;
    }
}

function salesPartlyCloudy(myWeather,perCup,buyers,currentTemp){
    if (myWeather === "Partly Cloudy" && perCup >= .40){
            buyers *= .75;
            buyers *= perCup;
            return buyers; 
    } else if (myWeather === "Partly Cloudy" && perCup < .40 && perCup >= .30 || myWeather === "Partly Cloudy" && currentTemp <= 40){
            buyers *= .20;
            buyers *= perCup;
            return buyers;         
    } else if (myWeather === "Partly Cloudy" && perCup < .30 && perCup >= .20 || myWeather === "Partly Cloudy" && currentTemp > 40 && currentTemp <= 60){
            buyers *= .30;
            buyers *= perCup;
            return buyers; 
    } else if (myWeather === "Partly Cloudy" && perCup < .20 && perCup >= .10 || myWeather === "Partly Cloudy" && currentTemp > 50 && currentTemp <= 70){
            buyers *= .40;
            buyers *= perCup;
            return buyers; 
    } else if (myWeather === "Partly Cloudy" && perCup < .10 || myWeather === "Partly Cloudy" && currentTemp > 70 && currentTemp < 90){
            buyers *= .50;
            buyers *= perCup;
            return buyers;         
    } else {
            return 0;
    }
}

function finalBuys(mySalesSunny,mySalesCloudy,mySalesRainy,mySalesHazy,mySalesPartly){
    var result;
    result = Number(mySalesSunny) + Number(mySalesCloudy) + Number(mySalesRainy) + Number(mySalesHazy) + Number(mySalesPartly);
    return result;
}

function nextDayMoney(finalTotal,moneyLeft){
    var result;
    result = Number(finalTotal) + Number(moneyLeft);
    return result;
}

function endDay(finalMoney,moneyLeft){
    var result;
    result = finalMoney;
    return result;
}

function rePlay(){
    var play;
    play = prompt ("Do you want to play again? yes or no");
        if (play === "yes") {
            console.clear();
            main()
        }else if (play === "no"){
            console.clear();
            console.log("Thank you for playing ");
        } 
}

function main(myWeather){
    console.clear();
    var $myYellow = $("#yellow");
    $myYellow.addClass("yellow");
    var $button = $("#buyer");
    $button.addClass("yellow");
    var myWeather;
    var iceCubes;
    var currentTemp;
    var populate;
    var tempBuyRatio;
    var customers;
    var advertisement;
    var lemons;
    var sugar;
    var money;
    var moneyLeft;
    var moneyRight;
    var advertisementAffect;
    var lemonsAffect;
    var sugarAffect;
    var iceAffect;
    var totalBought;
    var newTotalMoney;
    var buyers;
    var perCup;
    var equalNone;
    var mySalesSunny;
    var mySalesCloudy;
    var mySalesRainy;
    var mySalesHazy;
    var mySalesPartly;
    var finalTotal;
    var finalMoney;
    var day;
    var endDayMoney;
    var myButton = document.getElementById("buyer");

    day = 1;
    console.log("Day "+day+" is:")
    myWeather = theWeather();
    currentTemp = temperature();
    console.log(currentTemp+ " degrees");
    console.log(myWeather);



myButton.onclick = function (){
    console.clear();
    perCup = (userInput("myCup") * 1).toFixed(2);
        if (perCup > .50){
        console.log("Your price is too high!")
        return;
    }
    populate = populationCalc(myWeather);
    advertisement = userInput("advertisement") * 1;
    lemons = (userInput("lemons") * .6).toFixed(2);
        if(lemons < .6){
            console.log("Not enough lemons to make lemonade!");
            return;
    }
    console.log(lemons + " worth of lemons");
    sugar = (userInput("sugar") * .7).toFixed(2);
        if(sugar < .7){
            console.log("Not enough sugar to make lemonade!")
            return;
        }
    console.log(sugar + " worth of sugar");
    iceCubes = (userInput("ice") * .5).toFixed(2);
        if(iceCubes < .5){
            console.log("Not enough ice to make lemonade!")
            return;
        }
    console.log(iceCubes + " worth of icecubes");
    money = myMoney(money)
            if (day > 1){
            money = finalMoney;
        }
    console.log(advertisement + "  dollars worth of advertisements");

    moneyLeft = (moneyDone(money,advertisement,lemons,sugar,iceCubes)).toFixed(2);
    moneyRight = (myMoneyRight(money,moneyLeft,day)).toFixed(2);
    console.log(moneyRight + " is how much money you have used.");

    tempBuyRatio = tempSalesEffect(currentTemp,populate);
    lemonsAffect = lemonToTempRatio(lemons,currentTemp,tempBuyRatio);
    sugarAffect = sugarToTempRatio(sugar,currentTemp,tempBuyRatio);
    iceAffect = iceToTempRatio(iceCubes,currentTemp,tempBuyRatio);
    totalBought = total(lemonsAffect,sugarAffect,iceAffect);
    advertisementAffect = advertisementToTotalRatio(advertisement,totalBought);
    buyers = totalBuyers(tempBuyRatio,advertisementAffect);
   
    equalNone = none(lemonsAffect, sugarAffect, iceAffect);
        if (equalNone === 0){
            return;
        }
    mySalesSunny = salesSunny(myWeather,perCup,buyers,currentTemp);
    mySalesCloudy = salesCloudy(myWeather,perCup,buyers,currentTemp);
    mySalesRainy = salesRainy(myWeather,perCup,buyers,currentTemp);
    mySalesHazy = salesHazy(myWeather,perCup,buyers,currentTemp);
    mySalesPartly =salesPartlyCloudy(myWeather,perCup,buyers,currentTemp);

    finalTotal = (finalBuys(mySalesSunny,mySalesCloudy,mySalesRainy,mySalesHazy,mySalesPartly)).toFixed(2);
    finalMoney = (nextDayMoney(finalTotal,moneyLeft)).toFixed(2);

    if (day < 1){
        console.log("You made " + finalTotal + " today and now have " + moneyLeft);
    } else {
        console.log("You made " + finalTotal + " today and now have " + finalMoney);
    }
    if (finalTotal <= 0){
        console.log("You made no profit today and lost all your ingrediants.")
    }
    if (day < 1){
    document.getElementById("moneyCalc").innerHTML = "$" +moneyRight;
    } else {
    document.getElementById("moneyCalc").innerHTML = "$" +finalMoney;
    }
    if (finalMoney < 0){
       console.log("You have no more money, you LOSE!")
       rePlay();
       window.location.reload();
    }
    
    day++;

    console.log("Day "+day+" will be:");
    myWeather = theWeather();
    console.log(myWeather);
    currentTemp = temperature();
    console.log(currentTemp+ " degrees");

    if (day >= 7) {
        console.log("You have a total of $" + finalMoney + " after 7 days!");
        rePlay()
        window.location.reload();
        }
    }
}
main();