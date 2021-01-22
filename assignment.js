

// 1st problem kilometerToMeter
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;   
    return meter;
}


// 2nd problems budgetCalculator.
function budgetCalculator(watch, phone, laptop) {
    var totalPrice = (watch * 50) + (phone * 100) + (laptop * 500);
    return totalPrice;
}



// 3rd problems hotelCost.
function hotelCost(day) {
    cost = 0;
    if (day <= 10) {
        cost = day * 100;
    }
    else if (day <= 20) {
        var firstTen = 10 * 100;
        var remainingDay = day - 10;
        var secondTen = remainingDay * 80;
        cost = firstTen + secondTen;
    }
    else {
        var firstTen = 10 * 100;
        var secondTen = 10 * 80;
        var remainingDay = day - 20;
        var lastPerDays = remainingDay * 50;
        cost = firstTen + secondTen + lastPerDays;
    }
    return cost;
}



// 4th problems megaFriend.
function megaFriend(name) {
    var friendName = name[0];
    for (var i = 0; i < name.length; i++){
        var element = name[i];
        if (name[i] == 0) {
            return "Error! Please input name."
        }
        else if (element.length > friendName.length) {
            friendName = element;
        }
    }
    return friendName;
}