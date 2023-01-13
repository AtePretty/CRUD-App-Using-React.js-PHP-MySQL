import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import './Admin.css'

function Admin() {
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
    <div className='admin_page'>
      <p><Link to='/'>Go back</Link></p>
      <h1>ADMINISTRATOR</h1>
      <div className='general_list'>
        <h2>List of All Dining Names</h2>
        <Link to='/admin-add-dining'>INSERT</Link>
        <table>
          <thead>
            <tr>
              <th>dining_name</th>
              <th>UPDATE</th>
            </tr>
          </thead>
          <tbody>
          {diningNames.map((diningName) => {
            return (
              <tr key={diningName.id}>
                <td>{diningName.name}</td>
                <td><Link to='/admin-edit-dining' state={{diningPass: diningName.id}}>Edit</Link></td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
      <div className='general_list'>
        <h2>List of All Menus</h2>
        <Link to='/admin-add-menu'>INSERT</Link>
        <table>
          <thead>
            <tr>
              <th>menu_name</th>
              <th>dining_name</th>
              <th>UPDATE</th>
            </tr>
          </thead>
          <tbody>
          {menus.map((menu) => {
            return (
              <tr key={menu.id}>
                <td>{menu.menu}</td>
                <td>{menu.dining}</td>
                <td><Link to='/admin-edit-menu' state={{menuPass: menu.id}}>Edit</Link></td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
      <p><Link to='/admin-add-food'>Add More Food</Link></p>
      <p><Link to='/admin-add-desc'>Add Description</Link></p>
      <p><Link to='/admin-add-item'>Add Food Items</Link></p>
    </div>
  )
}

export default Admin