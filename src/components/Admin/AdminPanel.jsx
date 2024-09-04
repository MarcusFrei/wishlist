import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../Modals/Modal/Modal';
import { WishlistContext } from '../../contexts/WishlistContext';
import ProductCard from '../ProductCard/ProductCard';
import './AdminPanel.css';

const AdminPanel = () => {
  const { wishlistItems, setWishlistItems } = useContext(WishlistContext);
  const [editingItem, setEditingItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleEdit = (item) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleAddNewItem = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
          <ProductCard
            key={item.id}
            item={item}
            buttons={[
              {
                label: 'Редактировать',
                onClick: () => handleEdit(item),
                className: 'edit-button',
              },
            ]}
            showDescription={true}
          />
        ))}
      </div>

      {isModalOpen && (
        <Modal
          editingItem={editingItem}
          setWishlistItems={setWishlistItems}
          wishlistItems={wishlistItems}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default AdminPanel;
