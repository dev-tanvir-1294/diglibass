import http from 'http';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 4000;
const FILE_PATH = join(__dirname, 'submissions.json');

const MIME = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
};

async function readSubmissions() {
  try {
    const data = await readFile(FILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeSubmissions(submissions) {
  await mkdir(dirname(FILE_PATH), { recursive: true });
  await writeFile(FILE_PATH, JSON.stringify(submissions, null, 2), 'utf-8');
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const path = url.pathname;
  const method = req.method;

  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (method === 'GET' && path === '/api/submissions') {
    const submissions = await readSubmissions();
    const response = {
      success: true,
      count: submissions.length,
      submissions,
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
    return;
  }

  if (method === 'POST' && path === '/api/submissions') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', async () => {
      try {
        const data = JSON.parse(body || '{}');

        // Validate required fields
        const required = ['name', 'email', 'phone', 'productInterest'];
        const missing = required.filter((field) => !data[field]);
        if (missing.length > 0) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: `Missing fields: ${missing.join(', ')}` }));
          return;
        }

        const submission = {
          id: Date.now().toString(),
          ...data,
          submittedAt: new Date().toISOString(),
        };

        const submissions = await readSubmissions();
        submissions.push(submission);
        await writeSubmissions(submissions);

        console.log('[SUBMISSION]', JSON.stringify(submission, null, 2));
        console.log(`Total submissions: ${submissions.length}`);

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'Submission received', submission }));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
    return;
  }

  // Health check
  if (method === 'GET' && path === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(PORT, () => {
  console.log(`\n[Mock API Server] Running at http://localhost:${PORT}`);
  console.log(`  GET  /api/submissions  — list all submissions`);
  console.log(`  POST /api/submissions  — create a new submission`);
  console.log(`  GET  /health          — health check`);
});
