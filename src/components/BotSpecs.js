import React from "react";

function BotSpecs({bot, setDisplay, setArmy, army}) {

    const {name, health, damage, armor, bot_class, avatar_url, catchphrase} = bot

    function addToArmy() {
        if(!Boolean(army.find(x => x.id === bot.id))) {
            setArmy([...army,bot]);
        }
        setDisplay("collection")
    }

    return (
    <div className="botspecs">
        <div className="image-icon">
            <h1>Bot Specs</h1>
            <img src={avatar_url} alt=''/>
        </div>
        <div className="bot-details">
            <h3>{name}{bot_class}</h3>
            <p>{catchphrase}</p>
            <div className="bot-state">
                <div>💔<span>{health}</span></div>
                <div>⚡<span>{damage}</span></div>
                <div>🛡<span>{armor}</span></div>
            </div>

            <button onClick={() => {
                setDisplay("collection")
            }}>Go Back</button>
            <button onClick={addToArmy}>Enlist</button>
        </div>
    </div>
    )
}

export default BotSpecs;