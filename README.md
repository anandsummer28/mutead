# Mute Ad Chrome Extension For Jio Cinema, HotStar & YouTube

Copyright (c) 2024 [Anand](https://www.linkedin.com/in/anand28/)

MuteAd is a Chrome extension that allows users to automatically mute the volume of a tab when an ad shows up during video playback, and then restore the volume after the ad is over. For YouTube, it also speeds up ad playback.

## How It Works

The extension works by observing changes in the DOM of the active tab. When a specified HTML element (e.g., a `<div>` with a particular class) appears in the webpage, the extension automatically mutes the tab's volume. For YouTube, it also increases the playback speed of the ad. Once the specified element disappears from the webpage, the extension restores the tab's volume and original playback speed after a short delay.

## Features

- Automatically mutes tab volume when a specified HTML element appears on the webpage.
- Restores tab volume after a short delay when the specified HTML element disappears.
- For YouTube:
  - Speeds up ad playback to 15x normal speed.
  - Restores original playback speed when the ad ends.

## How to Use

### Installation

1. Clone or download this repository to your local machine.
2. Open Google Chrome.
3. Navigate to `chrome://extensions/`.
4. Enable "Developer mode" by toggling the switch in the top right corner.
5. Click on "Load unpacked" and select the directory where you cloned or downloaded the repository.

### Usage

1. After installing the extension, open any supported website in Chrome.
2. When an ad appears, the tab's volume will automatically mute.
3. On YouTube, the ad playback will also speed up significantly.
4. Once the ad ends, the tab's volume will be restored and, for YouTube, the playback speed will return to normal.

## Configuration

You can customize the behavior of the extension by modifying the following files:

- `content.js`: Modify the logic to observe changes in the DOM, trigger volume control, and adjust playback speed.
- `background.js`: Adjust the volume control logic and delay time.

## Supported Sites

1. [www.jiocinema.com](www.jiocinema.com)
2. [www.hotstar.com](www.hotstar.com)
3. [www.youtube.com](www.youtube.com) 

## Feedback

If you encounter any issues or have suggestions for improvement, please [open an issue](https://github.com/anandsummer28/mutead/issues) on GitHub.
