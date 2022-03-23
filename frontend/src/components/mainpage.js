import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../App.css'
import { useState } from 'react';
import Category from './Category'
import DisplayItems from './itemsPage'


let Main = () => {

    let [component, setComponent] = useState([])
    let [page, setPage] = useState("Main");

    useEffect(() => {

        fetchComponent();
        async function fetchComponent() {
            let response = await fetch("http://localhost:3000/list/category");
            response = await response.json();
            setComponent(response);
        }
        //return {setComponent([])}
    }, [component])

    function componentWrite() {
        //console.log(component);
        return component.map((el) => {
            return <Category category_name={el.category_name} description={el.description} category_id = {el._id} ></Category>
        })
    }


    return <div className='main'>
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
    </div>
}

export default Main