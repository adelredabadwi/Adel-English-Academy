import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
test('HTTP server serves all application assets and rejects private paths',async()=>{
 const child=spawn(process.execPath,['server.mjs'],{cwd:new URL('../',import.meta.url),env:{...process.env,PORT:'3197'},stdio:['ignore','pipe','pipe']});
 try {
  await Promise.race([once(child.stdout,'data'),new Promise((_,reject)=>{const t=setTimeout(()=>reject(Error('Server startup timed out')),5000);t.unref();})]);
  for(const path of ['','favicon.svg','src/app.js','src/content.js','src/store.js','src/styles.css']) {
   const response=await fetch('http://127.0.0.1:3197/'+path);assert.equal(response.status,200,path);assert.ok((await response.text()).length>0);
  }
  assert.equal((await fetch('http://127.0.0.1:3197/.env')).status,404);
  assert.equal((await fetch('http://127.0.0.1:3197/server.mjs')).status,404);
  assert.equal((await fetch('http://127.0.0.1:3197/',{method:'POST'})).status,405);
 } finally {child.kill();}
});
