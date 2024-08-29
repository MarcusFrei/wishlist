import { createContext, useState } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Билеты',
      description: 'Билеты Rammstein',
      price: 100,
      imageUrl:
        'https://muztur.by/wp-content/uploads/2023/10/rammstein-europe-2024.png',
      productLink:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmuztur.by%2Frammstein-novyy-evropeyskiy-tur-2024%2F&psig=AOvVaw1xQFldcNQZiZ4Omdi9aw_9&ust=1724688332809000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCJjb8-zCkIgDFQAAAAAdAAAAABAE',
    },
    {
      id: 2,
      name: 'Волга',
      description:
        'Волга Америка вполне реальная, без шуток, она так и называется',
      price: 666000,
      imageUrl:
        'https://i.ytimg.com/vi/7X8XFbo7s5c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDlkNtdFACns8ugFnXABVCoMEvFfA',
      productLink: 'https://example.com/product2',
    },
    {
      id: 3,
      name: 'Скайлайн',
      description: 'Автомобиль Брайана - Ниссан Скайлайн',
      price: 150000,
      imageUrl:
        'https://dr1ver.ru/wp-content/uploads/2021/04/nissan-skyline-r34-forsazh-2-2.jpg',
      productLink: 'https://example.com/product3',
    },
  ]);

  return (
    <WishlistContext.Provider value={{ wishlistItems, setWishlistItems }}>
      {children}
    </WishlistContext.Provider>
  );
};
