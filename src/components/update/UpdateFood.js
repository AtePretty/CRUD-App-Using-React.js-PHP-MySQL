import React, { useState, useRef, useEffect } from 'react'
import Axios from 'axios'
import { Link, useLocation } from 'react-router-dom'
import '../create/CreateDining.css'
import './UpdateDining.css'

function UpdateFood() {
  const location = useLocation()

  const id_pass = location.state.foodPass

  const [foods, setFoods] = useState([])
  async function getAllFood() {
    try {
      const response = await Axios.get("http://localhost/Capstone/API/API_Food_Lists.php")
      setFoods(response.data.food)
    }
    catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getAllFood()
  }, [])

  let food_id, food_name, food_MenuId;

  foods.map((food) => {
    if (food.id === id_pass) {
      food_id = food.id;
      food_name = food.name;
      food_MenuId = food.menu_id;
    }
  })  

  const [foodName, setFoodName] = useState('')
  const [menuId, setMenuId] = useState('')
  const food_name_ref = useRef()
  const menu_id_ref = useRef()

  const handleSubmit = () => {
    const fData = new FormData();
    fData.append('food_id', id_pass)
    foodName === "" ? fData.append('food_name', food_name) : fData.append('food_name', foodName)
    menuId === "" ? fData.append('menu_id', food_MenuId) : fData.append('menu_id', menuId)
    
    Axios.post("http://localhost/Capstone/UPDATE/Edit_food_names.php", fData)
    .then(() => {
      food_name_ref.current.value = null
      menu_id_ref.current.value = null
      setFoodName('')
      setMenuId('')
      window.location.href = '/admin';
    })
    .catch(error => console.error(error));
  }

  const deleteButton = () => {
    const fData = new FormData();
    fData.append('food_id', id_pass)
    Axios.post("http://localhost/Capstone/DELETE/Delete_food_names.php", fData)
    .then(() => {
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
    <div className='general_form up_menu up_dining'>
      <p><Link to='/admin'>Back to Admin</Link></p>
      <form action="" key={food_id} method="post" style={{width: '500px'}}>
        <label>Food Name <input ref={food_name_ref} type="text" id="food_name" name="food_name" defaultValue={food_name} onChange={(e) => setFoodName(e.target.value)} /></label>
        <label>Dining Category
          <select defaultValue={food_MenuId} required name='menu_id' id='menu_id' ref={menu_id_ref} onChange={(e) => setMenuId(e.target.value)}>
            <option value={''} disabled>Please select</option>
            {menus.map((menu) => {
              return (
                <option key={menu.id} value={menu.id}>{menu.menu}</option>
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
export default UpdateFood


/*
There is a bug in here.
Displaying the current menu_id is not correct.
Most of the time, it prints the first option available.
However, when you update the data without changing anything,
though the menu_id displayed is not correct. All data,
will remain the same.

The bug is deeply hidden, it could have been just the
time delay in the browser.
*/