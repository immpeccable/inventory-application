import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css'
import { Navigate, Link } from "react-router-dom"

function Category(props) {


    const { category_name, description, category_id } = props;

    return <div className='item'>

        <div className='category-name'>
            {category_name}
        </div>
        <div className='description'>
            {description}
        </div>
        <Link to = {"category/"+ category_id}>
            <button className='choose-button'>
                Choose Item
            </button>
        </Link>
        
        <form>
            <input className='category-delete-button' type="submit" value="Delete" formMethod='POST' formAction= {'http://localhost:3000/list/category/' + category_id + "/delete"} ></input>
        </form>
        
    </div>

}

export default Category