import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import './ReadDiningMenu.css'

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
    const [filter, setFilter] = useState([])
    async function getAllMenuNames() {
        try {
            const response = await Axios.get("http://localhost/Capstone/API/API_Dining_class.php")
            setMenus(response.data.dining)
            setFilter(response.data.dining)
        }
        catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getAllMenuNames()
    }, [])

    const [active, setActive] = useState("0")
    function filterMenus() {
      if(active === "0") {
        setFilter(menus)
        return
      }
      const filtered = menus.filter((menu) => menu.dining_id === active);
      setFilter(filtered)
    }
    useEffect(() => {
        filterMenus();
    }, [active])

    return (
        <div>
            <p><Link to='/'>Go back</Link></p>
            <h1>Dining Page</h1>
            <button className={active === "0" ? "active" : ""} onClick={() => setActive("0")}>All</button>
            {diningNames.map((diningName) => {
                return (
                    <button key={diningName.id} className={active === diningName.id ? "active" : ""} onClick={() => setActive(diningName.id)}>{diningName.name}</button>
                )
            })}
            {filter.map((menu, index) => {
                return (
                    <div key={menu.id} className={active === menu.dining ? "active" : ""} onClick={() => setActive(menu.dining)}>
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