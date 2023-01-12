import React from 'react'
import { Link } from 'react-router-dom'

function Admin() {
  return (
    <div>
      <p><Link to='/'>Go back</Link></p>
      <p><Link to='/admin-add-dining'>Add More Dining Name</Link></p>
      <p><Link to='/admin-add-menu'>Add More Menu</Link></p>
      <p><Link to='/admin-add-food'>Add More Food</Link></p>
      <p><Link to='/admin-add-desc'>Add Description</Link></p>
      <p><Link to='/admin-add-item'>Add Food Items</Link></p>
    </div>
  )
}

export default Admin