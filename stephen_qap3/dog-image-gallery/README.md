# Dog Image Gallery

A responsive React application that allows users to explore images of various dog breeds using the Dog CEO API. Users can select a dog breed and specify the number of images they want to view. The application dynamically fetches and displays the images based on user input, making use of modern React hooks (`useState` and `useEffect`) to manage state and side effects.

## Features

- **Responsive Design**: Ensures a pleasant user experience on different devices.
- **Breed Selection**: Users can select a dog breed from a dynamically populated dropdown list.
- **Image Quantity Input**: Users can specify the number of images to load (between 1 and 100).
- **Dynamic Image Fetching**: On form submission, the application fetches the specified number of images for the selected breed and displays them in a gallery format.
- **Hover Effect**: Images in the gallery have a hover effect, enhancing the visual appeal.
- **Fallback Text**: Displays "Try Me Now!" when no images are selected or displayed.

## Technologies Used

- **React**: For building the user interface.
- **CSS**: For styling the components.
- **Dog CEO API**: The Dog API (https://dog.ceo/dog-api/documentation/) is a free web service that uses data from the Stanford Dogs Dataset (http://vision.stanford.edu/aditya86/ImageNetDogs/).

## Components

### `App.js`

The main component that holds the entire application. Manages state for the selected breed, number of images, and fetched images. Renders the `BreedSelector` and `ImageGallery` components.

### `BreedSelector.js`

A form component for selecting a dog breed and the number of images to fetch. Fetches the list of dog breeds using the Dog CEO API and populates a dropdown list. Handles form submission to fetch images for the selected breed and number of images.

### `ImageGallery.js`

A component that displays the fetched images in a gallery format. Applies styling to ensure the images are displayed nicely with hover effects.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/dog-image-gallery.git
   cd dog-image-gallery

2. Install the dependencies:
   ```sh
   npm install
   ```

### Running the Application
1. Running the Application
```sh
   npm start
```
2. Open your browser and navigate to http://localhost:3000 to see the application in action.


## Usage

- Select a dog breed from the dropdown.
- Specify the number of images to fetch.
- Click the "Fetch Images" button to load the images.
- Enjoy browsing through the images of your selected dog breed.

## License

This project is licensed under the MIT License.


## Creator
By: Stephen Crocker


Dated: Jul 24, 2024

