const Bank = function () {
  let _money = 500;
  const depositCash = function (cash) {
    _money += cash;
    return _money;
  };
  const checkBalance = function () {
    return console.log(_money);
  };
  return {
    deposit: depositCash,
    showBalance: checkBalance,
  };
};

const bank = Bank();
bank.deposit(200);
bank.deposit(250);
bank.showBalance(); //should print 950
