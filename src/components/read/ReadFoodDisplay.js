import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link, useLocation } from 'react-router-dom'
import './ReadDiningMenu.css'
import Hero from '../jsx/Hero'
import './ReadFoodDisplay.css'

function ReadFoodDisplay() {
    const location = useLocation()

    const menu_pass = location.state.menuPass

    const [menus, setMenus] = useState([])
    async function getAllMenuNames() {
        try {
            const response = await Axios.get("http://localhost/Capstone/API/API_Food_class.php")
            setMenus(response.data.menu)
        }
        catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getAllMenuNames()
    }, [])

    return (
        <div className='dining_page food_menu'>
        <div className='width_allowed'>
            <Hero/>
            {menus.map((menu) => {
                if (menu.menu_id === menu_pass) {
                    return (
                        <div className='mainNiMenu' key={menu.menu_id}>
                            <p className='backLink'><Link to='/user'>Go back</Link></p>
                            <h1>{menu.menu_name}</h1>
                            <div className='separation'>
                            <div  className='description'>
                                <p>{menu.menu_desc}</p>
                            </div>
                            <div>
                            {menu.menu_food.map((food) => {
                                return (
                                    <div className='MenuList' key={food.food_id}>
                                        <h2>{food.food_name}</h2>
                                        <div className='imageLahat'>
                                        {food.food_item.map((item) => {
                                            return (
                                                <div key={item.item_id}>
                                                {/* 
                                                    This is connected to the bug I found in the API_Food_class.php,
                                                    the data in $itemArray is duplicated. I still haven't found the
                                                    bug yet.
                                                */}
                                                <div className='itemImage'>
                                                    <img src={window.location.origin + '/uploads/' + item.item_img} alt="item.item_name" /></div>
                                                    <p>{item.item_name}</p>
                                                </div>
                                            )
                                        })}
                                        </div>
                                    </div>
                                )
                            })}
                            </div>
                            </div>
                        </div>
                    ) 
                }
            })}
        </div>
        </div>
    )
}
export default ReadFoodDisplay