const rain = Math.round(Math.random());

if (rain === 1) {
    alert("Пошёл дождь. Возьмите зонт!");
} else {
    alert("Дождя нет!");
}




const math = parseInt(prompt("Введите кол-во баллов по математике:"), 10);
const russian = parseInt(prompt("Введите кол-во баллов по русскому языку:"), 10);
const informatics = parseInt(prompt("Введите кол-во баллов по информатике:"), 10);

const total = math + russian + informatics;

if (total >= 265) {
    alert("Поздравляю, вы поступили на бюджет!");
} else {
    alert("К сожалению, вы не поступили на бюджет.");
}




const amount = parseInt(prompt("Сколько денег вы хотите снять?"), 10);

if (amount % 100 === 0) {
    console.log("Выдача возможна. Заберите деньги.");
} else {
    console.log("Банкомат выдаёт только купюры по 100р. Введите другую сумму.");
}
