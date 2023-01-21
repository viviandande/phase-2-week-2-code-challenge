import Bot from "./Bot";

function YourBotArmy({army,setSetArmy,deletePermanently }){
    const botArmy = army.map(bot => <Bot deletePermanently={deletePermanently} key={bot.id} bot={bot}container='armyContainer' setSetArmy={setSetArmy}/>)
    return(
        <div className="army">
            {botArmy}
        </div>
    )
}
export default YourBotArmy;