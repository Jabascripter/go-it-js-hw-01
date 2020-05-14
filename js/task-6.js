let total = 0;
let number;

do {
  number = Number(prompt("Введите число"));
  total += number;
} while (number);

if (isNaN(total)) {
  alert("Было введено не число, попробуйте еще раз");
} else {
  alert(`Общая сумма чисел равна: ${total}`);
}
