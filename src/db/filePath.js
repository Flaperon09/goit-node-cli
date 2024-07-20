const path = require("path"); // Пакет для работы с путями

const filePath = path.join(__dirname, "contacts.json"); // Нормализация пути к файлу

module.exports = filePath;