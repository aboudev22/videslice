# VidSlice

VidSlice is a lightweight browser extension that lets you download YouTube videos by communicating with a **local server** running on your machine.
The extension is focused on simplicity, transparency, and full local control: all requests are routed through your own server instance.

---

## How It Works

1. **Local Server Required**
   The extension does not handle video downloads by itself. Instead, it forwards video links to a local server (built with Go).

   * You must install and run the server separately on your computer.
   * The extension communicates with the server at `http://localhost:5151`.

   👉 Server repository: [VidSlice Server](https://github.com/yourusername/vidslice-server)

2. **Extension Workflow**

   * User pastes a YouTube URL into the extension popup.
   * The extension validates the URL.
   * It checks whether the local server is online (`/ping` endpoint).
   * If online, it sends the URL to `/download` on the server.
   * The server manages the actual download process and saves the file locally.

3. **Security**

   * All communication is local (`localhost`)—no third-party service involved.
   * The extension does not store credentials or send data outside your machine.

---

## Features

* **YouTube Support**: Download full videos directly via the server.
* **Validation**: Built-in link validation ensures only correct YouTube URLs are processed.
* **Status Updates**: Real-time feedback in the extension popup (e.g., server offline, invalid link, download started).
* **Local-First**: Nothing is uploaded to external servers.

---

## Technologies

* **Frontend**: Vanilla JavaScript/TypeScript for the extension popup.
* **Backend**: Go-based server (separate project).
* **Communication**: Fetch API requests from the extension to the local server.
* **Build Tools**: `pnpm` for package management.

---

## Installation

### 1. Install the Server

1. Clone the server repository:

   ```bash
   git clone https://github.com/yourusername/vidslice-server.git
   cd vidslice-server
   go run ./cmd/server/main.go
   ```

   The server will start at: [http://localhost:5151](http://localhost:5151)

### 2. Install the Extension

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/vidslice.git
   cd vidslice
   pnpm install
   pnpm build
   ```
2. Load the extension in your browser:

   * **Chrome**: Visit `chrome://extensions/`, enable Developer Mode, and load the `dist/` folder.
   * **Firefox**: Go to `about:debugging`, load a temporary add-on from `manifest.json`.

---

## Usage

1. Start the **VidSlice Server** on your machine.
2. Open the extension popup.
3. Paste a valid YouTube URL.
4. Click **Download**.
5. If everything is configured, the server will save the video locally.

---

## Development

* Run dev mode for the extension:

  ```bash
  pnpm dev
  ```
* Contributions are welcome—please fork and open a pull request.

---

## License

Licensed under MIT.
Use responsibly for personal, non-copyright-infringing content.

