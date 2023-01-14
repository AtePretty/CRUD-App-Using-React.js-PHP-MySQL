import React, { useState, useRef, useEffect } from 'react'
import Axios from 'axios'
import { Link, useLocation } from 'react-router-dom'
import './updateMenu.css'

function UpdateMenu() {
  const location = useLocation()
  
  const id_pass = location.state.menuPass

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

  let menu_id, menu_name, menu_DineId, menu_img, small_desc;

  menus.map((menu) => {
    if (menu.id === id_pass) {
      menu_id = menu.id;
      menu_name = menu.menu;
      menu_DineId = menu.dining_id;
      menu_img = menu.img;
      small_desc = menu.description
    }
  })
    
  const [menuName, setMenuName] = useState('')
  const [menuDesc, setMenuDesc] = useState('')
  const [diningId, setDiningId] = useState('')
  const [menuImg, setMenuImg] = useState('')
  const menu_name_ref = useRef()
  const desc_ref = useRef()
  const option_ref = useRef()
  const menu_img_ref = useRef()

  const handleSubmit = () => {        
    const fData = new FormData();
    fData.append('menu_id', id_pass);
    menuName === "" ? fData.append('menu_name', menu_name) : fData.append('menu_name', menuName)
    menuDesc === "" ? fData.append('small_desc', small_desc) : fData.append('small_desc', menuDesc)
    diningId === "" ? fData.append('dining_id', menu_DineId) : fData.append('dining_id', diningId)
    menuImg.length === 0 ? fData.append('menu_img', menu_img) : fData.append('menu_img', menuImg[0])    

    Axios.post("http://localhost/Capstone/UPDATE/Edit_menu_names.php", fData)
    .then(() => {
      option_ref.current.value = '';
      menu_name_ref.current.value = '';
      desc_ref.current.value = '';
      menu_img_ref.current.value = '';
      setMenuName('')
      setMenuDesc('')
      setMenuImg('')
      setDiningId('')
      window.location.href = '/admin';
    })
    .catch(error => console.error(error));
  }

  const deleteButton = () => {
    const fData = new FormData();
    fData.append('menu_id', id_pass)
    Axios.post("http://localhost/Capstone/DELETE/Delete_menu_names.php", fData)
    .then(() => {
      window.location.href = '/admin';
    })
    .catch(error => console.error(error));
  }

  const [allName, setAllNames] = useState([])
  async function getAllNames() {
    try {
      const response = await Axios.get("http://localhost/Capstone/API/API_Buttons_Dining.php")
      setAllNames(response.data.dining)
    }
    catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getAllNames()
  }, [])

  return (
    <div className='general_form up_dining up_menu'>
      <p><Link to='/admin'>Back to Admin</Link></p>
      <form key={menu_id} action="" method="post" encType="multipart/form-data">
              <label>Menu Name
                <input ref={menu_name_ref} type="text" id="menu_name" defaultValue={menu_name} name="menu_name" onChange={(e) => setMenuName(e.target.value)} />
              </label>
              <label>Small Description
                <textarea ref={desc_ref} id="small_desc" defaultValue={small_desc} name="small_desc" onChange={(e) => setMenuDesc(e.target.value)}></textarea>
              </label>
              <label>Image
                <input type="file" name="menu_img" accept="image/png, image/jpeg" ref={menu_img_ref} onChange={(e) => setMenuImg(e.target.files)} />
              </label>
              <label>Dining Category
                <select defaultValue={menu_DineId} required name='dining_id' id='dining_id' ref={option_ref} onChange={(e) => setDiningId(e.target.value)}>
                  <option value={''} disabled>Please select</option>
                    {allName.map((dining) => {
                      return (
                        <option key={dining.id} value={dining.id}>{dining.name}</option>
                      )
                  })}
                </select>
              </label>
              <div className='editDelete'>
                <button type="button" name='send' onClick={handleSubmit}>Update</button>
                <button type="button" name='delete' onClick={deleteButton}>Delete</button>
              </div>
            </form>
    </div>
  )
}

export default UpdateMenu