import React, { useState, useEffect, useRef } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

function CreateFood() {
    const [foodName, setFoodName] = useState('')
    const [menuId, setMenuId] = useState('')
    const food_name = useRef()
    const menu_id = useRef()

    const handleSubmit = () => {        
        if (menuId.length === 0) {
            menu_id.current.value = '';
            food_name.current.value = '';
            setMenuId('')
            setFoodName('')
            return false
        }

        const fData = new FormData();
        fData.append('menu_id', menuId)
        foodName.length === 0 ? fData.append('food_name', '') : fData.append('food_name', foodName)

        Axios.post("http://localhost/Capstone/CREATE/Add_food_names.php", fData)
        .then(() => {
            menu_id.current.value = '';
            food_name.current.value = '';
            setMenuId('')
            setFoodName('')
            window.location.href = '/admin';
        })
        .catch(error => console.error(error));
    }

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
        <div className='general_form up_menu'>
            <p><Link to='/admin'>Go back</Link></p>
            <form action="" method="post" style={{width: '500px'}}>
                <label>Food Name <input ref={food_name} type="text" id="food_name" name="food_name" onChange={(e) => setFoodName(e.target.value)} /></label>
                
                <label>Menu Category
                    <select defaultValue={''} required name='menu_id' id='menu_id' ref={menu_id} onChange={(e) => setMenuId(e.target.value)}>
                        <option value={''} disabled>Please select</option>
                        {menus.map((menu) => {
                            return (
                                <option key={menu.id} value={menu.id}>{menu.menu}</option>
                            )
                        })}
                    </select>
                </label>

                <button type="button" name='send' onClick={handleSubmit}>Insert</button>
            </form>
        </div>
    )
}

export default CreateFood