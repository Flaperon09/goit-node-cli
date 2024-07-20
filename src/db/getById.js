const getAll = require("./list"); // Получение всех товаров

const getById = async (id) => {
    const products = await getAll();
    const result = products.find(item => item.id === id);

    // Если результат не найден, то вернуть null
    if (!result) {
        return null;
    };
    
    return result;
};

module.exports = getById;