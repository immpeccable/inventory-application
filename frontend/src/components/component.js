import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css'

function Item(props){


    let {category_name, description} = props;

    return <div className='item'>

        <div className='category-name'>
            {category_name}
        </div>
        <div className='description'>
            {description}
        </div>
        <button className='choose-button'>
            Choose Item
        </button>
    </div>

}

export default Item