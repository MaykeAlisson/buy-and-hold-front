import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Painel from './pages/painel'
import Assert from './pages/assert'
import Launch from './pages/launch'

export default () => (
    <Routes>
        <Route path='/' exact element={<Painel />} />
        <Route path='/assert' exact element={<Assert />} />
        <Route path='/launch' exact element={<Launch />} />
        <Route path='/*' element={<Painel/>}/>
    </Routes>
);