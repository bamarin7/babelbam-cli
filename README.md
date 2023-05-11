# babelbam

Your **All-in-One** JavaScript **Sandbox** and **Notebook**.

babelbam provides users with a versatile platform to create, share, and modify code snippets in real-time.

With support for a variety of libraries and frameworks, babelbam's intuitive user interface and live preview make it easy to see the results of your code as you type.

---

## Tech Stack

| [![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=TypeScript&logoColor=black&style=for-the-badge)](https://www.typescriptlang.org/) | [![React](https://img.shields.io/badge/-React-61DAFB?logo=React&logoColor=black&style=for-the-badge)](https://reactjs.org/)               | [![Redux](https://img.shields.io/badge/-Redux-764ABC?logo=Redux&logoColor=white&style=for-the-badge)](https://redux.js.org/) | [![Lerna](https://img.shields.io/badge/-Lerna-CF4349?logo=Lerna&logoColor=white&style=for-the-badge)](https://lerna.js.org/)            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------: | --------------------------------------------------------------------------------------------------------------------------------------- |
| [![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=Node.js&logoColor=white&style=for-the-badge)](https://nodejs.org/)                      | [![Express.js](https://img.shields.io/badge/-Express.js-000000?logo=Express&logoColor=white&style=for-the-badge)](https://expressjs.com/) |   [![Bulma](https://img.shields.io/badge/-Bulma-00D1B2?logo=Bulma&logoColor=white&style=for-the-badge)](https://bulma.io/)   | [![esbuild](https://img.shields.io/badge/-esbuild-F8A51C?logo=esbuild&logoColor=black&style=for-the-badge)](https://esbuild.github.io/) |

## Features

- **All-in-One Sandbox**: Write, edit, and preview JavaScript and React code snippets without the need for external tools.
- **Real-Time Editing**: See the results of your code immediately with babelbam's live preview feature, making it easier to debug and visualize your work.
- **Library Support**: Utilize popular libraries and frameworks to enhance your coding experience.
- **Text-Editor**: babelbam provides a user-friendly way to document code using the built-in Markdown text-editor.
- **Sharing and Collaboration**: babelbam projects are automatically serialized and saved to user's machines, making it possible to store and share projects with others.
- **Command-Line Interface**: babelbam offers a convenient CLI, available on npm, for opening and creating babelbam files from the command line. `babelbam serve <filename>` starts a local API and opens the front-end application on a localhost port, allowing users to easily access and interact with babelbam in their browser.

## Usage

1. Install the [CLI](https://www.npmjs.com/package/babelbam) by running `npm i babelbam`.
2. Run `babelbam --help` for additional help

## Lessons Learned

- **Best Practices** for designing and building advanced, **production-ready** apps.
- Integrating **Typescript**, **React** and **React-Redux** together.
- Designing highly **reusable React components**.
- Creating a **custom plugin** for **Esbuild** to enable in-browser transpiling/bundling with support for imports from npm.
- Creating a **caching layer** for imported modules/bundled code using Local-Forage.
- Using **Redux-Middlewares** for handling complex business logic.
- Taking advantage of powerful **third-party libraries** such as: bulma, immer, monaco-editor, react-md-editor, commander, etc...
- **Safely handling user-input** by utilizing iframes as a code-execution environment- the same technique used by popular sites such as Codepen.
- Utilizing lerna and nx to create a **mono-repo** with multiple packages and build targets.
- Creating a **Restful-API** to serve up a **Front-End application** from a **CLI**.
- Utilizing **web-assembly** to go faster
- **Deploying** to npm.

## Reflection

This project was a great learning experience for me. I learned a ton about TypeScript, React, and React-Redux as well as some project-specific libraries such as Monaco-Editor and Resizable. An unexpected challenge I faced was working with lerna and understanding the build process. This project contains multiple packages, and I had to learn how to configure lerna to build and deploy the packages in the correct order and for different production environments.

I also learned a lot about the importance of planning and design when building a large-scale application. It's very clear to me how useful OOP principles can be in designing larger apps. Developing each component in a modular way and ensuring that the code is reusable makes it much easier to modify and add more features later on.

I had a lot of fun working on this project, and I'm excited to continue learning and improving my skills. ✅

## Acknowledgements

- [readme.so](https://readme.so/editor)
- [Simple Icons](https://simpleicons.org/?q=redux)
- [shields.io](https://shields.io/)

## Author

- [Brian Marin Silva](https://www.github.com/bamarin7)
