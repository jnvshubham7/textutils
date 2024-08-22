import React, { useState } from "react";
import { 
  Container, 
  Form, 
  Button, 
  Spinner, 
  Alert 
} from "react-bootstrap";
import { BsDownload } from "react-icons/bs";

const DownloadPlaylist = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleDownload = (videoUrl) => {
    setLoading(true);
    setMessage("");
    fetch("http://localhost:5000/download-video", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: videoUrl }),
    })
      .then((response) => response.blob())
      .then((blob) => {
        const downloadUrl = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.setAttribute("download", "audio.mp3");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        setLoading(false);
        setMessage("Download started successfully!");
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
        setMessage("Failed to download. Please try again.");
      });
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="text-center mb-4">Download YouTube Playlist</h2>
      <Form>
        <Form.Group controlId="formBasicUrl" className="mb-3">
          <Form.Control
            type="url"
            placeholder="Enter YouTube playlist URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            size="lg"
          />
        </Form.Group>
        <Button
          variant="primary"
          className="w-100"
          size="lg"
          onClick={() => handleDownload(url)}
          disabled={loading || !url}
        >
          {loading ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />{" "}
              Downloading...
            </>
          ) : (
            <>
              <BsDownload /> Download Playlist
            </>
          )}
        </Button>
      </Form>
      {message && (
        <Alert
          variant={message.includes("successfully") ? "success" : "danger"}
          className="mt-4"
        >
          {message}
        </Alert>
      )}
    </Container>
  );
};

export default DownloadPlaylist;
