// https://github.com/Shabbir0001/3rd-assignment

// problem-1(lengthConverter)
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}



//problem-2(budgetCalculator)
var watchPrice = 50;
var phonePrice = 100;
var laptopPrice = 500;
function budgetCalculator(numOfWatch, numOfPhone, numOfLaptop){
    var watchTotalCost = watchPrice * numOfWatch;
    var phoneTotalCost = phonePrice * numOfPhone;
    var laptopTotalCost = laptopPrice * numOfLaptop;
    return watchTotalCost + phoneTotalCost + laptopTotalCost;
}
var totalElectronicsCost = budgetCalculator (2, 1, 1);
console.log(totalElectronicsCost);



//problem-3(hotel-cost)
function hotelCost(nights){
var cost =  0;
if (nights <= 10){
    cost = nights * 100;
}
else if (nights <= 20){
    var noDiscount = 10 * 100;
    var remaining = nights - 10;
    var firstDiscount = remaining * 80;
    cost = noDiscount + firstDiscount;
}
else {
    var noDiscount = 10 * 100;
    var firstDiscount = 10 * 80;
    var remaining = nights - 20;
    var secondDiscound = remaining * 50;
    cost = noDiscount + firstDiscount + secondDiscound;
}
return cost;
}
var totalCost = hotelCost(15);
console.log(totalCost);



// problem-4(megaFriend)
var friendsName = ["Nishad", "Utso", "Proma", "Rakesh"];

function megaFriend(friendsName) {
    var biggestName = friendsName[0];
    for(var i = 0; i < friendsName.length; i++){
        var element = friendsName[i];
        if(element > biggestName){
            biggestName = element;
        }
    }
    return element;
  
}
var result = megaFriend(friendsName);
console.log(result);

