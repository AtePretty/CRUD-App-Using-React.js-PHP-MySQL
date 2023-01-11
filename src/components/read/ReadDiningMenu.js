import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

function ReadDiningMenu() {
    const [diningNames, setDiningNames] = useState([])
    async function getAllDiningNames() {
        try {
            const response = await Axios.get("http://localhost/Capstone/API/API_Buttons_Dining.php")
            setDiningNames(response.data.dining)
        }
        catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getAllDiningNames()
    }, [])

    const [menus, setMenus] = useState([])
    async function getAllMenuNames() {
        try {
            const response = await Axios.get("http://localhost/Capstone/API/API_Dining_class.php")
            setMenus(response.data.dining)
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
            <p><Link to='/'>Go back</Link></p>
            <h1>Dining Page</h1>
            {diningNames.map((diningName) => {
                return (
                    <button key={diningName.id} className={diningName.name}>{diningName.name}</button>
                )
            })}
            {menus.map((menu, index) => {
                return (
                    <div key={menu.id} id="menu-cards">
                        <div>
                            <img src={window.location.origin + '/uploads/' + menu.img} alt={menu.menu}/>
                        </div>
                        <h3>{menu.menu}</h3>
                        <p>{menu.description}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default ReadDiningMenu