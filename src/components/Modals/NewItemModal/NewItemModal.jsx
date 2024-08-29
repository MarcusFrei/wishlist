import React, { useState } from 'react';
import '../Modal/Modal.css';

const NewItemModal = ({
  setWishlistItems,
  wishlistItems,
  handleCloseModal,
}) => {
  const [newItem, setNewItem] = useState({
    id: null,
    name: '',
    description: '',
    price: '',
    imageUrl: '',
    productLink: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewItem((prevItem) => ({ ...prevItem, imageUrl: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleAddNewItem = () => {
    setNewItem((prevItem) => ({
      ...prevItem,
      id: wishlistItems.length + 1,
    }));
    setWishlistItems([...wishlistItems, newItem]);
    handleCloseModal();
  };

  return (
    <div className="modal-background">
      <div className="modal">
        <h2>Добавить новый товар</h2>
        <input
          type="text"
          name="name"
          placeholder="Название"
          value={newItem.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Описание"
          value={newItem.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Цена"
          value={newItem.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="productLink"
          placeholder="Ссылка на продукт"
          value={newItem.productLink}
          onChange={handleChange}
        />
        <input type="file" name="image" onChange={handleImageChange} />
        <div className="modal-buttons">
          <button onClick={handleAddNewItem}>Добавить</button>
          <button onClick={handleCloseModal}>Отмена</button>
        </div>
      </div>
    </div>
  );
};

export default NewItemModal;
