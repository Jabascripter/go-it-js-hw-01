const ADMIN_PASSWORD = "1234";
let message;

const password = prompt("Password");

if (password === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else if (password === null) {
  message = "Отменено пользователем!";
} else if (password !== ADMIN_PASSWORD) {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);
