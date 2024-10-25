import React from "react";
import { CardStack } from "@/components/ui/card-stack";

const product = [
  {
    id: 1,
    image: '/Furniture/Chairs/1_files/sofa.jpg',
    name: 'Sofa',
    price: 1000,
  },
  {
    id: 2,
    image: '/Furniture/Chairs/1_files/chair.jpg',
    name: 'Chair',
    price: 700,
  },
  {
    id: 3,
    image: '/Furniture/Side_tables/1_files/table.jpg',
    name: 'Table',
    price: 500,
  },
  {
    id: 4,
    image: '/Furniture/Beds/bed.jpg',
    name: 'Bed',
    price: 1500,
  },
];

const App = () => {
  return <CardStack items={product} />;
};

export default App;
