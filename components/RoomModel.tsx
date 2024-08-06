// components/RoomModel.tsx
'use client'
/** 
import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import styles from '@/styles/RoomModel.module.css';

interface FurnitureData {
  [key: string]: {
    price: string;
    dimensions: string;
  };
}

const furnitureData: FurnitureData = {
  Table: { price: '$150', dimensions: '120x60x75 cm' },
  Chair: { price: '$50', dimensions: '45x45x90 cm' },
  Bed: { price: '$300', dimensions: '200x160x50 cm' },
};

interface RoomModelProps {
  splineUrl: string;
}

const RoomModel: React.FC<RoomModelProps> = ({ splineUrl }) => {
  const [hovered, setHovered] = useState<{ name: string; price: string; dimensions: string } | null>(null);
  const [error, setError] = useState<boolean>(false);

  const handlePointerMove = (e: any) => {
    const name = e.target.name;
    console.log('Pointer moved over:', name); // Debugging log
    if (furnitureData[name]) {
      setHovered({ name, ...furnitureData[name] });
    } else {
      setHovered(null);
    }
  };

  const handleError = () => {
    setError(true);
  };

  return (
    <div className={styles.container}>
      {!error ? (
        <Spline
          scene={splineUrl}
          onPointerMove={handlePointerMove}
          onLoad={(e) => console.log('Spline loaded:', e)}
          onError={handleError}
        />
      ) : (
        <p>Error loading the Spline scene.</p>
      )}
      {hovered && (
        <div className={styles.infoCard}>
          <h2>{hovered.name}</h2>
          <p>Price: {hovered.price}</p>
          <p>Dimensions: {hovered.dimensions}</p>
        </div>
      )}
    </div>
  );
};

export default RoomModel;

**/

