import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewItemModal from '../Modals/NewItemModal/NewItemModal';
import Modal from '../Modals/Modal/Modal';
import { WishlistContext } from '../../contexts/WishlistContext';
import './AdminPanel.css';

const AdminPanel = () => {
  const { wishlistItems, setWishlistItems } = useContext(WishlistContext);
  const [editingItem, setEditingItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewItemModalOpen, setIsNewItemModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleEdit = (item) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleAddNewItem = () => {
    setIsNewItemModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsNewItemModalOpen(false);
    setEditingItem(null);
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h1>Admin Panel</h1>
        <a onClick={handleAddNewItem} className="add-item-button">
          Добавить товар
        </a>
        <a className="back-button-admin" onClick={handleBack}>
          Главная
        </a>
      </div>
      <div className="items-list">
        {wishlistItems.map((item) => (
          <div key={item.id} className="admin-item">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="item-thumbnail"
            />
            <div>
              <h2>{item.name}</h2>
              <p className="item-description">{item.description}</p>
              <button onClick={() => handleEdit(item)} className="edit-button">
                Редактировать
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <Modal
          editingItem={editingItem}
          setWishlistItems={setWishlistItems}
          handleCloseModal={handleCloseModal}
        />
      )}

      {isNewItemModalOpen && (
        <NewItemModal
          setWishlistItems={setWishlistItems}
          wishlistItems={wishlistItems}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default AdminPanel;
