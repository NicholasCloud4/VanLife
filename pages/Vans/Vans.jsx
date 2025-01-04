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
     * Challenge: change the Links to buttons and use the
     * setSearchParams function to set the search params
     * when the buttons are clicked. Keep all the classNames
     * the same.
     */

    return (
        <>
            <div className="van-list-container">
                <h1>Explore our van options</h1>
                <div className="van-list-filter-buttons">
                    <button className='van-type simple' onClick={() => setSearchParams({ type: "simple" })}>Simple</button>
                    <button className='van-type luxury' onClick={() => setSearchParams({ type: "luxury" })}>Luxury</button>
                    <button className='van-type rugged' onClick={() => setSearchParams({ type: "rugged" })}>Rugged</button>
                    <button className='van-type clear-filters' onClick={() => setSearchParams({})}>Clear Filter</button>
                </div>
                <div className="van-list">
                    {vanElements}
                </div>
            </div>
        </>
    )
}
