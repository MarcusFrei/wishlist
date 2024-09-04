import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { WishlistContext } from '../contexts/WishlistContext';
import ProductCard from '../components/ProductCard/ProductCard';
import '../App.css';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { wishlistItems } = useContext(WishlistContext);

  const currentItemIndex = wishlistItems.findIndex(
    (item) => item.id === parseInt(id)
  );

  const item = wishlistItems.find((item) => item.id === parseInt(id));

  const handleNavigation = (direction) => {
    const newIndex = currentItemIndex + direction;
    if (newIndex >= 0 && newIndex < wishlistItems.length) {
      const newItem = wishlistItems[newIndex];
      navigate(`/wishlist/${newItem.id}`);
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  if (!item) return <div>Товар не найден</div>;

  return (
    <ProductCard
      item={item}
      buttons={[
        {
          label: '◀ Назад',
          onClick: () => handleNavigation(-1),
          className: 'nav-button button',
          disabled: currentItemIndex === 0,
        },
        {
          label: 'Купить',
          onClick: () => window.open(item.productLink, '_blank'),
          className: 'buy-button button',
        },
        {
          label: 'Главная',
          onClick: handleBack,
          className: 'back-button button',
        },
        {
          label: 'Вперед ▶',
          onClick: () => handleNavigation(1),
          className: 'nav-button button',
          disabled: currentItemIndex === wishlistItems.length - 1,
        },
      ]}
      showDescription={true}
    />
  );
};

export default ProductDetail;
