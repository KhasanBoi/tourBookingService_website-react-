import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({title ,imagePath, size}) => (
        <div  style= {
            {
                backgroundImage: `url(${imagePath})`
            }
        }
        className = {`${size} menu-item`}>
                <div className='content'>
                    <h1 className='title'>{title}</h1>
                    <span className='subtitle'>Book now</span>
                </div>
            </div>
);

export default MenuItem;