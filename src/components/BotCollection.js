
import Bot from "./Bot";

function BotCollection({bots,army,setArmy}) {
    const botDisplay= bots.map(bot =>
    <Bot key={bot.id} bot={bot} army={army} setArmy={setArmy}container='collectionContainer'/>)

    return(
        <div className="bot-collection">
            {botDisplay}
        </div>
    )
}
export default BotCollection;