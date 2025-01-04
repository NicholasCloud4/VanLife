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
     * Challenge: add links to filter the vans by type. Use a hard-coded
     * `to` string like we just practiced. The types are "simple", 
     * "luxury", and "rugged".
     * 
     * For now, give the Links a className of `van-type simple` (and
     * manually replace "simple" with "luxury" and "rugged" for 
     * the Links that filter by those types.)
     * 
     * Include a Link to clear the filters. Its className should be
     * `van-type clear-filters`
     */

    return (
        <>
            <div className="van-list-container">
                <h1>Explore our van options</h1>
                <div className="van-list-filter-buttons">
                    <Link className='van-type simple' to="?type=simple">Simple</Link>
                    <Link className='van-type luxury' to="?type=luxury">Luxury</Link>
                    <Link className='van-type rugged' to="?type=rugged">Rugged</Link>
                    <Link className='van-type clear-filters' to={"."}>Clear Filter</Link>

                </div>
                <div className="van-list">
                    {vanElements}
                </div>
            </div>
        </>
    )
}
