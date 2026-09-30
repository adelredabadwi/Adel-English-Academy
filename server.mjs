// Development-only static server; production can use any static host.
import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const root = new URL('./', import.meta.url);
const types = { html: 'text/html; charset=utf-8', css: 'text/css; charset=utf-8', js: 'text/javascript; charset=utf-8', svg: 'image/svg+xml' };
const allowed = new Set(['index.html','favicon.svg','src/app.js','src/styles.css','src/content.js','src/store.js']);
const server = http.createServer(async (req,res) => {
  if (!['GET','HEAD'].includes(req.method)) {res.writeHead(405);res.end();return;}
  try {
    const path = decodeURIComponent(new URL(req.url,'http://localhost').pathname).replace(/^\/+/, '') || 'index.html';
    if (!allowed.has(path)) {res.writeHead(404);res.end('Not found');return;}
    const data = await readFile(fileURLToPath(new URL(path,root)));
    res.writeHead(200,{'Content-Type':types[path.split('.').pop()] || 'application/octet-stream','X-Content-Type-Options':'nosniff'});
    res.end(req.method==='HEAD'?undefined:data);
  } catch {res.writeHead(400);res.end('Bad request');}
});
server.listen(Number(process.env.PORT || 3000),process.env.HOST || '127.0.0.1',()=>console.log(`Academy running at http://${process.env.HOST || '127.0.0.1'}:${process.env.PORT || 3000}`));
