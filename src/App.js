import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";

import CreateDining from './components/create/CreateDining';
import CreateMenu from './components/create/CreateMenu';
import CreateFood from './components/create/CreateFood';

import UpdateDining from './components/update/UpdateDining';
import UpdateMenu from './components/update/UpdateMenu';
import UpdateFood from './components/update/UpdateFood';

import ReadDiningMenu from './components/read/ReadDiningMenu';

import Admin from './components/Admin';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user' element={<ReadDiningMenu/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/admin-add-dining' element={<CreateDining/>}/>
        <Route path='/admin-edit-dining' element={<UpdateDining/>}/>
        <Route path='/admin-add-menu' element={<CreateMenu/>}/>
        <Route path='/admin-edit-menu' element={<UpdateMenu/>}/>
        <Route path='/admin-add-food' element={<CreateFood/>}/>
        <Route path='/admin-edit-food' element={<UpdateFood/>}/>
      </Routes>
    </div>
  )
}

export default App