import React, { useState } from "react";
import { 
  Box, 
  Input, 
  Button, 
  Text, 
  Container, 
  Spinner, 
  Alert, 
  AlertIcon 
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

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
    <Container maxW="sm" mt="50px" textAlign="center">
      <Text fontSize="2xl" mb="8px">
        Download YouTube Playlist
      </Text>
      <Input
        placeholder="Enter YouTube playlist URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        mb="16px"
        size="lg"
      />
      <Button
        colorScheme="blue"
        leftIcon={loading ? <Spinner size="sm" /> : <DownloadIcon />}
        onClick={() => handleDownload(url)}
        isDisabled={loading || !url}
        size="lg"
        width="100%"
        mb="16px"
      >
        {loading ? "Downloading..." : "Download Playlist"}
      </Button>
      {message && (
        <Alert status={message.includes("successfully") ? "success" : "error"} mt="16px">
          <AlertIcon />
          {message}
        </Alert>
      )}
    </Container>
  );
};

export default DownloadPlaylist;
