import React, { createContext, useState, ReactNode } from 'react';

interface WishlistItem {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  productLink: string;
}

interface WishlistContextType {
  wishlistItems: WishlistItem[];
  setWishlistItems: React.Dispatch<React.SetStateAction<WishlistItem[]>>;
}

export const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

interface WishlistProviderProps {
  children: ReactNode;
}

export const WishlistProvider: React.FC<WishlistProviderProps> = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: 1,
      name: 'Билеты',
      description: 'Билеты Rammstein',
      price: 100,
      imageUrl: 'https://muztur.by/wp-content/uploads/2023/10/rammstein-europe-2024.png',
      productLink: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmuztur.by%2Frammstein-novyy-evropeyskiy-tur-2024%2F&psig=AOvVaw1xQFldcNQZiZ4Omdi9aw_9&ust=1724688332809000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCJjb8-zCkIgDFQAAAAAdAAAAABAE',
    },
    {
      id: 2,
      name: 'Волга',
      description: 'Волга Америка вполне реальная, без шуток, она так и называется',
      price: 666000,
      imageUrl: 'https://i.ytimg.com/vi/7X8XFbo7s5c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDlkNtdFACns8ugFnXABVCoMEvFfA',
      productLink: 'https://example.com/product2',
    },
    {
      id: 3,
      name: 'Скайлайн',
      description: 'Автомобиль Брайана - Ниссан Скайлайн',
      price: 150000,
      imageUrl: 'https://dr1ver.ru/wp-content/uploads/2021/04/nissan-skyline-r34-forsazh-2-2.jpg',
      productLink: 'https://example.com/product3',
    },
    {
      id: 4,
      name: 'Порш Тайкан',
      description: 'Это порш',
      price: 200000,
      imageUrl: 'https://images.drive.ru/i/0/5f3ce1daec05c47070000008.jpg',
      productLink: 'https://example.com/product4',
    },
  ]);

  return (
    <WishlistContext.Provider value={{ wishlistItems, setWishlistItems }}>
      {children}
    </WishlistContext.Provider>
  );
};