
// import MainContent from "./components/MainContent";
// import ProductInfo from "./components/ProductInfo";
// import UserList from "./components/UserList";

import Weather from "./components/Weather";
import UserStatus from "./components/UserStatus";

import { FaCartArrowDown } from "react-icons/fa6";

// import ProductList from "./components/ProductList";
// import Person from "./components/Person";
import Greeting from "./components/Greeting";
function App(){
  return(
    <>
      
      {/* <MainContent />
      <ProductInfo />
      <UserList/>
      <ProductList id={Math.random()} name ={"Vivo X200"} price = {699.88}/>

      <User name= "Nousad Ali" age ={22} college = "NIT Raipur" year= {2025} />
      <Person name="Aftab Ali" age = {18} /> */}


      {/* <Weather temperature = {0}/>
      <UserStatus loggedIn={true} isAdmin={true}/>
      <UserStatus loggedIn={true} isAdmin={false}/>
      <UserStatus loggedIn={false} isAdmin={true}/>
      <UserStatus loggedIn={false} isAdmin={false}/> */}
      <Greeting timeOfDay = "afternoon" />


      <section style={{backgroundColor : 'green', padding: '2rem', color: 'white'}}>Helllo 
        <FaCartArrowDown/>
      </section>
    </>
  )
}


function User(props){
  return(
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.college}</h1>
      <h1>{props.year}</h1>

    </div>
  )
}

export default App; 