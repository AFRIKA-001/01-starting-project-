
import ReactImg from "../assets/react-core-concepts.png";
import "./Header/Header.css"; 
const reactDescription = ['fundamental','crucial', 'core'];
const RandomGen = (max) =>{
  return Math.floor(Math.random()* max);
}


export default function Header(){
  const description = reactDescription[RandomGen(3)];
  return (
  
  <header>

        <img src={ReactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      )
}