function Bot({setDisplay, setBotToDisplay, bot,army,setArmy, container, removeFromArmy, discharge}){
    const { name,health,damage,armor,bot_class,catchphrase,avatar_url} = bot;

    function handleClick(){



        if(!container) {
            setBotToDisplay(bot)
            setDisplay("specs")
        } else {
            removeFromArmy(bot)
        }
    }
    return(
        <div className="bot" onClick={handleClick}>
            {container ? <button className="deletebutton" onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()

                discharge(bot)
            }}>X</button> : null}
            <img src={avatar_url} alt=''/>
            <h3>{name}{bot_class}</h3>
            <p>{catchphrase}</p>
            <div className="botState">
                <div>💔<span>{health}</span></div>
                <div>⚡<span>{damage}</span></div>
                <div>🛡<span>{armor}</span></div>
            </div>
        </div>
    )
}


export default Bot;