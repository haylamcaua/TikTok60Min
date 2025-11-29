// RandomTiktok.json.js

(function() {
  const videos = [
    "https://lite.tiktok.com/t/ZSfXLgJJs/",
    "https://lite.tiktok.com/t/ZSfXLWtQS/",
    "https://lite.tiktok.com/t/ZSfXLWGqR/",
    "https://lite.tiktok.com/t/ZSfXLme4c/",
    "https://lite.tiktok.com/t/ZSfXLXuxC/",
    "https://lite.tiktok.com/t/ZSfXLyYMo/",
    "https://lite.tiktok.com/t/ZSfXLyE6C/",
    "https://lite.tiktok.com/t/ZSfXNkBgT/",
    "https://lite.tiktok.com/t/ZSfXLw9sw/",
    "https://lite.tiktok.com/t/ZSfXLKyPm/",
    "https://lite.tiktok.com/t/ZSfXL3aoa/",
    "https://lite.tiktok.com/t/ZSfXN24Ff/",
    "https://lite.tiktok.com/t/ZSfXLox6Q/",
    "https://lite.tiktok.com/t/ZSfXN8JnD/",
    "https://lite.tiktok.com/t/ZSfXNF5C1/",
    "https://lite.tiktok.com/t/ZSfXN6wcC/",
    "https://lite.tiktok.com/t/ZSfXNF9hY/",
    "https://lite.tiktok.com/t/ZSfXNYfeu/",
    "https://lite.tiktok.com/t/ZSfXNjFxS/",
    "https://lite.tiktok.com/t/ZSfXNF1MU/",
    "https://lite.tiktok.com/t/ZSfXNY9MF/",
    "https://lite.tiktok.com/t/ZSfXNNr68/",
    "https://lite.tiktok.com/t/ZSfXNrkfM/",
    "https://lite.tiktok.com/t/ZSfXNFD7Q/",
    "https://lite.tiktok.com/t/ZSfXLTAsv/",
    "https://lite.tiktok.com/t/ZSfXNjX51/",
    "https://lite.tiktok.com/t/ZSfXNhK1J/",
    "https://lite.tiktok.com/t/ZSfXLoRXA/",
    "https://lite.tiktok.com/t/ZSfXNFJcB/",
    "https://lite.tiktok.com/t/ZSfXNkPUA/",
    "https://lite.tiktok.com/t/ZSfXL3JkN/",
    "https://lite.tiktok.com/t/ZSfXNNC8Y/",
    "https://lite.tiktok.com/t/ZSfXNY2Hy/",
    "https://lite.tiktok.com/t/ZSfXN1YRU/",
    "https://lite.tiktok.com/t/ZSfXNJYxC/",
    "https://lite.tiktok.com/t/ZSfXL3qQv/",
    "https://lite.tiktok.com/t/ZSfXLEuxd/",
    "https://lite.tiktok.com/t/ZSfXLvbEJ/",
    "https://lite.tiktok.com/t/ZSfXNLwgn/"
  ];

  // Lấy random video
  const randomIndex = Math.floor(Math.random() * videos.length);

  // JSON trả về
  const response = {
    status: "success",
    data: videos[randomIndex]
  };

  // In JSON trực tiếp trên trang
  document.open();
  document.write(JSON.stringify(response, null, 2));
  document.close();
})();
