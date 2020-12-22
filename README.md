### `OrthoConsult`

This project is my first in-depth UX and Development project/product that has a real life context that will be used by real people.

<br />

### Incorporating New & Old Concepts

A big focus for this project is in storing, viewing and managing data so aside from utilizing more React Hooks as in my other projects, I delved into Firebase. The current list of dependencies (at the moment) are the following:

- [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [Dependencies](https://firebase.google.com/)
  - [HTML Drag & Drop](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
  - [React Signatures](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [React Hooks](https://reactjs.org/docs/hooks-reference.html#useeffect)
  - [useState](https://reactjs.org/docs/hooks-reference.html#usestate)
  - [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)
  - [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)
  - [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
  - [useRef](https://reactjs.org/docs/hooks-reference.html#useref)
  - [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [Axios](https://www.npmjs.com/package/axios)
- [Firebase](https://firebase.google.com/)
  - [FireStore](https://firebase.google.com/products/firestore)
  - [Storage](https://firebase.google.com/products/storage)
  - [Authentication](https://firebase.google.com/products/auth)
  - [Hosting](https://firebase.google.com/products/hosting)

<br />

### Folder Structure

My folder structure (seen below) is organized by grouping similar files together which aims for scale as I add more features, pages and implement responsiveness. 

<br />

```
OrthoConsult
├── README.md
├── package.json
├── node_modules
├── build
├── public
└── src
    ├── assets
    │   ├── files
    │   ├── icons
    │   ├── images
    │   ├── logos
    │   └── vectors
    ├── components
    │   ├── Card
    │   ├── Cards
    │   ├── EvaluationForm
    │   ├── EvaluationRecords
    │   ├── File
    │   ├── FileUploader
    │   ├── Header
    │   ├── Help
    │   ├── Input
    │   ├── Rating
    │   ├── Selection
    │   ├── TextArea
    │   └── Toggle
    ├── contexts
    │   ├── AuthProvider.jsx
    │   ├── DataProvider.jsx
    │   ├── ModalProvider.jsx
    │   ├── StepProvider.jsx
    │   └── ValidationProvider.jsx
    ├── templates
    │   ├── dataTemplate.jsx
    │   └── formTemplate.jsx
    ├── fields
    ├── pages
    │   ├── About
    │   ├── Account
    │   ├── SignUp
    │   ├── LogIn
    │   ├── Evaluation
    │   └── Main
    ├── styles
    │   ├── partials
    │   └── baseline.scss
    ├── firebase.js
    ├── App.js
    └── index.js
```

<br />
<br />
