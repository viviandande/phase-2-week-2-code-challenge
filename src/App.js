import React,{useState,useEffect} from 'react';
import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';

function App() {
  const[bots,setBots] = useState([])
  const[army,setArmy] = useState([])

  const [display, setDisplay] = useState("collection")
  const [botToDisplay, setBotToDisplay] = useState({})



  useEffect(() =>{
    fetch("http://localhost:8001/bots")
    .then(res => res.json())
    .then(data => {
        setBots(data)
    })
},[])


function removeFromArmy(bot) {
  setArmy(army.filter(a => a.id!== bot.id))
}

function discharge(bot) {

  fetch(`http://localhost:8001/bots/${bot.id}`, {
    method: "DELETE"
  })

  setArmy(army.filter(a => a.id!== bot.id))
  setBots(bots.filter(b => b.id!== bot.id))
}

  return (
    <div className="App">
      <YourBotArmy discharge={discharge} removeFromArmy={removeFromArmy} army={army}/>
      {display === "collection" ? <BotCollection setDisplay={setDisplay} setBotToDisplay={setBotToDisplay} bots={bots} army={army} setArmy={setArmy}/> : <BotSpecs setArmy={setArmy} army={army} setDisplay={setDisplay} bot={botToDisplay}  /> }

    </div>
  );
}

export default App;