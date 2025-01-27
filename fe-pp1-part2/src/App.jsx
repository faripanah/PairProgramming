import "./App.css";
import CreditCard from "./CreditCard/CreditCard";
import BoxColor from "./BoxColor";
import Greetings from "./Greetings";
function App() {
  return (
    <>
    <div className="creditCardContainer">
     
     <CreditCard
       type="Visa"
       number="0123456789018875"
       expirationMonth={3}
       expirationYear={2021}
       bank="BNP"
       owner="Maxence Bouret"
       bgColor="#11aa99"
       color="white" 
     />
   
     <CreditCard
       type="Master Card"
       number="0123456789010993"
       expirationMonth={3}
       expirationYear={2021}
       bank="N26"
       owner="Maxence Bouret"
       bgColor="#eeeeee"
       color="#222222"
     />
   
     <CreditCard
       type="Visa"
       number="0123456789016982"
       expirationMonth={12}
       expirationYear={2019}
       bank="Name of the Bank"
       owner="Firstname Lastname"
       bgColor="#ddbb55"
       color="white" 
     />
     </div>
     <div  className="boxColorContainer">
     <BoxColor r={255} g={0} b={0} />
     <BoxColor r={128} g={255} b={0} />

     </div>
     <div>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

     </div>
     

    </>
    

      
    
  )
    
      
    
}

export default App;
