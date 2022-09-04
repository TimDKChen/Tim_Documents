interface ILoan {
  interest: number
}

class AgriLoan implements ILoan {
  interest: number
  rebate: number

  constructor(interest:number, rebate: number) {
    this.interest = interest
    this.rebate = rebate
  }
}

var obj4 = new AgriLoan(10, 1)
console.log("利润: "+obj4.interest+", 抽成: "+obj4.rebate)