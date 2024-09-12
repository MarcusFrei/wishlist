import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WishlistContext } from '../../../contexts/WishlistContext';
import ProductCard from '../../ProductCard/ProductCard';
import './Wishlist.css';

const Wishlist = () => {
  const { wishlistItems } = useContext(WishlistContext);

  return (
    <div>
      <h1>Wishlist</h1>
      <div className="wishlist">
        {wishlistItems.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            buttons={[
              {
                label: 'Подробнее',
                component: Link,
                to: `/wishlist/${item.id}`,
                className: 'detail-button',
              },
            ]}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;

/// редакс продолжить читать!
/// TS - читать на метаните по новому -ютилити и интерфейс
/// сделать папку pages - куда мы будем складывать отделаьные папки под админку, вишлист и карточки.

/// Сделать модалку одним компонентом, решается всё через стейт и проп.
/// Вынести саму карточку в отдельный блок, чтобы максимально её переиспользовать
/// Блоки разных кнопок вынести в отдельный компонент
/// Прочитать про Outlet - jsx component
/// 3 глава алгосов
