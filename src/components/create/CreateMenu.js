import React, { useState, useEffect, useRef } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

function CreateMenu() {
    const [menuName, setMenuName] = useState('')
    const [menuDesc, setMenuDesc] = useState('')
    const [diningId, setDiningId] = useState('')
    const [menuImg, setMenuImg] = useState('')
    const menu_name_ref = useRef()
    const desc_ref = useRef()
    const option_ref = useRef()
    const menu_img_ref = useRef()

    const handleSubmit = () => {        
        if (diningId.length === 0) {
            option_ref.current.value = '';
            menu_name_ref.current.value = '';
            desc_ref.current.value = '';
            menu_img_ref.current.value = '';
            setMenuName('')
            setMenuDesc('')
            setMenuImg('')
            return false
        }

        const fData = new FormData();
        fData.append('dining_id', diningId)
        menuName.length === 0 ? fData.append('menu_name', '') : fData.append('menu_name', menuName)
        menuDesc.length === 0 ? fData.append('small_desc', '') : fData.append('small_desc', menuDesc)
        menuImg.length === 0 ? fData.append('menu_img', '') : fData.append('menu_img', menuImg[0])

        Axios.post("http://localhost/Capstone/CREATE/Add_menu_names.php", fData)
        .then(() => {
            option_ref.current.value = '';
            menu_name_ref.current.value = '';
            desc_ref.current.value = '';
            menu_img_ref.current.value = '';
            setMenuName('')
            setMenuDesc('')
            setMenuImg('')
            setDiningId('')
        })
        .catch(error => console.error(error));
    }

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


    return (
        <div>
            <p><Link to='/admin'>Go back</Link></p>
            <form action="" method="post" encType="multipart/form-data">
                <label style={{ margin: '0 0 10px', display: 'block' }}>
                    Menu Name
                    <input ref={menu_name_ref} style={{width: '100%'}} type="text" id="menu_name" name="menu_name" onChange={(e) => setMenuName(e.target.value)} />
                </label>

                <label style={{ margin: '0 0 10px', display: 'block' }}>
                    Small Description
                    {/* <input ref={desc_ref} style={{width: '100%'}} type="text" id="small_desc" name="small_desc" onChange={(e) => setMenuDesc(e.target.value)} /> */}
                    <textarea ref={desc_ref} style={{width: '100%'}} id="small_desc" name="small_desc" onChange={(e) => setMenuDesc(e.target.value)}></textarea>
                </label>

                <label style={{ margin: '0 0 10px', display: 'block' }}>
                    Image
                    <input style={{width: '100%'}} type="file"name="menu_img" accept="image/png, image/jpeg" ref={menu_img_ref} onChange={(e) => setMenuImg(e.target.files)} />
                </label>

                <select defaultValue={''} required name='dining_id' id='dining_id' ref={option_ref} onChange={(e) => setDiningId(e.target.value)}>
                    <option value={''} disabled>Please select</option>
                    {diningNames.map((diningName) => {
                        return (
                            <option key={diningName.id} value={diningName.id}>{diningName.name}</option>
                        )
                    })}
                </select>

                <input style={{padding: '5px 15px'}} type="button" name='send' value="send" onClick={handleSubmit} />
            </form>
        </div>
    )
}

export default CreateMenu