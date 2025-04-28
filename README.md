# Hello Phaser

This project is a simple introduction to game development using Phaser 3, a popular JavaScript game framework. It's designed to teach the basics of setting up a Phaser project, creating a scene, and adding basic interactivity.

## Project Overview

- Create a basic Phaser 3 game with interactive elements
- Learn about the Phaser scene lifecycle (preload, create, update)
- Implement basic interactivity with mouse/touch input
- Display and update text elements

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- NPM (v8 or higher)

### Installation

1. Clone this repository
2. Navigate to the project directory
3. Install dependencies:
   ```
   npm install
   ```

### Running the Game

1. Start the development server:
   ```
   npm run dev
   ```
2. Open your browser and go to: `http://localhost:3000`

## Project Structure

```
hello-phaser/
├── docs/                 # Documentation files
│   ├── index.html        # Main documentation page
│   └── ...               # Other documentation files
├── public/               # Static assets
│   └── assets/
│       ├── images/       # Game images and sprites
│       └── sounds/       # Game audio files
├── src/                  # Source code
│   ├── main.js           # Game entry point
│   └── scenes/
│       └── MainScene.js  # Main game scene
├── index.html            # Game HTML wrapper
├── package.json          # Project dependencies
└── vite.config.mjs       # Vite configuration
```

## Project Tasks

- [ ] Set up the Phaser game configuration
- [ ] Create a main scene
- [ ] Load and display at least two images
- [ ] Add text elements
- [ ] Implement basic interactivity (clicking, hovering)
- [ ] Add a simple scoring system

## Resources Used

- [Phaser 3 Documentation](https://photonstorm.github.io/phaser3-docs/)
- [Phaser 3 Examples](https://phaser.io/examples)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## Acknowledgements

- Phaser.io for the amazing game framework
- Richard Davey (Photonstorm) for creating and maintaining Phaser
