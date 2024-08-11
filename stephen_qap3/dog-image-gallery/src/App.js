import React, { useState, useEffect } from 'react';
import BreedSelector from './components/BreedSelector';
import ImageGallery from './components/ImageGallery';
import './App.css';

function App() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [numImages, setNumImages] = useState(1);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        setBreeds(Object.keys(data.message));
      })
      .catch(error => console.error('Error fetching breeds:', error));
  }, []);

  const fetchImages = () => {
    if (selectedBreed && numImages > 0 && numImages <= 100) {
      fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/${numImages}`)
        .then(response => response.json())
        .then(data => {
          setImages(data.message);
        })
        .catch(error => console.error('Error fetching images:', error));
    }
  };

  return (
    <div className="App">
      <h1>Dog Image Gallery</h1>
      <BreedSelector
        breeds={breeds}
        selectedBreed={selectedBreed}
        setSelectedBreed={setSelectedBreed}
        numImages={numImages}
        setNumImages={setNumImages}
        fetchImages={fetchImages}
      />
      <br></br>
      {images.length === 0 ? (
        <p>Try Me Now!
          <br></br>
          <br></br>
          Select your favorite breed and number of images to see a gallery of dog pictures.
        </p>
      ) : (
        <ImageGallery images={images} />
      )}
    </div>
  );
}

export default App;
