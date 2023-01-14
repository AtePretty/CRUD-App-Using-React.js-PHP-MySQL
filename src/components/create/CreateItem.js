import React, { useState, useEffect, useRef } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

function CreateItem() {
    const [itemName, setItemName] = useState('')
    const [foodId, setFoodId] = useState('')
    const [itemImg, setItemImg] = useState('')
    const item_name = useRef()
    const food_id = useRef()
    const item_img = useRef()

    const handleSubmit = () => {        
        if (foodId.length === 0) {
            food_id.current.value = '';
            item_name.current.value = '';
            item_img.current.value = '';
            setItemName('')
            setItemImg('')
            return false
        }

        const fData = new FormData();
        fData.append('food_id', foodId)
        itemName.length === 0 ? fData.append('item_name', '') : fData.append('item_name', itemName)
        itemImg.length === 0 ? fData.append('item_img', '') : fData.append('item_img', itemImg[0])

        Axios.post("http://localhost/Capstone/CREATE/Add_items.php", fData)
        .then(() => {
            food_id.current.value = '';
            item_name.current.value = '';
            item_img.current.value = '';
            setItemName('')
            setItemImg('')
            setFoodId('')
            window.location.href = '/admin';
        })
        .catch(error => console.error(error));
    }

    const [foods, setFoods] = useState([])
    async function getAllFoods() {
        try {
            const response = await Axios.get("http://localhost/Capstone/API/API_Food_category.php")
            setFoods(response.data.food)
        }
        catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getAllFoods()
    }, [])


    return (
        <div className='general_form up_menu'>
            <p><Link to='/admin'>Go back</Link></p>
            <form action="" method="post" encType="multipart/form-data" style={{width: '500px'}}>
                <label>
                    Food Item Name
                    <input ref={item_name} type="text" id="item_name" name="item_name" onChange={(e) => setItemName(e.target.value)} />
                </label>

                <label>
                    Image
                    <input type="file" name="item_img" accept="image/png, image/jpeg" ref={item_img} onChange={(e) => setItemImg(e.target.files)} />
                </label>

                <label>Food Category
                    <select defaultValue={''} required name='food_id' id='food_id' ref={food_id} onChange={(e) => setFoodId(e.target.value)}>
                        <option value={''} disabled>Please select</option>
                        {foods.map((food) => {
                            return (
                                <option key={food.id} value={food.id}>{food.name}</option>
                            )
                        })}
                    </select>
                </label>

                <button type="button" name='send' onClick={handleSubmit}>Insert</button>
            </form>
        </div>
    )
}

export default CreateItem