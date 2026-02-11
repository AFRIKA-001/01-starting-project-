import componentsImg from "./assets/components.png";
import configImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import statemgmtImg from "./assets/state-mgmt.png";

export const CORE_CONCEPTS = [
    
    {
        title: "components",
        description: "The building blocks of React apps",
        image: componentsImg
    },
    {
        title: "config",
        description: "The building blocks of React apps",
        image: configImg
    },
    {
        title: "jsx",
        description: "The building blocks of React apps",
        image: jsxImg
    },
    {
        title: "state management",
        description: "The building blocks of React apps",
        image: statemgmtImg
    }
];

    export  const  EXAMPLES = {
    components:{
        title: "components", 
        description: "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.",
        code: `function welcome (){
        return <h1>Hello, world!</h1>;}`
    
    },
    jsx: {
        title: "JSX",
        description: "JSX is a syntax extension to JavaScript. It is used with React to describe what the UI should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.",
        code: `const element = <h1>Hello, world!</h1>;`
    },
    props: {
        title: "Props",
        description: "Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation using a naming convention similar to HTML-tag attributes.",
        code: `function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
    }`
    },
    state: {
        title: "State",
        description: "State is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.",
        code: `import { useState } from 'react';

    function Example() {
      const [count, setCount] = useState(0);

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );    

    };
`   
    },
};
export default EXAMPLES;