import React, { useState, useEffect } from 'react';
import './Modal.css';

const Modal = ({
  setWishlistItems,
  wishlistItems,
  handleCloseModal,
  editingItem = null,
}) => {
  const [item, setItem] = useState({
    id: null,
    name: '',
    description: '',
    price: '',
    imageUrl: '',
    productLink: '',
  });

  useEffect(() => {
    if (editingItem) {
      setItem(editingItem);
    }
  }, [editingItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setItem((prevItem) => ({ ...prevItem, imageUrl: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    if (editingItem) {
      setWishlistItems((prevItems) =>
        prevItems.map((itm) => (itm.id === item.id ? item : itm))
      );
    } else {
      setItem((prevItem) => ({
        ...prevItem,
        id: wishlistItems.length + 1,
      }));
      setWishlistItems([...wishlistItems, item]);
    }
    handleCloseModal();
  };

  const handleDelete = () => {
    if (editingItem) {
      setWishlistItems((prevItems) =>
        prevItems.filter((itm) => itm.id !== item.id)
      );
      handleCloseModal();
    }
  };

  return (
    <div className="modal-background">
      <div className="modal">
        <h2>
          {editingItem ? `Редактирование ${item.name}` : 'Добавить новый товар'}
        </h2>
        <input
          type="text"
          name="name"
          placeholder="Название"
          value={item.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Описание"
          value={item.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Цена"
          value={item.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="productLink"
          placeholder="Ссылка на продукт"
          value={item.productLink}
          onChange={handleChange}
        />
        <input type="file" name="image" onChange={handleImageChange} />
        <div className="modal-buttons">
          <button onClick={handleSave}>
            {editingItem ? 'Сохранить' : 'Добавить'}
          </button>
          {editingItem && <button onClick={handleDelete}>Удалить</button>}
          <button onClick={handleCloseModal}>Отмена</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
