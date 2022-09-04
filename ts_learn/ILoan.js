var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var obj4 = new AgriLoan(10, 1);
console.log("利润: " + obj4.interest + ", 抽成: " + obj4.rebate);
