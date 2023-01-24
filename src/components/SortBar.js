import React from "react";

function SortBar({sort, setSort, sortBy, setSortBy, sortDirection, setSortDirection, filter, setFilter}) {
    return (
        <div className="sortby">
            <div className="sort-by">
                <label>Filter By</label>
                <select value={filter} className="sort" onChange={(event) => {
                    setFilter(event.target.value)
                }}>
                    <option value="none">none</option>
                    <option value="Medic">Medic</option>
                    <option value="Support">Support</option>
                    <option value="Witch">Witch</option>
                    <option value="Defender">Defender</option>
                    <option value="Assault">Assault</option>
                    <option value="Captain">Captain</option>
                </select>
            </div>
            <div className="sort-by">
                <label>Sort By</label>
                <select value={sortBy} disabled={!sort} className="sort" onChange={(event) => {
                    setSortBy(event.target.value)
                }}>
                    <option value="health">Health</option>
                    <option value="damage">Damage</option>
                    <option value="armor">Armor</option>
                </select>
            </div>
            <div className="sort-state">
            <label>Sort</label>
                <input type="checkbox" onChange={(event) => {
                    setSort(event.target.checked)
                }}/>
            </div>
            <div className="sort-direction">
                <label>Sort Direction</label>
                <select value={sortDirection} disabled={!sort} className="sortdirection" onChange={(event) => {
                setSortDirection(event.target.value)
            }}>
                <option value="asc">ASC</option>
                <option value="desc">DESC</option>
            </select>
            </div>
        </div>
    )
}

export default SortBar;