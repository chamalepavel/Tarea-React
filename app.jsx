import { useState } from 'react';
import DogBreedSearch from './components/DogBreedSearch';
import ColorButton from './components/ColorButton';
import './index.css';

function App() {
  const [color, setColor] = useState('gray');

  const COLORS = [
    { name: 'Rojo', value: 'red' },
    { name: 'Azul', value: 'blue' },
    { name: 'Verde', value: 'green' },
  ];

  return (
    <div className="container">
      <h1>Cambia el color de la caja</h1>

      <div className="color-box" style={{ backgroundColor: color }}></div>

      <div className="button-group">
        {COLORS.map((colorBtn) => (
          <ColorButton
            key={colorBtn.value}
            color={colorBtn.value}
            label={colorBtn.name}
            onClick={() => setColor(colorBtn.value)}
          />
        ))}

        <ColorButton color="gray" label="Reiniciar" onClick={() => setColor('gray')} />
      </div>

      <DogBreedSearch />
    </div>
  );
}

export default App;
