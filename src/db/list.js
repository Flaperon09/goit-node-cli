const fs = require("fs/promises"); // Импорт пакета для работы с файлами
const filePath = require("./filePath"); // Импорт пути к файлу

const list = async () => {
    const data = await fs.readFile(filePath);
    const contacts = JSON.parse(data); //Получение массива объектов из строки
    return contacts;
};

module.exports = list;