import { readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import type { Connect } from 'vite';

const FILE_PATH = join(process.cwd(), 'api', 'submissions.json');

async function readSubmissions() {
  try {
    const data = await readFile(FILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeSubmissions(submissions: unknown[]) {
  await mkdir(join(process.cwd(), 'api'), { recursive: true });
  await writeFile(FILE_PATH, JSON.stringify(submissions, null, 2), 'utf-8');
}

export function mockApiPlugin() {
  return {
    name: 'vite:mock-api',
    configureServer(server: { use: (path: string, handler: Connect.HandleFunction) => void }) {
      server.use('/api', (req, res) => {
        const method = req.method;
        const url = new URL(req.url || '', 'http://localhost').pathname;

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Content-Type', 'application/json');

        if (method === 'OPTIONS') {
          res.statusCode = 204;
          res.end();
          return;
        }

        if (url === '/api/health' && method === 'GET') {
          res.statusCode = 200;
          res.end(JSON.stringify({ status: 'ok' }));
          return;
        }

        if (url === '/api/submissions' && method === 'GET') {
          readSubmissions().then((submissions) => {
            res.statusCode = 200;
            res.end(JSON.stringify({ success: true, count: submissions.length, submissions }));
          });
          return;
        }

        if (url === '/api/submissions' && method === 'POST') {
          const chunks: Buffer[] = [];
          req.on('data', (chunk: Buffer) => chunks.push(chunk));
          req.on('end', async () => {
            try {
              const rawBody = Buffer.concat(chunks).toString();
              const data = JSON.parse(rawBody || '{}');

              const required = ['name', 'email', 'phone', 'productInterest'];
              const missing = required.filter((field) => !data[field]);
              if (missing.length > 0) {
                res.statusCode = 400;
                res.end(JSON.stringify({ success: false, error: `Missing: ${missing.join(', ')}` }));
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

              res.statusCode = 201;
              res.end(JSON.stringify({ success: true, message: 'Submission received', submission }));
            } catch (err) {
              res.statusCode = 500;
              res.end(JSON.stringify({ success: false, error: err instanceof Error ? err.message : 'Unknown error' }));
            }
          });
          return;
        }

        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Not found' }));
      });
    },
  };
}
