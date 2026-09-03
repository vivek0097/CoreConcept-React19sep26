export const UserProfile = () => {
  return (
    <div>
      <h1>this  is  user profile  component</h1>
      <p>Hi  i'm Vivek</p>
    </div>
  )
}






// JSX — Basic Syntax & Rules

// JSX allows us to write HTML-like syntax inside JavaScript.

// 1. Create a Component
// const App = () => {
//   return (
//     <div>
//       <h1>Hello React</h1>
//     </div>
//   );
// };

// export default App;
// 2. Write HTML-like Elements
// <h1>Hello React</h1>
// <p>Welcome to React</p>
// 3. Use className for CSS Classes
// <div className="container">
//   <h1>Hello</h1>
// </div>
// 4. Use {} for JavaScript
// const name = "Vivek";

// <h1>Hello {name}</h1>
// 5. Close Every Tag
// <img src="/logo.png" />
// <input type="text" />
// 6. Use One Parent Element
// return (
//   <div>
//     <h1>Hello</h1>
//     <p>Welcome</p>
//   </div>
// );

// Or use a Fragment:

// return (
//   <>
//     <h1>Hello</h1>
//     <p>Welcome</p>
//   </>
// );
// 7. Use JavaScript Expressions
// <h1>{10 + 20}</h1>
// <p>{user.name}</p>
// <p>{isLoggedIn ? "Welcome" : "Login"}</p>
// 8. JSX Comments
// {/* This is a JSX comment */}
// Basic JSX Flow
// Component
//    ↓
// return()
//    ↓
// JSX
//    ↓
// HTML-like elements
//    ↓
// JavaScript expressions using {}
//    ↓
// React renders UI
// Key Rules
// JSX looks like HTML but is JavaScript syntax.
// Use className, not class.
// Close every JSX tag.
// Use {} for JavaScript expressions.
// Return one JSX tree.
// Use key when rendering lists.
// Event names use camelCase, e.g. onClick.