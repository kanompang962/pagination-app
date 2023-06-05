import React from 'react'

const ListFoods = ({ foodData }) => {
    return (
        <div className='card'>
            {foodData && foodData.map((item, index) => (
                <div key={index} className='card-content'>
                    <img src={item.image_url} alt={item.name} />
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
    )
}

export default ListFoods