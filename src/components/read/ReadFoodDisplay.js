import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link, useLocation } from 'react-router-dom'
import './ReadDiningMenu.css'

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
        <div>
            <p><Link to='/user'>Go back</Link></p>
            {menus.map((menu) => {
                if (menu.menu_id === menu_pass) {
                    return (
                        <div key={menu.menu_id}>
                            <h1>Menu Name: {menu.menu_name}</h1>
                            <p>Description: {menu.menu_desc}</p>
                            {menu.menu_food.map((food) => {
                                return (
                                    <div key={food.food_id}>
                                        <h2>{food.food_name}</h2>
                                        {food.food_item.map((item) => {
                                            return (
                                                <div key={item.item_id}>
                                                {/* 
                                                    This is connected to the bug I found in the API_Fodd_class.php,
                                                    the data in $itemArray is duplicated. I still haven't found the
                                                    bug yet.
                                                */}
                                                    <img src={window.location.origin + '/uploads/' + item.item_img} alt="item.item_name" />
                                                    <p>{item.item_name}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    ) 
                }
            })}
        </div>
    )
}
export default ReadFoodDisplay