import React from 'react';
import { useDataState } from './context';
import appetizers from '../assets/collections_images/appetizers.jpg';
import avocado from '../assets/collections_images/avocado.jpg';
import bacon from '../assets/collections_images/bacon.jpg';
import breakfast from '../assets/collections_images/breakfast.jpg';
import broccoli from '../assets/collections_images/broccoli.jpg';
import cheese from '../assets/collections_images/cheese.jpg';
import desserts from '../assets/collections_images/desserts.jpg';
import drinks from '../assets/collections_images/drinks.jpg';
import eggs from '../assets/collections_images/eggs.jpg';
import garlic from '../assets/collections_images/garlic.jpg';
import macro_friendly from '../assets/collections_images/macro_friendly.jpg';
import main_course from '../assets/collections_images/main_course.jpg';

const Collections = () => {
  return (
    <div className='collections'>
      <h1>Collections</h1>
      <div className='collections__container'>
        <Navigation />
        <CollectionsList />
      </div>
    </div>
  );
};

const Navigation = () => {
  return (
    <div className='collections__nav'>
      <div className='collections__nav__section'>
        <label className='collections__nav__section--label'>{`By Meal & Course`}</label>
        <ul className='collections__nav__section__list'>
          <li>Appetizer</li>
          <li>Breakfast</li>
          <li>Desserts</li>
          <li>Drinks</li>
          <li>Macro Friendly</li>
        </ul>
      </div>
      <div className='collections__nav__section'>
        <label className='collections__nav__section--label'>By Ingredient</label>
        <ul className='collections__nav__section__list'>
          <li>Avocado</li>
          <li>Bacon</li>
          <li>Broccoli</li>
          <li>Cheese</li>
          <li>Eggs</li>
          <li>Garlic</li>
        </ul>
      </div>
    </div>
  );
};

const CollectionsList = () => {
  // const { data } = useDataState();

  const collections_course = [
    {
      catagory: 'course',
      img: appetizers,
      title: 'Appetizers',
    },
    {
      catagory: 'course',
      img: breakfast,
      title: 'Breakfast',
    },
    {
      catagory: 'course',
      img: desserts,
      title: 'Desserts',
    },
    {
      catagory: 'course',
      img: drinks,
      title: 'Drinks',
    },
    {
      catagory: 'course',
      img: macro_friendly,
      title: 'Macro Friendly',
    },
    {
      catagory: 'course',
      img: main_course,
      title: 'Main Course',
    },
  ];

  const collections_ingredient = [
    {
      catagory: 'ingredient',
      img: avocado,
      title: 'Avocado',
    },
    {
      catagory: 'ingredient',
      img: bacon,
      title: 'Bacon',
    },
    {
      catagory: 'ingredient',
      img: broccoli,
      title: 'Broccoli',
    },
    {
      catagory: 'ingredient',
      img: cheese,
      title: 'Cheese',
    },
    {
      catagory: 'ingredient',
      img: eggs,
      title: 'Eggs',
    },
    {
      catagory: 'ingredient',
      img: garlic,
      title: 'Garlic',
    },
  ];

  return (
    <div className='collections__list'>
      {/* Collection List here
      {data?.slice(0, 1).map((comment, i) => {
        return <p>{comment.email}</p>;
      })} */}
      <h1>{`Meal & Course`}</h1>
      <div className='collections__list__container'>
        {collections_course.sort().map((collection, i) => {
          return (
            <div className='collections__list__container__column'>
              <div className='collection__list__catagory'>
                <img className='collection__list--clip-circle' src={collection.img} />
                <h2>{collection.title}</h2>
              </div>
            </div>
          );
        })}
      </div>

      <h1>Ingredient</h1>
      <div className='collections__list__container'>
        {collections_ingredient.sort().map((collection, i) => {
          return (
            <div className='collections__list__container__column'>
              <div className='collection__list__catagory'>
                <img className='collection__list--clip-circle' src={collection.img} />
                <h2>{collection.title}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Collections;
