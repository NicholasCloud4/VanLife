import React from "react"
import { useParams, Link, Outlet, NavLink } from "react-router-dom"

export default function HostVanDetail() {

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    const { id } = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)


    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [])

    if (!currentVan) {
        return <h1>Loading...</h1>
    }


    return (
        <section>

            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>

                <nav className="host-van-detail-nav">
                    {/* Your links go here */}
                    <NavLink to="." end style={({ isActive }) => isActive ? activeStyles : undefined}>Details</NavLink>
                    <NavLink to="pricing" style={({ isActive }) => isActive ? activeStyles : undefined}>Pricing</NavLink>
                    <NavLink to="photos" style={({ isActive }) => isActive ? activeStyles : undefined}>Photos</NavLink>
                </nav>

                <Outlet context={{ currentVan }} />
            </div>
        </section>
    )
}

/**
     * Challenge: check out the docs linked in the slide, and see if you
     * can implement the Outlet Context feature it talks about.
     * 
     * Part of this challenge will require you to (finally) build out those
     * nested components. Again, if you don't need CSS practice, you can
     * skip the styling part, and I'll handle that for you.
     */
