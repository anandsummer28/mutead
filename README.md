# Mute Ad Chrome Extension For Jio Cinema & HotStar

Copyright (c) 2024 [Anand](https://www.linkedin.com/in/anand28/)

MuteAd is a Chrome extension that allows users to automatically mute the volume of a tab when ad shows up during the match, and then restore the volume after the ad is over.

## How It Works

The extension works by observing changes in the DOM of the active tab. When a specified HTML element (e.g., a `<div>` with a particular class) appears in the webpage, the extension automatically mutes the tab's volume. Once the specified element disappears from the webpage, the extension restores the tab's volume after a 2-second delay.

## Features

- Automatically mutes tab volume when a specified HTML element appears on the webpage.
- Restores tab volume after a 2-second delay when the specified HTML element disappears.

## How to Use

### Installation

1. Clone or download this repository to your local machine.
2. Open Google Chrome.
3. Navigate to `chrome://extensions/`.
4. Enable "Developer mode" by toggling the switch in the top right corner.
5. Click on "Load unpacked" and select the directory where you cloned or downloaded the repository.

### Usage

1. After installing the extension, open any webpage in Chrome.
2. When the specified HTML element (e.g., a `<div>` with a particular class) appears on the webpage, the tab's volume will automatically mute.
3. Once the specified HTML element disappears from the webpage, the tab's volume will be restored after a 2-second delay.

## Configuration

You can customize the behavior of the extension by modifying the following files:

- `content.js`: Modify the logic to observe changes in the DOM and trigger volume control.
- `background.js`: Adjust the volume control logic and delay time.

## Supported Sites

1. [www.jiocinema.com](www.jiocinema.com)
2. [www.hotstar.com](www.hotstar.com)

## Feedback

If you encounter any issues or have suggestions for improvement, please [open an issue](https://github.com/anandsummer28/mutead/issues) on GitHub.
