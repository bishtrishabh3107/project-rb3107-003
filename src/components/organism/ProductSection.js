import React from 'react';
import ElectronicsCategoryProducts from '../organ/CategoriesSection/ElectronicsCategoryProducts';
import GiftsCategoryProducts from '../organ/CategoriesSection/GiftsCategoryProducts';
import HomeAndDecorCategoryProducts from '../organ/CategoriesSection/HomeAndDecorCategoryProducts';
import NewAgeDevicesCategoryProducts from '../organ/CategoriesSection/NewAgeDevicesCategoryProducts';
import OfficeCategoryProducts from '../organ/CategoriesSection/OfficeCategoryProducts';

function ProductSection() {
  return (
    <div>
      <NewAgeDevicesCategoryProducts />
      <ElectronicsCategoryProducts />
      <HomeAndDecorCategoryProducts />
      <GiftsCategoryProducts />
      <OfficeCategoryProducts />
    </div>
  );
}

export default ProductSection;
