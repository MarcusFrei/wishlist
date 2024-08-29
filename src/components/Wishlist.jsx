import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WishlistContext } from '../contexts/WishlistContext';
import './Wishlist.css';

const Wishlist = () => {
  const { wishlistItems } = useContext(WishlistContext);

  return (
    <div>
      <h1>Wishlist</h1>
      <div className="wishlist">
        {wishlistItems.map((item) => (
          <div key={item.id} className="wishlist-item">
            <img src={item.imageUrl} alt={item.name} />
            <div>
              <h2>{item.name}</h2>
              <p>Цена: ${item.price}</p>
              <Link to={`/wishlist/${item.id}`}>Подробнее</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;

/// useContext - почитать, так как благодаря нем можно реализовать вишлист, 2-ой вариант - через редакс (соответсвенно прочитать и узнать
/// как именно это работает и почему контекст хуже).
/// сделать папку pages - куда мы будем складывать отделаьные папки под админку, вишлист и карточки.
/// Изменить админ панель, вынести добавление в модальное окно (всплывашка и сделать эт отдельным компонентом) + изменить сами карточки добавив
/// миниатюрные фотки в них.
//  Убрать desc в описании карточки в вишлисте на главной странице и сделать картинки одинакового размера.
/// line-clamp - использовать на карточке для обрезания названия описания
/// Дополнительно прочитать про react-router - protected route
