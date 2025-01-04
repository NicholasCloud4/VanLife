import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'


export default function Vans() {

    const [vans, setVans] = React.useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    let typeFilter = (searchParams.get("type"));
    console.log(typeFilter);


    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const displayedVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans

    const vanElements = displayedVans.map((van) => (
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    /**
     * Challenges:
     * 1. Conditionally render the "Clear filter" button only if
     *    there's a `type` filter currently applied in the search params
     * 
     * 2. On just the 3 filter buttons (not the Clear filter button),
     *    conditionally render the className "selected" if the
     *    typeFilter value equals the value that button sets it to.
     *    (We don't have a variable for that, so it'll be a hard-coded
     *    string).
     * 
     *    Hint: `...${typeFilter === "simple" ? ...}`
     */

    return (
        <>
            <div className="van-list-container">
                <h1>Explore our van options</h1>
                <div className="van-list-filter-buttons">
                    <button className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`} onClick={() => setSearchParams({ type: "simple" })}>Simple</button>
                    <button className={`van-type simple ${typeFilter === "luxury" ? "selected" : ""}`} onClick={() => setSearchParams({ type: "luxury" })}>Luxury</button>
                    <button className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`} onClick={() => setSearchParams({ type: "rugged" })}>Rugged</button>
                    {typeFilter ? <button className='van-type clear-filters' onClick={() => setSearchParams({})}>Clear Filter</button> : null}
                </div>
                <div className="van-list">
                    {vanElements}
                </div>
            </div>
        </>
    )
}
