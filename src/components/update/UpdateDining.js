import React, { useState, useRef, useEffect } from 'react'
import Axios from 'axios'
import { Link, useLocation } from 'react-router-dom'
import '../create/CreateDining.css'
import './UpdateDining.css'

function UpdateDining() {
    const location = useLocation()

    const id_pass = location.state.diningPass

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

    const [diningName, setDiningName] = useState('')
    const dining_name_ref = useRef()

    const handleSubmit = () => {
        console.log("click")
        if (diningName.length === 0) {
            return false
        }
        const fData = new FormData();
        fData.append('dining_name', diningName)
        fData.append('dining_id', id_pass)
        Axios.post("http://localhost/Capstone/UPDATE/Edit_dining_names.php", fData)
        .then(() => {
            dining_name_ref.current.value = null
            setDiningName('')
            window.location.href = '/admin';
        })
        .catch(error => console.error(error));
    }

    const deleteButton = () => {
        const fData = new FormData();
        fData.append('dining_id', id_pass)
        Axios.post("http://localhost/Capstone/DELETE/Delete_dining_names.php", fData)
        .then(() => {
            window.location.href = '/admin';
        })
        .catch(error => console.error(error));
    }


    return (
        <div className='general_form up_dining'>
            <p><Link to='/admin'>Back to Admin</Link></p>
            {allName.map((dining) => {
                if (id_pass === dining.id) {
                    return (
                        <form key={dining.id} action="" method="post">
                            <label>Dining Name <input ref={dining_name_ref} type="text" id="dining_name" name="dining_name" defaultValue={dining.name} onChange={(e) => setDiningName(e.target.value)} /></label>
                            <div className='editDelete'>
                                <button type="button" name='send' onClick={handleSubmit}>Update</button>
                                <button type="button" name='delete' onClick={deleteButton}>Delete</button>
                            </div>
                        </form>
                    )
                }
            })}
            
        </div>
    )
}

export default UpdateDining