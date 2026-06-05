// Ways to create function Component

// Normal function

function Conditional() {

}

// Arrow function

const Conditional = () => {

};

// Function Expression

const Conditional = function () {

};

//---------------------------------------------------------

// You can import multiple components from one file using named export method. Like this:

/*
    export function Button() {
    return <h2>BUtton Component</h2>
}
    */
/*
    export function LoginButton() {
    return <h2>Login Component</h2>
 }
*/

//---------------------------------------------------------

// You can import only one component per file using export default method. Like this:

/*
const App = () => {
  return (
    <div>
      
    </div>
  )
}

export default App
*/

//---------------------------------------------------------

// fragements are empty parent tag which is used to wrap multiple HTML elements, Like this:

/*
 const App = () => {
  return (     
    <>
      <h1>Hello</h1>
      <h2>Hello2</h2>
    </>
  )
}
export default App
  */

//---------------------------------------------------------

// Types of conditional Rendering:

const Conditional = () => {
    const isLoggedIn = false;

    // using if-else

    /*
      if(isLoggedIn){
          return <h1>Welcome User</h1>
      }else{
          return <h1>Login Please</h1>
      }
          */

    // using null

    /*
   if(!isLoggedIn){
       return null
   }
       */

    // using LogicalAnd operator

    /*
    return (
        <>
         {
            isLoggedIn&&<h1>Welcome User</h1>
        } 
        </>
    )
    */

    // using Ternary operator

    /*
    return (
        <>
         {
            isLoggedIn?<h1>Welcome User</h1>:<h2>Login Please</h2>
        } 
        </>
    )
    */
};

export default Conditional;
