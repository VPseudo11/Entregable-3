import React from 'react'

const Location = ({ location }) => {
    return (
        <article>
            <div>
                <h2>{location.name}</h2>
            </div>
            <div>
                <p>{location.type}</p>
                <p>{location.dimension}</p>
                <p>{location.residents.length}</p>
            </div>
        </article>

    )
}

export default Location