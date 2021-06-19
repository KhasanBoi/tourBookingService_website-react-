import React from 'react';
import './collection-item.styles.scss';

const CollectionItem = ( {id, name, price, imageUrl}) => (
    <div onBlur={(e)=>console.log('This works')} className='collection-item'>
        <div style={
            {
                backgroundImage: `url(${imageUrl})`
            }
        } 
        className='image' />
            <div key={id} className='collection-footer'>
                <span className='name'> {name} </span>
                <span className='price'> {price} </span>
            </div>
    </div>
)

export default CollectionItem;