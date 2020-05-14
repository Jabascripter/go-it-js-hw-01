const credits = 23580;
const pricePerDroid = 10000;
let numerDroid = prompt("Сколько дроидов вам нужно?");

if (numerDroid === null) {
  console.log(`Отменено пользоватилем`);
} else if (credits >= numerDroid * pricePerDroid) {
  let creditsAfter = credits - numerDroid * pricePerDroid;
  console.log(
    `Вы купили ${numerDroid} дроидов, на счету осталось ${creditsAfter} кредитов.`
  );
} else if (credits < numerDroid * pricePerDroid) {
  console.log(`Недостаточно средств на счету!`);
}
