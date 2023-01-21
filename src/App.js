import React,{useState,useEffect} from 'react';
import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  const[bots,setBots] = useState([])
  const[army,setArmy] = useState([])

  function setSetArmy(bot){
    setArmy(army.filter(theBot => theBot.id!== bot.id));
  }

  useEffect(() =>{
    fetch("http://localhost:8001/bots")
    .then(res => res.json())
    .then(data => {
        setBots(data)
    })
},[])

function deletePermanently(bot){
  fetch(`http://localhost:8001/bots/${bot.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
  setBots(bots.filter(theBot => theBot.id!== bot.id));
  setSetArmy(army.filter(theBot => theBot.id!== bot.id));
}


  return (
    <div className="App">
      <YourBotArmy army={army} setSetArmy={setSetArmy} deletePermanently={deletePermanently}/>
      <BotCollection bots={bots} army={army} setArmy={setArmy}/>

    </div>
  );
}

export default App;
