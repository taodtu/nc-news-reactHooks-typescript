# A Front-end practice reference with React Hooks and Typescript, coupled with a back-end with serverless Azure functions and No-SQL Cosmos DB.

This is a refactoring of the nc-news project (https://github.com/taodtu/nc-news-rest-client) with **`Reack hooks`** and **`Typescript`**.
In order to run this project locally, you need to have an Azure account and then start the backend project from (https://github.com/taodtu/nc-news-azure)

## Features

- All class components are transformed into **`functional component`** and all components, functions, hooks are written with **`typescript`**. **`Generic`** is used to reuse function as much as possible.

- Custome react hooks **`useFetch`** extract all data fetching logic which greatly simplify the component code and reusable, reduce any component needing data fetching logic up to **`40`** lines, and use **`union type`** to provide extra type safety.

- Implement **`Context`** and **`useReducer`** to mimic a **`Redux`** like global store for comment to handle fetch, add and delete comments, which reduce the commentList component from **`118`** lines to **`36`** lines, and replace the original **`Render Props`** and **`Higher Order Component`** pattern.

- Implement **`useRef`** to access **`PrepProps`** which is not available in current **`useEffect`** in order to rest papge to 1 when changing any other viewing options like **`sort`** and **`order`**.

- All the data manipulations on array and object are ensured **`not mutating`** the original data by using destructuring and spread operator. In addtional to fullfilling the northcoder project requirement, an UserPage is created for more advanced functionality.

- Maximize **`component reuse`**, such as the voting button, toggle-button, article list,comment-list, sort-select and handler functions.

- Applying **`slot pattern`** and **`ContextAPI`** to pass the current user value to the bottom tree component, in order to avoid props drilling.

- Implement **`optimistic response`** for the vote button.

- Page-number style **`pagination`** implemented.

- React 16 with create-react-app --typescript.

- Responsive.

- Styling with [@material/ui v4.1.3](https://material-ui.com/).

- Routing with [@reach/router v1.1.0](https://reach.tech/router).

## Installation

- git clone https://github.com/taodtu/nc-news-rest-client.git
- cd nc-news-rest-client/nc-news-rest-client.
- npm install.
- npm start.
- visit http://localhost:3000
