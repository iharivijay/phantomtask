import { dirname } from "path";
import * as path from "path";
import { fileURLToPath } from "url";
import { readFile, writeFile } from "fs/promises";
import * as libre from "libreoffice-convert";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function convert() {
  const ext = ".pdf";
  const inputPath = path.join(__dirname, "example.docx");
  const outputPath = path.join(__dirname, `example${ext}`);

  const docxBuf = await readFile(inputPath);
  const pdfBuf = await libre.convertAsync(docxBuf, ext, undefined);

  await writeFile(outputPath, pdfBuf);
}

convert().catch((err) => {
  console.log("Error: " + err);
});
