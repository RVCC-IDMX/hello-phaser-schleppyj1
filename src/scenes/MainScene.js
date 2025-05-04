import Phaser from 'phaser';

/**
 * MainScene - The primary scene for our game
 * This class handles all the main game logic, rendering, and interactions
 */
export default class MainScene extends Phaser.Scene {
  constructor() {
    // Scene key - used to start or reference this scene
    super('MainScene');

    // Initialize any properties here
    this.score = 0;
  }

  /**
   * Preload - Called before the scene is created
   * Use this to load assets (images, sounds, etc.)
   */
  preload() {
    // Load the Phaser logo image
    this.load.image('logo', 'assets/images/phaser-logo-200x150.png');

    // Load a sound effect for clicking
    this.load.audio('click', 'assets/sounds/mixkit-sci-fi-click-900.wav');
  }

  /**
   * Create - Called once after preload is complete
   * Use this to create game objects and set up the scene
   */
  create() {
    // Add a title
    this.add.text(400, 100, 'Hello Phaser!', {
      font: '64px Arial',
      fill: '#ffffff'
    }).setOrigin(0.5);

    // Add background details or instructions
    this.add.text(400, 180, 'My First Phaser Game', {
      font: '24px Arial',
      fill: '#ffffff'
    }).setOrigin(0.5);

    // Add the Phaser logo image to the center of the screen
    const logo = this.add.image(400, 300, 'logo');

    // Add another phaser logo image on the bottom right of the screen that is set to 0.75.
    const logoTwo = this.add.image(700, 450, 'logo');
    logoTwo.setScale(0.75);

    // Add another phaser logo on the top left side of the screen that is set to 0.5.
    const logoThree = this.add.image(100, 150, 'logo');
    logoThree.setScale(0.5);

    // Add a score display
    this.scoreText = this.add.text(16, 16, 'Score: 0', {
      font: '32px Arial',
      fill: '#ffffff'
    });

    // Add instructions
    this.add.text(400, 500, 'Click the logos to increase your score!', {
      font: '18px Arial',
      fill: '#ffffff'
    }).setOrigin(0.5);

    // Make the logo interactive
    logo.setInteractive();
    logoTwo.setInteractive();
    logoThree.setInteractive();

    // Add click handler
    logo.on('pointerdown', () => {
      console.log('Logo clicked!');

      // Play sound when clicked
      this.sound.play('click');

      // Update score
      this.score += 10;
      this.scoreText.setText(`Score: ${this.score}`);
    });
    // Add click handler for logoTwo.
    logoTwo.on('pointerdown', () => {
      console.log('logo two clicked!');

      // Play sound when clicked
      this.sound.play('click');

      // Update score
      this.score += 20;
      this.scoreText.setText(`Score: ${this.score}`);
    });
    // Add click handler for logoThree.
    logoThree.on('pointerdown', () => {
      console.log('logo three clicked!');

      // Play sound when clicked
      this.sound.play('click');

      // Update score
      this.score += 30;
      this.scoreText.setText(`Score: ${this.score}`);
    });

    // Add hover effects
    logo.on('pointerover', () => {
      logo.setScale(1.1);  // Make logo slightly bigger on hover
    });

    // Add hover effects to logoTwo.
    logoTwo.on('pointerover', () => {
      logoTwo.setScale(0.85);
    });

    // Add hover effects to logoThree.
    logoThree.on('pointerover', () => {
      logoThree.setScale(0.60);
    });

    logo.on('pointerout', () => {
      logo.setScale(1.0);  // Return to normal size when not hovering
    });

    logoTwo.on('pointerout', () => {
      logoTwo.setScale(0.75); // Returns to normal size when icon is not hovered over it.
    });

    logoThree.on('pointerout', () => {
      logoThree.setScale(0.5); // Returns to normal size when icon is not hovered over it.
    });

    // Added a simple up and down moving animation to all of the logos.
    this.tweens.add({
      targets: logo,
      y: 420,
      duration: 1500,
      ease: 'Sine.inOut',
      yoyo: true,
      repeat: -1
    });

    this.tweens.add({
      targets: logoTwo,
      x: 520,
      y: 120,
      duration: 1500,
      ease: 'Sine.inOut',
      yoyo: true,
      repeat: -1
    });

    this.tweens.add({
      targets: logoThree,
      x: 220,
      y: 420,
      duration: 1000,
      ease: 'Sine.inOut',
      yoyo: true,
      repeat: -1
    });

    this.timeLeft = 30; // 30 seconds
    this.timeText = this.add.text(16, 60, 'Time: 30', {
      font: '32px Arial',
      fill: '#ffffff'
    });

    // Created a timer event
    this.time.addEvent({
      delay: 1000, // 1000ms = 1 second
      callback: this.updateTimer,
      callbackScope: this,
      loop: true
    });

    this.updateTimer();
  }

  updateTimer() {
    this.timeLeft--;
    this.timeText.setText(`Time: ${this.timeLeft}`);

    if (this.timeLeft <= 0) {
      // Game over logic
      this.add.text(400, 300, 'GAME OVER', {
        font: '64px Arial',
        fill: '#ff0000'
      }).setOrigin(0.5);

      // Stop the timer
      this.time.removeAllEvents();

      // Created an alert that notifies the player if they want to play again.
      const userResponse = window.confirm('Great job! Do you want to play again?');
      if (userResponse) {
        // User clicked OK
        console.log('User chose to play again.');
        window.location.reload();
      } else {
        // User clicked Cancel
        console.log('User chose to cancel.');
        window.alert('Thank you for playing!');
      }
    }
  }

  /**
   * Update - Called every frame
   * Use this for gameplay logic, movement, etc.
   * @param {number} time - Current time
   * @param {number} delta - Time since last frame
   */

  update(time, delta) {
    // The time parameter is the total elapsed time in milliseconds
    // The delta parameter is the time elapsed since the last frame

    // This is where you'd put code that needs to run every frame
    // For example, checking for collisions, movement, etc.

    // For now, we'll leave it empty or add basic debugging
    console.log('Update called', time, delta);
  }
}