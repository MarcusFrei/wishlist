import React from 'react';
import './ProductCard.css';

const ProductCard = ({ item, buttons, showDescription = false }) => {
  return (
    <div className="product-card">
      <img src={item.imageUrl} alt={item.name} className="product-image" />
      <h2 className="product-name">{item.name}</h2>
      {showDescription && (
        <p className="product-description">{item.description}</p>
      )}
      <p className="product-price">Цена: ${item.price}</p>
      <div className="product-buttons">
        {buttons.map((button, index) => {
          const ButtonComponent = button.component || 'button';
          return (
            <ButtonComponent
              key={index}
              to={button.to}
              onClick={button.onClick}
              className={button.className}
            >
              {button.label}
            </ButtonComponent>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
