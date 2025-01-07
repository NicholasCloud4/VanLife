import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { getVans } from '../../api'


export default function Vans() {

    const [vans, setVans] = React.useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = React.useState(false)


    let typeFilter = (searchParams.get("type"));
    console.log(typeFilter);


    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            const data = await getVans()
            setVans(data)
            setLoading(false)
        }

        loadVans()

    }, [])

    const displayedVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans

    const vanElements = displayedVans.map((van) => (
        <div key={van.id} className="van-tile">
            <Link to={van.id} state={{ search: `?${searchParams.toString()}` }}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    if (loading) {
        return <h1>Loading...</h1>
    }

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
