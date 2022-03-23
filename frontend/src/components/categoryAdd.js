import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css'
import { Navigate, Link } from "react-router-dom"


function AddCategory() {


    return <div>
        <form>
            <div className='form-item'>
                <label className='add-label' htmlFor="category_name">Category Name</label>
                <input className='add-input' type="text" id="category_name" name="category_name"></input>
            </div>
            <div className='form-item'>
                <label className='add-label add-description' htmlFor="description">Description</label>
                <textarea className='add-input' type="text" id="description" name="description"></textarea>
            </div>
            <div>
                <input className='submit-button' type="submit" value="Submit" formMethod='POST' formAction='http://localhost:3000/list/category/create'></input>
            </div>
        </form>
        <Link replace to="/list">
            <button className='go-back'>Return</button>
        </Link></div>
}






export default AddCategory