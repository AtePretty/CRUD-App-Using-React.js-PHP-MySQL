import React, { useState, useRef } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import './CreateDining.css'

function CreateDining() {
    const [diningName, setDiningName] = useState('')
    const dining_name_ref = useRef()

    const handleSubmit = () => {
        if (diningName.length === 0) {
            return false
        }
        const fData = new FormData();
        fData.append('dining_name', diningName)
        Axios.post("http://localhost/Capstone/CREATE/Add_dining_names.php", fData)
        .then(() => {
            dining_name_ref.current.value = null
            setDiningName('')
        })
        .catch(error => console.error(error));
    }

    return (
        <div className='general_form'>
            <p><Link to='/admin'>Back to Admin</Link></p>
            <form action="" method="post">
                <label>Dining Name <input ref={dining_name_ref} type="text" id="dining_name" name="dining_name" onChange={(e) => setDiningName(e.target.value)} /></label>
                <button type="button" name='send' onClick={handleSubmit}>Insert</button>
            </form>
        </div>
    )
}

export default CreateDining