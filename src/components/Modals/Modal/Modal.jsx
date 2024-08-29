import React, { useState, useEffect } from 'react';
import './Modal.css';

const Modal = ({ editingItem, setWishlistItems, handleCloseModal }) => {
  const [editedItem, setEditedItem] = useState(editingItem);

  useEffect(() => {
    setEditedItem(editingItem);
  }, [editingItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setEditedItem((prevItem) => ({ ...prevItem, imageUrl: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    setWishlistItems((prevItems) =>
      prevItems.map((item) => (item.id === editedItem.id ? editedItem : item))
    );
    handleCloseModal();
  };

  const handleDelete = () => {
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item.id !== editedItem.id)
    );
    handleCloseModal();
  };

  return (
    <div className="modal-background">
      <div className="modal">
        <h2>Редактирование {editedItem.name}</h2>
        <input
          type="text"
          name="name"
          value={editedItem.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={editedItem.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={editedItem.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="productLink"
          value={editedItem.productLink}
          onChange={handleChange}
        />
        <input type="file" name="image" onChange={handleImageChange} />
        <div className="modal-buttons">
          <button onClick={handleSave}>Сохранить</button>
          <button onClick={handleDelete}>Удалить</button>
          <button onClick={handleCloseModal}>Отмена</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
