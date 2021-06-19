import React from 'react';
import './collection.styles.scss';

import CollectionItem from './collection-item.component';

const Collection = ( {title, items} ) => (
    <div className='collection-preview'>
        <h1 className='title'> {title.toUpperCase()} </h1>
        <div className='preview'>
            {
                items.filter( (element,index) => index<4).map( ({id, ...rest}) => (
                    <CollectionItem key={id} {...rest} />
                ))
            }
        </div>
    </div>
)

export default Collection;