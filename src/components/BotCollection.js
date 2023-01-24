import Bot from "./Bot";
import SortBar from "./SortBar";

import { useState } from "react";

function BotCollection({bots,army,setArmy, setBotToDisplay, setDisplay}) {

    const [sortBy, setSortBy] = useState("health")
    const [sort, setSort] = useState(false)
    const [sortDirection, setSortDirection] = useState("desc")

    const [filter, setFilter] = useState("none")



    const filteredBots = bots.filter((bot)=>{
        if(filter==='none'){
          return true
        }else{
          return bot.bot_class === filter
        }
   })


    const sortedBots = sort ? [...filteredBots].sort((t1, t2) => {
        if(t1[sortBy] > t2[sortBy]) {
          return sortDirection === "asc" ? 1 : -1
        }
        if(t1[sortBy] < t2[sortBy]) {
          return sortDirection === "asc" ? -1 : 1
        }

        return 0
      }) : filteredBots

      const botDisplay= sortedBots.map(bot => <Bot setDisplay={setDisplay} setBotToDisplay={setBotToDisplay} key={bot.id} bot={bot} army={army} setArmy={setArmy}/>)
      return(
        <>
         <SortBar sort={sort} setSort={setSort} sortBy={sortBy} setSortBy={setSortBy} sortDirection={sortDirection} setSortDirection={setSortDirection} setFilter={setFilter} filter={filter} />
         <div className="bot-collection">
             {botDisplay}
         </div></>
     )
 }
 export default BotCollection;