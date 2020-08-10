//https://www.codewars.com/kata/574b3b1599d8f897470018f6/solutions/javascript/me/best_practice
function getRealFloor(n){
    if(n === 0 || n < 0){
        return n;
    }
    if(n > 0 && n < 14){
        return n - 1;
    }
    else return n - 2;

}