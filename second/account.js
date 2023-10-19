var account = {
    numberOfAccount: "123456",
    current: "USD",
    balance: 777,
    name: "Baiturchik",
    blocked: false
}

document.getElementById("account-number").textContent = account.numberOfAccount;
document.getElementById("account-current").textContent = account.current;
document.getElementById("account-balance").textContent = account.balance;
document.getElementById("account-name").textContent = account.name;
document.getElementById("account-block").textContent = account.blocked;


console.log("Number of Account: " + account.numberOfAccount)
console.log("Current: " + account.current)
console.log("Balance: " + account.balance)
console.log("Name: " + account.name)
console.log("Blocked or Not: " + account.blocked)
