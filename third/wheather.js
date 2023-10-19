var temperatures = [];
var totalTemperature = 0;

var regions = ["Джалал-Абад", "Иссык-Куль", "Ош", "Баткен", "Нарын", "Талас", "Чуй"];

for (var i = 0; i < regions.length; i++) {
    var temperature = parseFloat(prompt("Введите температуру в области " + regions[i] + " (в Цельсиях):"));
    temperatures.push(temperature);
    totalTemperature += temperature;
}

var averageTemperature = totalTemperature / temperatures.length;

var averageInWeb = document.getElementById("average-temperature");
averageInWeb.textContent = "Средний показатель температуры Кыргызской Республики на сегодня " + averageTemperature + " градусов по Цельсию.";

console.log("Средний показатель температуры Кыргызской Республики на сегодня " + averageTemperature + " градусов по Цельсию.");
