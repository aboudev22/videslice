# VidSlice

A browser extension for downloading videos or specific sequences from various platforms by pasting a link or detecting videos on webpages. Built for simplicity, local use, and open-source customization. No server required—runs entirely on your machine.

## Features

- **Link-Based Download**: Paste a video URL to download the full video or a selected time range.
- **Cross-Browser Support**: Compatible with Chrome, Firefox, and other Chromium-based browsers.
- **Video Detection**: Automatically detects videos on supported sites and shows a download icon/option. Users can configure which sites to enable this on via settings.
- **Sequence Streaming Download**: Download only a specific segment (e.g., 30 minutes from a 2-hour video) in streaming mode without fetching the entire file first. Uses time-range requests for efficiency.

## Technologies

- **TypeScript**: For type-safe JavaScript code in the extension's popup, background, and content scripts.
- **pnpm**: Package manager for fast, efficient dependency handling.
- **yt-dlp**: Integrated via a Node.js wrapper (e.g., ytdlp-nodejs) for multi-platform video extraction and downloading. Handles thousands of sites like YouTube, Vimeo, etc.
- **FFmpeg**: Required for on-the-fly video trimming and section extraction (installed separately or bundled where possible).
- **Browser APIs**: Chrome/Firefox Extension APIs for content injection, permissions, and local storage.
- **WebAssembly (optional)**: For browser-compatible FFmpeg ports to enable client-side processing without native binaries.

## Installation

1. Clone the repo: `git clone https://github.com/yourusername/video-sequence-downloader.git`
2. Install dependencies: `pnpm install`
3. Build: `pnpm build`
4. Load in browser:
   - Chrome: Go to `chrome://extensions/`, enable Developer Mode, and load the `dist/` folder.
   - Firefox: Use `about:debugging`, load temporary add-on from `manifest.json`.
5. Install FFmpeg: Download from [ffmpeg.org](https://ffmpeg.org) and add to PATH (or use a wrapper for auto-setup).

## Usage

- Open the extension popup, paste a video URL.
- Select start/end timestamps for sequence download.
- Configure site detection in options page.
- Click download—files save to your default downloads folder.

## Development

- Run dev mode: `pnpm dev`
- Contributions welcome! Fork and PR.

Licensed under MIT. Use responsibly for personal, non-copyright-infringing content.
