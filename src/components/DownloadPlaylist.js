import React, { useState } from "react";

const DownloadPlaylist = () => {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");

  function handleDownload(videoUrl) {
    fetch("http://localhost:5000/download-video", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: videoUrl }), // Pass the actual URL
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "audio.mp3"); // Optional: Set the file name
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch((err) => console.error("Error:", err));
  }

  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter YouTube playlist URL"
      />
      <button onClick={() => handleDownload(url)}>Download Playlist</button> {/* Correctly pass the URL */}
      <p>{message}</p>
    </div>
  );
};

export default DownloadPlaylist;
