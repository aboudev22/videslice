// ======= DOM Selectors ===========
const videoInput = document.getElementById("videoUrl");
const downloadBtn = document.getElementById("downloadBtn");
const statusText = document.getElementById("status");

// ========= YouTube URL Validation Regex ========
const YOUTUBE_REGEX =
  /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([\w\-]{11})([?&].*)?$/i;

// ======= Utility Function: Update status text on the page ========
// - message: text content to display
// - color: optional CSS class for text color
function setStatus(message, color = "text-gray-400") {
  statusText.className = `text-sm mt-3 text-center ${color}`;
  statusText.textContent = message;
}

// ===== Check if the local Go server is online =======
// Sends a GET request to the /ping endpoint and returns a boolean
async function isServerOnline() {
  try {
    const res = await fetch("http://localhost:5151/ping", { method: "GET" });
    return res.ok;
  } catch (e) {
    return false;
  }
}

// ======== Main Download Handler ============
// Steps:
// 1. Validate the provided YouTube URL
// 2. Ensure the backend server is running
// 3. Trigger the download request
// 4. Handle success or error responses
async function handleDownload() {
  const url = videoInput.value.trim();

  // Step 1: Validate input
  if (!url) {
    setStatus("Please enter a video link.", "text-red-400");
    return;
  }

  if (!YOUTUBE_REGEX.test(url)) {
    setStatus("Please enter a valid YouTube link.", "text-red-400");
    return;
  }

  // Step 2: Verify the server is online
  setStatus("Checking local server availability...", "text-gray-400");
  const serverUp = await isServerOnline();
  if (!serverUp) {
    setStatus(
      "Local server not detected. Please start VidSlice Server.",
      "text-red-400"
    );
    return;
  }

  // Step 3: Send download request
  setStatus("Starting download...", "text-gray-400");

  try {
    const response = await fetch(
      `http://localhost:5151/download?url=${encodeURIComponent(url)}`
    );

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const message = await response.text();
    console.log("Server response:", message);

    // Step 4: Success feedback
    setStatus("Download started successfully.", "text-green-400");
  } catch (error) {
    console.error("Download error:", error);
    setStatus("Failed to start download.", "text-red-400");
  }
}

// ==== Event Listener: Bind the download handler to the button ======
downloadBtn.addEventListener("click", handleDownload);
