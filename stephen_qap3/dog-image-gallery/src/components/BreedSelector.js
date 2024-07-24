import React from 'react';

function BreedSelector({ breeds, selectedBreed, setSelectedBreed, numImages, setNumImages, fetchImages }) {
  const handleBreedChange = (event) => {
    setSelectedBreed(event.target.value);
  };

  const handleNumImagesChange = (event) => {
    setNumImages(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchImages();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select Breed <nbsp></nbsp>
        <select value={selectedBreed} onChange={handleBreedChange}>
          <option value="">Select breed</option>
          {breeds.map(breed => (
            <option key={breed} value={breed}>{breed}</option>
          ))}
        </select>
        <br></br>
      </label>
      <label>
        Number of Images <nbsp></nbsp>
        <input
          type="number"
          value={numImages}
          onChange={handleNumImagesChange}
          min="1"
          max="100"
        />
      </label>
      <br></br> <br></br>
      <button type="submit">Fetch Images</button>
    </form>
  );
}

export default BreedSelector;
