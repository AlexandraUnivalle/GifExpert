import React from 'react'

export const GiftGridItem = ( {id, title, url} ) => {
    //console.log(id, title, url)
    return (
        <div className ="card animate__animated animate__animate__fadeIn"  >
            { /*img.title */}
            <img id={id}  src={ url } alt = {title} />
            <p> { title }</p>
        </div>
    )
}
