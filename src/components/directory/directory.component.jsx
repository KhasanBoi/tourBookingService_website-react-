import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'Family tour',
                    imagePath: 'https://safetycenter.org/upLoads/2012/07/Family_BikeRiding.jpg',
                    id: 1,
                  },
                  {
                    title: 'Mountain',
                    imagePath: 'https://i.ytimg.com/vi/C2MiSTCEeVI/maxresdefault.jpg',
                    id: 2,
                  },
                  {
                    title: 'City',
                    imagePath: 'https://images.unsplash.com/photo-1604413764976-15c29d2680ae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZSUyMHJpZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    id: 3,
                  },
                  {
                    title: 'Forest',
                    imagePath: 'https://images.unsplash.com/photo-1572852066176-6a955f944917?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJpa2UlMjByaWRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    size: 'large',
                    id: 4,
                  },
                  {
                    title: 'Countryside',
                    imagePath: 'https://images.unsplash.com/photo-1609564933309-b3d1cab24cf1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJpa2UlMjByaWRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    size: 'large',
                    id: 5,
                  }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                   this.state.sections.map( ({title, imagePath, id}) => (
                     <MenuItem key={id} imagePath={imagePath} title={title}></MenuItem>
                   ) )
                }
            </div>
        )
    }
}

export default Directory;