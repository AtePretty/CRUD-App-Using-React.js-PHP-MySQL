import React, { useState, useRef, useEffect } from 'react'
import Axios from 'axios'
import { Link, useLocation } from 'react-router-dom'
import '../create/CreateDining.css'
import './UpdateDining.css'

function UpdateItem() {
  const location = useLocation()

  const id_pass = location.state.itemPass

  const [item, setItem] = useState([])
    async function getAllItem() {
        try {
            const response = await Axios.get("http://localhost/Capstone/API/API_Food_Item.php")
            setItem(response.data.item)
        }
        catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
      getAllItem()
    }, [])

  let item_id, item_name, item_img, item_FoodId;

  item.map((item) => {
    if (item.id === id_pass) {
      item_id = item.id;
      item_name = item.name;
      item_img = item.img;
      item_FoodId = item.food_id;
    }
  })  

  const [itemName, setItemName] = useState('')
  const [itemImg, setItemImg] = useState('')
  const [foodId, setFoodId] = useState('')
  const item_name_ref = useRef()
  const item_img_ref = useRef()
  const food_id_ref = useRef()

  const handleSubmit = () => {
    const fData = new FormData();
    fData.append('item_id', id_pass)
    itemName === "" ? fData.append('item_name', item_name) : fData.append('item_name', itemName)
    foodId === "" ? fData.append('food_id', item_FoodId) : fData.append('food_id', foodId)
    itemImg.length === 0 ? fData.append('item_img', item_img) : fData.append('item_img', itemImg[0])

    console.log(fData)
    
    Axios.post("http://localhost/Capstone/UPDATE/Edit_item_names.php", fData)
    .then(() => {
      item_name_ref.current.value = null
      item_img_ref.current.value = null
      food_id_ref.current.value = null
      setItemName('')
      setItemImg('');
      setFoodId('')
      console.log(fData)
      window.location.href = '/admin';
    })
    .catch(error => console.error(error));
  }

  const deleteButton = () => {
    const fData = new FormData();
    fData.append('item_id', id_pass)
    Axios.post("http://localhost/Capstone/DELETE/Delete_item_names.php", fData)
    .then(() => {
      window.location.href = '/admin';
    })
    .catch(error => console.error(error));
  }

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

  return (
    <div className='general_form up_menu up_dining'>
      <p><Link to='/admin'>Back to Admin</Link></p>
      <form action="" key={item_id} method="post" style={{width: '500px'}}>
        <label>Food Item Name <input ref={item_name_ref} type="text" id="item_name" name="item_name" defaultValue={item_name} onChange={(e) => setItemName(e.target.value)} /></label>
        <label>Image
                <input type="file" name="item_img" accept="image/png, image/jpeg" ref={item_img_ref} onChange={(e) => setItemImg(e.target.files)} />
              </label>
        <label>Food Type
          <select defaultValue={item_FoodId} required name='food_id' id='food_id' ref={food_id_ref} onChange={(e) => setFoodId(e.target.value)}>
            <option value={''} disabled>Please select</option>
            {foods.map((food) => {
              return (
                <option key={food.id} value={food.id}>{food.name}</option>
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
export default UpdateItem