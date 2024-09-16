import Spline from '@splinetool/react-spline';
import { useState, useCallback } from 'react';
import { throttle } from 'lodash';
import styles from '@/styles/RoomModel.module.css';

interface FurnitureData {
  [key: string]: {
    price: string;
    dimensions: string;
  };
}

const furnitureData: FurnitureData = {
  sofa: { price: '$150', dimensions: '120x60x75 cm' },
  DesignLamp: { price: '$50', dimensions: '45x45x90 cm' },
  canvas: { price: '$300', dimensions: '200x160x50 cm' },
};

interface RoomModelProps {
  splineUrl: string;
}

const RoomModel: React.FC<RoomModelProps> = ({ splineUrl }) => {
  const [hovered, setHovered] = useState<{ name: string; price: string; dimensions: string } | null>(null);
  const [error, setError] = useState<boolean>(false);

  const handlePointerMove = useCallback(
    throttle((e: any) => {
      const objectName = e?.object?.name || e?.target?.name;

      if (objectName && furnitureData[objectName]) {
        if (!hovered || hovered.name !== objectName) {
          setHovered({ name: objectName, ...furnitureData[objectName] });
        }
      } else if (hovered) {
        setHovered(null);
      }
    }, 100), // Reduced throttle interval
    [hovered]
  );

  const handleError = useCallback(() => {
    setError(true);
  }, []);

  return (
    <div className={styles.container}>
      {!error ? (
        <Spline
          scene={splineUrl}
          onPointerMove={handlePointerMove}
          onLoad={() => console.log('Spline loaded')}
          onError={handleError}
        />
      ) : (
        <p>Error loading the Spline scene.</p>
      )}
      {hovered && (
        <div className={styles.infoCard}>
          <h2 className='text-black'>{hovered.name}</h2>
          <p>Price: {hovered.price}</p>
          <p>Dimensions: {hovered.dimensions}</p>
        </div>
      )}
    </div>
  );
};

export default RoomModel;
