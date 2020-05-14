const country = prompt("Введите вашу страну");
let cost;
if (country === null || country === "") {
  alert("Отменено пользователем");
} else {
  let countryDown = country.toLowerCase();
  let countryNormal = countryDown[0].toUpperCase() + countryDown.substring(1);

  switch (countryNormal) {
    case "Китай":
      cost = 100;
      alert(`Доставка в ${countryNormal} будет стоить ${cost} кредитов`);
      break;
    case "Чили":
      cost = 250;
      alert(`Доставка в ${countryNormal} будет стоить ${cost} кредитов`);
      break;
    case "Австралия":
      cost = 170;
      alert(`Доставка в ${countryNormal} будет стоить ${cost} кредитов`);
      break;
    case "Индия":
      cost = 80;
      alert(`Доставка в ${countryNormal} будет стоить ${cost} кредитов`);
      break;
    case "Ямайка":
      cost = 120;
      alert(`Доставка в ${countryNormal} будет стоить ${cost} кредитов`);
      break;
    default:
      alert("В вашей стране доставка не доступна");
  }
}

// switch (countryNormal) {
//   case "Китай":
//     cost = 100;
//     alert(`Доставка в ${countryNormal} будет стоить ${cost} кредитов`);
//     break;
//   case "Чили":
//     cost = 250;
//     alert(`Доставка в ${countryNormal} будет стоить ${cost} кредитов`);
//     break;
//   case "Австралия":
//     cost = 170;
//     alert(`Доставка в ${countryNormal} будет стоить ${cost} кредитов`);
//     break;
//   case "Индия":
//     cost = 80;
//     alert(`Доставка в ${countryNormal} будет стоить ${cost} кредитов`);
//     break;
//   case "Ямайка":
//     cost = 120;
//     alert(`Доставка в ${countryNormal} будет стоить ${cost} кредитов`);
//     break;
//   default:
//     alert("В вашей стране доставка не доступна");
// }
