import React from 'react';
import './shop.styles.scss';
import ShopData from './shop.data';
import Collection from '../../collection/collection.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: ShopData
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'  >
                {
                    collections.map( ( {id, ...rest} ) => (
                        <Collection key={id} {...rest}></Collection>
                    ))
                }
                
            </div>
        )
    }
}

export default ShopPage;
