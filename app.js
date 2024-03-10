const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const LOG_LEVEL = process.env.LOG_LEVEL || 'INFO';

function logMessage(level, message) {
    console.log(`${new Date().toISOString()} ${level.toLowerCase()}: ${message}`);
  }

app.get('/info', (req, res) => {
  if (LOG_LEVEL === 'INFO' || LOG_LEVEL === 'DEBUG' || LOG_LEVEL === 'ERROR' || LOG_LEVEL === 'FATAL') {
    logMessage('INFO', 'This is an info message');
  }
  res.send('Info route');
});

app.get('/debug', (req, res) => {
  if (LOG_LEVEL === 'DEBUG' || LOG_LEVEL === 'ERROR' || LOG_LEVEL === 'FATAL') {
    logMessage('DEBUG', 'This is a debug message');
  }
  res.send('Debug route');
});

app.get('/error', (req, res) => {
  if (LOG_LEVEL === 'ERROR' || LOG_LEVEL === 'FATAL') {
    logMessage('ERROR', 'This is an error message');
  }
  res.send('Error route');
});

app.get('/fatal', (req, res) => {
  if (LOG_LEVEL === 'FATAL') {
    logMessage('FATAL', 'This is a fatal message');
  }
  res.send('Fatal route');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
