import { useState, useEffect, ChangeEvent } from 'react';
import './Modal.css';

interface WishlistItem {
  id: number | null;
  name: string;
  description: string;
  price: number;
  imageUrl: string | null | ArrayBuffer;
  productLink: string;
}

interface ModalProps {
  setWishlistItems: (wishlistItems: WishlistItem[]) => void;
  wishlistItems: WishlistItem[];
  handleCloseModal: () => void;
  editingItem: null | WishlistItem;
}

const Modal = ({
  setWishlistItems,
  wishlistItems,
  handleCloseModal,
  editingItem = null,
}: ModalProps) => {
  const [item, setItem] = useState<WishlistItem>({
    id: null,
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
    productLink: '',
  });

  useEffect(() => {
    if (editingItem) {
      setItem(editingItem);
    }
  }, [editingItem]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setItem((prevItem) => ({ ...prevItem, imageUrl: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (editingItem) {
      const newArray = wishlistItems.map((itm) =>
        itm.id === item.id ? item : itm
      );
      setWishlistItems(newArray);
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
      const newArray = wishlistItems.filter((itm) => itm.id !== item.id);
      setWishlistItems(newArray);
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

/// 1-3 главы по ТС на Метаните!
/// Все остальные компоненты типизировать, где требуется и типизировать контекст
/// Как типизировать ивенты, чтобы избежать ошибок
