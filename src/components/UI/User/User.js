import React from 'react';
import './User.css';

const User = props => (
    <div className='User'>
        <p className="Text">{props.text}</p>
            <div className='DropDown'>
                {props.items.map(item => <p>{item}</p>)}
            </div>
    </div>
)

export default User;