import test from 'node:test';
import assert from 'node:assert/strict';
import { pathways, grade, wordCount } from '../src/content.js';
test('Each pathway has usable content and valid answer keys',()=>{
 const ids = [];
 for(const p of Object.values(pathways)) {
  assert.equal(p.lessons.length,3); assert.equal(p.questions.length,5);
  for(const l of p.lessons) {ids.push(l.id);assert.ok(l.body && l.examples.length);}
  for(const q of p.questions) { assert.ok(q.answer>=0&&q.answer<q.options.length);assert.ok(q.explanation); }
  assert.equal(grade(p.questions,p.questions.map(q=>q.answer)),5);
  assert.equal(grade(p.questions,p.questions.map(q=>(q.answer+1)%q.options.length)),0);
  assert.equal(grade(p.questions,[]),0);
 }
 assert.equal(ids.length,new Set(ids).size);
});
test('Word count handles whitespace and empty drafts',()=>{assert.equal(wordCount('  '),0);assert.equal(wordCount('One\n two   three'),3);});
