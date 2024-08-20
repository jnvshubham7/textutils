import React, { useState } from 'react';

const DownloadPlaylist = () => {
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleDownload = async () => {
    try {
      const response = await fetch('http://localhost:5000/download-playlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ playlistUrl: url }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Error downloading playlist.');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter YouTube playlist URL"
      />
      <button onClick={handleDownload}>Download Playlist</button>
      <p>{message}</p>
    </div>
  );
};

export default DownloadPlaylist;
