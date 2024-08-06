"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

type Card = {
  id: number;
  name: string;
  image: string;
  price: number;
};

const product = [
  {
    id: 1,
    image: 'https://via.placeholder.com/300',
    name: 'Sofa',
    price: 1000,
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/300',
    name: 'Chair',
    price: 700,
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/300',
    name: 'Table',
    price: 500,
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/300',
    name: 'Bed',
    price: 1500,
  },
];

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);
  const intervalRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(intervalRef.current);
  }, []);
  
  const startFlipping = () => {
    intervalRef.current = window.setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-60 w-60 md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-white h-50 w-60 md:h-100 md:w-120 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between h-full"
            style={{
              transformOrigin: "top center",
              backgroundImage: `url(${card.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div>
              <p className="text-neutral-800 font-medium dark:text-black-800">
                {card.name}
              </p>
              <p className="text-neutral-800 font-normal dark:text-black-800">
                ${card.price}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

// Usage
const App = () => {
  return <CardStack items={product} />;
};

export default App;
