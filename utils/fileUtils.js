const { Buffer } = require('buffer');

async function validateFile(file_b64) {
  if (!file_b64) {
    return {
      file_valid: false
    };
  }

  try {
    const buffer = Buffer.from(file_b64, 'base64');
    const size_kb = (buffer.length / 1024).toFixed(2);

    const { fileTypeFromBuffer } = await import('file-type');
    const fileType = await fileTypeFromBuffer(buffer);
    const mime_type = fileType?.mime || "unknown";

    return {
      file_valid: true,
      file_mime_type: mime_type,
      file_size_kb: size_kb
    };
  } catch (e) {
    return {
      file_valid: false
    };
  }
}

module.exports = { validateFile };
