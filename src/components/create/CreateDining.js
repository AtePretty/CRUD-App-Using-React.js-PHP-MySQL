import React, { useState, useRef } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

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
        <div>
            <p><Link to='/admin'>Go back</Link></p>
            <p></p>
            <form action="" method="post">
                <label style={{margin: '0 0 10px', display: 'block'}}>Dining Name <input ref={dining_name_ref} style={{width: '100%'}} type="text" id="dining_name" name="dining_name" onChange={(e) => setDiningName(e.target.value)} /></label>
                 <br />
                <input style={{padding: '5px 15px'}} type="button" name='send' value="send" onClick={handleSubmit} />
            </form>
        </div>
    )
}

export default CreateDining