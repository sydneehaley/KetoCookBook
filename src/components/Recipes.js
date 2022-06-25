import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Collections from './Collections';

const Recipes = () => {
  return (
    <div className='home__container'>
      <Collections />
    </div>
  );
};

export default Recipes;
