import React from 'react'

function Product({memoriesData}) {
    return (
        <div>
            <p>{memoriesData.name}</p>
     <p>{memoriesData.date}</p>
     <img src={memoriesData.photo} alt=""/>
        </div>
    )
}

export default Product
