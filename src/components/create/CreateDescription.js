import React, { useState, useEffect, useRef } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

function CreateDescription() {
    const [desc, setDesc] = useState('')
    const [menuId, setMenuId] = useState('')
    const desc_ref = useRef()
    const menu_id = useRef()

    const handleSubmit = () => {        
        if (menuId.length === 0) {
            menu_id.current.value = '';
            desc_ref.current.value = '';
            setMenuId('')
            setDesc('')
            return false
        }

        const fData = new FormData();
        fData.append('menu_id', menuId)
        desc.length === 0 ? fData.append('desc', '') : fData.append('desc', desc)

        Axios.post("http://localhost/Capstone/CREATE/Add_description.php", fData)
        .then(() => {
            menu_id.current.value = '';
            desc_ref.current.value = '';
            setMenuId('')
            setDesc('')
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
        <div>
            <p><Link to='/admin'>Go back</Link></p>
            <form action="" method="post">
                <label style={{margin: '0 0 10px', display: 'block'}}>Description <input ref={desc_ref} style={{width: '100%'}} type="text" id="food_name" name="food_name" onChange={(e) => setDesc(e.target.value)} /></label>
                

                <select defaultValue={''} required name='menu_id' id='menu_id' ref={menu_id} onChange={(e) => setMenuId(e.target.value)}>
                    <option value={''} disabled>Please select</option>
                    {menus.map((menu) => {
                        return (
                            <option key={menu.id} value={menu.id}>{menu.menu}</option>
                        )
                    })}
                </select>

                <input style={{padding: '5px 15px'}} type="button" name='send' value="send" onClick={handleSubmit} />
            </form>
        </div>
    )
}

export default CreateDescription