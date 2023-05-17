import React from 'react'

const Main = (props) => {
    return (
        <>
            <div class="card main">
                <img src={props.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.head}</h5>
                    <p class="card-text">{props.price}</p>
                </div>
            </div>
        </>
    )
}

export default Main
