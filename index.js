const { contactsOperations } = require("./contacts"); // Импорт функций работы с контактами

const { program } = require("commander");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const options = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.listContacts();
      console.log("List of all contacts: ");
      console.table(contacts);
      break;

    case "get":
      // ... id
      const contact = await contactsOperations.getContactById(id);
    
      // Если контакт не найден, то вывести сообщение об ошибке
      if (!contact) {
        console.log(contact);
        console.log(`Contact with id=${id} not found`);
        break;
      };

      console.log(`Contact by ID=${id}: `);
      console.log(contact);
      break;

    case "add":
      // ... name email phone
      const newContact = await contactsOperations.addContact(name, email, phone);
      console.log("New contact added: ");
      console.log(newContact);
      break;

    case "remove":
      // ... id
      const removeContact = await contactsOperations.removeContact(id);
      
      // Если контакт не найден, то вывести сообщение об ошибке
      if (!removeContact) {
        console.log(removeContact);
        console.log(`Contact with id=${id} not found`);
        break;
      };

      console.log(`Contact by ID=${id} removed: `);
      console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

const data = invokeAction(options);