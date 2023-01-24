import Bot from "./Bot";

function YourBotArmy({army, removeFromArmy, discharge}){
    const botArmy = army.map(bot => <Bot container="army-container" discharge={discharge} removeFromArmy={removeFromArmy} key={bot.id} bot={bot}/>)
    return(
        <div className="army">
            {botArmy}
        </div>
    )
}
export default YourBotArmy;