function Bot({bot,army,setArmy,container,setSetArmy, deletePermanently}){
    const { name,health,damage,armor,bot_class,catchphrase,avatar_url} = bot;

    function handleClick(){



        if(container === "collectionContainer"){
            let isInArmy = false;
        for(let theBot of army){
            if(theBot.id === bot.id){
                isInArmy = true;
                break;
            }
        }

        if(!isInArmy){
            setArmy([...army,bot]);
         }
        }else{
            setSetArmy(bot)
        }
     }
     function handleDischarge(e){
        e.preventDefault();
        e.stopPropagation();

        deletePermanently(bot)
     }
    return(
        <div className="bot" onClick={handleClick}>
            <img src={avatar_url} alt=''/>
            <h3>{name}{bot_class}</h3>
            <p>{catchphrase}</p>
            <div className="botState">
                <div>💔<span>{health}</span></div>
                <div>⚡<span>{damage}</span></div>
                <div>🛡<span>{armor}</span></div>
            </div>
           {container ==='armyContainer' ? <button onClick={handleDischarge}>X</button> : null}
        </div>
    )
}


export default Bot;