# Advice App

A simple React application that uses the [Advice Slip API](https://api.adviceslip.com/advice) to fetch and display random pieces of advice. The app includes navigation between a home page, a random advice page, and a list of advice page.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [API](#api)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/advice-app.git
   cd advice-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   npm start
4. Open your browser and navigate to `http://localhost:3000`.

## Usage
The Advice App has the following features:
- **Home Page**: Displays a brief introduction to the app.
- **Random Advice Page**: Fetches a random piece of advice from the Advice Slip API and displays it.
- **List of Advice Page**: Displays a list of all the advice retrieved from the Advice Slip API.

## Components
The app consists of the following components:
- `App`: The main component that handles routing and renders the other components.
- `Home`: Displays the home page.
- `RandomAdvice`: Fetches and displays a random piece of advice.
- `AdviceList`: Displays a list of all the advice retrieved from the API.

## API
The Advice App uses the [Advice Slip API](https://api.adviceslip.com/advice) to fetch random pieces of advice. The API returns a JSON response in the following format:
```json
{
"slip": {
 "id": 112,
 "advice": "It's not about who likes you, it's about who you like."
}
}
```

## Folder Structure
The project's folder structure is as follows:
``` reasonml
advice-app/
├── src/
│   ├── components/
│   │   ├── App.js
│   │   ├── Home.js
│   │   ├── RandomAdvice.js
│   │   └── AdviceList.js
│   ├── styles/
│   │   └── styles.css
│   └── index.js
├── package.json
└── README.md
```

## Contributing
Contributions to the Advice App are welcome. If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
