const express = require('express');
const bodyParser = require('body-parser');
const { processData } = require('./utils/helpers');
const { validateFile } = require('./utils/fileUtils');
require('dotenv').config();

const app = express();
app.use(bodyParser.json({ limit: '10mb' })); // for base64 files

const PORT = process.env.PORT || 3000;

app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

app.post('/bfhl', async (req, res) => {
    const { data, file_b64 } = req.body;
  
    const result = processData(data);
    const fileResult = await validateFile(file_b64);
  
    res.json({
      is_success: true,
      user_id: "aastha_rathi_09102003",
      email: "aastha@example.com",
      roll_number: "A123456",
      ...result,
      ...fileResult
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
