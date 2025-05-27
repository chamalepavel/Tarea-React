import { useEffect, useState } from 'react';

function DogBreedSearch() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchDogs = async () => {
    setLoading(true);
    setError('');
    try {
      const requests = Array.from({ length: 10 }, () =>
        fetch('https://dog.ceo/api/breeds/image/random').then((res) => res.json())
      );

      const results = await Promise.all(requests);
      const urls = results.map((res) => res.message);
      setImages(urls);
    } catch (err) {
      setError('Error al cargar las imágenes. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDogs();
  }, []);

  return (
    <div>
      <h2>Razas de Perros Aleatorios</h2>

      {loading ? (
        <div className="loading">
          <img src="https://i.gifer.com/ZZ5H.gif" alt="Cargando..." />
          <p>Cargando imágenes...</p>
        </div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <>
          <div className="grid">
            {images.map((url, idx) => (
              <img key={idx} src={url} alt={`Perro ${idx + 1}`} />
            ))}
          </div>
          <button className="reload-button" onClick={fetchDogs}>
            Cargar Nuevas Razas
          </button>
        </>
      )}
    </div>
  );
}

export default DogBreedSearch;
