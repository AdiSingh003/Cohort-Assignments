const fs = require('fs');

fs.readFile("1-file-cleaner.md", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const cleanedData = data.replace(/ +/g, ' ');

  fs.writeFile("1-file-cleaner.md", cleanedData, (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("File written successfully!!");
      console.log(cleanedData);
    }
  });
});
