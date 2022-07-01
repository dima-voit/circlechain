import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../layout/Layout';
import Blog from '../pages/Blog/Blog';
import Notfound from '../pages/Notfound/Notfound';
import Home from '../pages/Home/Home';
import Support from '../pages/Support/Support';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="support" element={<Support />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  )
}

export default Router;
