import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../App.css'
import { useState } from 'react';
import Category from './Category'
import DisplayItems from './itemsPage'
import {Link} from "react-router-dom"


let Main = () => {

    let [component, setComponent] = useState([])

    useEffect(() => {

        let isSubscribed = true;
        fetchComponent();

        fetchComponent();
        async function fetchComponent() {
            let response = await fetch("http://localhost:3000/list/category");
            response = await response.json();
            if (isSubscribed) {
                setComponent(response);
            }
        }
        return () => {
            isSubscribed = false;
        }
    }, [component])

    function componentWrite() {
        //console.log(component);
        return component.map((el) => {
            return <Category category_name={el.category_name} description={el.description} category_id={el._id} ></Category>
        })
    }


    return <div>
        <div className='main'>
            <div className='item first'>
                <div className='category-name'>
                    Category Name
                </div>
                <div className='description'>
                    Description
                </div>
                <div>
                    Choose Item
                </div>
                
            </div>
            {componentWrite()}
            <Link replace to= "category/create/add">
                <button className='add-category'>
                    Add Category
                </button>
            </Link>

        </div>

    </div>

}

export default Main