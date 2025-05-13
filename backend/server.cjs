const express = require("express"); // express framework installation
const multer = require("multer"); // used to handle form data
const cors = require("cors"); // cors used to communicate frontend and backend
const PDFDocument = require("pdfkit"); // lib to create pdf (important fix: pdfkit exports PDFDocument, not pdf)
const fs = require("fs"); // allows reading or writing of files
const path = require("path"); // helps with file paths

const app = express(); // creates the express app (server)

app.use(cors()); // allows communication between different ports (frontend <-> backend)

app.use(express.static("pages")); // serves static files from the "pages" folder

const upload = multer(); // enables parsing of form data (text, file uploads, etc.)

app.post("/generate", upload.none(), async (req, res) => {
  const { text, handW, img } = req.body;

  // Correct path to font and background image
  const fontPath = path.join(__dirname, "fonts", `${handW}.ttf`);
  const bgPath = path.join(__dirname, "pages", `${img}.jpg`);

  // Validate paths
  if (!fs.existsSync(fontPath) || !fs.existsSync(bgPath)) {
    return res.status(400).send("Font or page image not found");
  }

  // Create a new PDF
  const doc = new PDFDocument({
    size: "A4",
    layout: "portrait",
  });

  // Unique file name
  const filename = `output_${Date.now()}.pdf`;
  const filePath = path.join(__dirname, "generated", filename);

  // Create write stream
  const writeStream = fs.createWriteStream(filePath);
  doc.pipe(writeStream);

  // Add background image
  doc.image(bgPath, 0, 0, { width: 595 });

  // Add text using selected font
  doc
    .font(fontPath) // 🔁 Fix typo: 'fotn' → 'font'
    .fontSize(16) // 🔁 Fix typo: 'fontsize' → 'fontSize'
    .fillColor("black")
    .text(text, 70, 100, { width: 460, align: "left" });

  doc.end(); // finalize the PDF

  // When PDF is done being written:
  writeStream.on("finish", () => {
    res.download(filePath, filename, () => {
      fs.unlinkSync(filePath); // delete PDF after sending to client
    });
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
