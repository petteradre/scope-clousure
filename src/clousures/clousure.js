const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}
moneyBox(5);
moneyBox(10);

const moneyBox = () => {
    debugger
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}
let MymoneyBox = moneyBox();
MymoneyBox(4);
MymoneyBox(6);