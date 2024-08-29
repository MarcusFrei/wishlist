import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { WishlistContext } from '../contexts/WishlistContext';
import '../App.css';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { wishlistItems } = useContext(WishlistContext);

  const currentItemIndex = wishlistItems.findIndex(
    (item) => item.id === parseInt(id)
  );
  const item = wishlistItems[currentItemIndex];

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
    <div className="product-detail">
      <div className="product-detail-content">
        <img src={item.imageUrl} alt={item.name} />
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <p>Цена: ${item.price}</p>
        <div className="buttons-block">
          <button
            className="nav-button"
            onClick={() => handleNavigation(-1)}
            disabled={currentItemIndex === 0}
          >
            &#9664; Назад
          </button>
          <a href={item.productLink} target="_blank" rel="noopener noreferrer">
            Купить
          </a>
          <a className="back-button" onClick={handleBack}>
            Главная
          </a>
          <button
            className="nav-button"
            onClick={() => handleNavigation(1)}
            disabled={currentItemIndex === wishlistItems.length - 1}
          >
            Вперед &#9654;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
