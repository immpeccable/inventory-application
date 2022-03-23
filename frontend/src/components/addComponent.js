import React from 'react';
import '../App.css'
import { Link } from "react-router-dom"
import {useEffect, useState} from 'react';



function AddItem() {


    const [categories, setCategories] = useState([]);

    useEffect(() => {

        let isSubscribed = true;

        fetchCategories();

        async function fetchCategories(){
            let response = await fetch("http://localhost:3000/list/category");
            
            response = await response.json();
            if(isSubscribed){
                setCategories(response)
            }
        }
        return () => {
            isSubscribed = false;
        }

    }, [categories])

    function renderAllCategories() {

        console.log(categories);
        return <div className='form-item'>
            <label className='add-label' htmlFor="category">Select Category</label>
            <select className='add-input' id = "category_name" name='category_name'>
                {categories.map((el) => {
               return <option value = {el.category_name}>{el.category_name}</option>
                })}
            </select>
        </div>

    }


    return <div>
        <form>
            <div className='form-item'>
                <label className='add-label' htmlFor="component_name">Item Name</label>
                <input className='add-input' type="text" id="component_name" name="component_name"></input>
            </div>
            <div className='form-item'>
                <label className='add-label add-description' htmlFor="description">Description</label>
                <textarea className='add-input' type="text" id="description" name="description"></textarea>
            </div>
            <div className='form-item'>
                <label className='add-label' htmlFor="price">price</label>
                <input className='add-input' type="text" id="price" name="price"></input>
            </div>
            <div className='form-item'>
                <label className='add-label' htmlFor="stock">stock</label>
                <input className='add-input' type="text" id="stock" name="stock"></input>
            </div>
            {renderAllCategories()}
            <div>
                <input className='submit-button' type="submit" value="Submit" formMethod='POST' formAction='http://localhost:3000/list/component/create'></input>
            </div>
        </form>
        <Link replace to="/list">
            <button className='go-back'>Return</button>
        </Link></div>
}






export default AddItem