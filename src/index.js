const { contactsOperations } = require("./contacts"); // Импорт списка операций с контактами
// console.log("Содержимое contactsOperations: ", contactsOperations);

// const listContacts = require("./contacts");

const { program } = require("commander");

// import { program } from "commander";
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const options = program.opts();
// console.log(options);

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.listContacts();
      // const contacts = await listContacts();
      console.log(contacts);
      break;

    case "get":
      // ... id
      const contact = await contactsOperations.getContactById(id);
      console.log(contact);

      // Если продукт не найден, то вывести сообщение об ошибке
      if (!contact) {
        throw new Error(`Product with id=${id} not found`)
      };

      break;

    case "add":
      // ... name email phone
      const newContact = await contactsOperations.addContact(name, email, phone);
      break;

    case "remove":
      // ... id
      const removeContact = await contactsOperations.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

const data = invokeAction(options);
// console.log("Выполнение invokeAction: ", data);