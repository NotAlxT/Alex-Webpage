import React from 'react'
import '../loader/loader.css'

export default function Loader() {
    return (
        <div className="loader">
            <div className="face">
                <div className="circleLoader"></div>
            </div>
            <div className="face">
                <div className="circleLoader"></div>
            </div>
        </div>
    )
}
