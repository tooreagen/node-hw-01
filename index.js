const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
          listContacts();
      break;

    case "get":
      // ... id
          getContactById();
      break;

    case "add":
      // ... name email phone
          addContact();
      break;

    case "remove":
      // ... id
          removeContact();
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

// const actionIndex = process.argv.indexOf
//хотів би наполегливо попросити у вас до дз докладати скріншоти в readme файл, без посилань на сторонні сервіси, на яких потрібно реєструватись
// Try this markdown:

// ![alt text](http://url/to/img.png)
//![Creating repo from a template step 1](./assets/template-step-1.png)
// I think you can link directly to the raw version of an image if it's stored in your repository. i.e.
// ![alt text](https://github.com/[username]/[reponame]/blob/[branch]/image.jpg?raw=true)
