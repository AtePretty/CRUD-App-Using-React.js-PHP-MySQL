import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import './ReadDiningMenu.css'
import Footer from '../Footer'

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
        <div className='dining_page'>
            <p><Link to='/'>Go back</Link></p>
            <h1>Dining</h1>
            <div className='nav_dining'>
                <button className={active === "0" ? "active" : ""} onClick={() => setActive("0")}>All</button>
                {diningNames.map((diningName) => {
                    return (
                        <button key={diningName.id} className={active === diningName.id ? "active" : ""} onClick={() => setActive(diningName.id)}>{diningName.name}</button>
                    )
                })}
            </div>
            <div className='menu_container'>
                <div className='menu_cards'>
                    {filter.map((menu, index) => {
                        return (
                            <div key={menu.id} className={active === menu.dining ? "active menu_card" : "menu_card"} onClick={() => setActive(menu.dining)} >
                                <Link to="/user-menu" state={{menuPass: menu.id}}>
                                    <div className='menu_img'>
                                        <img src={window.location.origin + '/uploads/' + menu.img} alt={menu.menu}/>
                                    </div>
                                    <div className='menu_text'>
                                        <h3>{menu.menu}</h3>
                                        <p>{menu.description}</p>
                                        <button>Learn More</button>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default ReadDiningMenu