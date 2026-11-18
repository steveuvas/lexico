const test = require('node:test');
const assert = require('node:assert/strict');
const {advance} = require('./learning.cjs');
const {words} = require('./material.json');
const runStep = (action, run) => advance(action, run, [], [], new Date('2026-11-18T12:00:00Z'));
const word = es => String(words.find(w => w.es === es).id);
const startWord = format => runStep({op:'start',mode:'word',key:word('dormir'),format}).run;

test('a wrong translation keeps the left word selected; correcting it does not grade it twice', () => {
  const run = runStep({op:'start',mode:'daily'}).run;
  const left = word('el pez');
  const wrong = runStep({op:'pair',left,right:word('la calle')},run);
  assert.equal(wrong.run.step.pairLeft,left);
  assert.equal(wrong.run.step.pairRight,null);
  const fixed = runStep({op:'pair',left:wrong.run.step.pairLeft,right:left},wrong.run);
  assert.deepEqual(fixed.run.step.match,[left]);
  assert.equal(fixed.run.step.pairLeft,null);
  assert.equal(fixed.events.length,0);
  assert.equal(fixed.cards.length,0);
  assert.equal(fixed.run.backlog.length,1);
});

test('dormir grades each person and retries only the missed accent, in a new phrase', () => {
  const run = startWord('all');
  assert.deepEqual(run.q[0].parts.map(p=>p.answers[0]),['duermo','duermes','duerme','dormimos','dormís','duermen']);
  const result=runStep({op:'answer',values:['duermo','duermes','duerme','dormimos','dormis','duermen']},run);
  assert.deepEqual(result.events.map(e=>e.kind),['good','good','good','good','accent','good']);
  assert.equal(result.run.backlog.length,1);
  assert.equal(result.run.backlog[0].prompt,'Vosotros ___ ocho horas.');
  assert.deepEqual(result.run.backlog[0].answers,['dormís']);
});

test('mixed format selects three distinct persons without replacing translation practice', () => {
  const parts=startWord('mixed').q[0].parts;
  assert.equal(parts.length,3);
  assert.equal(new Set(parts.map(p=>p.person)).size,3);
  assert.ok(parts.every(p=>p.id.startsWith('verb:dormir:')));
  assert.equal(startWord('write').q[0].prompt,'спать');
});

test('revealing the possessive answer schedules a contextual mesas correction', () => {
  const run=runStep({op:'start',mode:'topic',key:'poss'}).run;
  run.pos=run.q.findIndex(q=>q.id==='poss:mias');
  const {events,run:checked}=runStep({op:'answer',values:[],reveal:true},run);
  assert.equal(events[0].kind,'shown');
  const [retry]=checked.backlog;
  assert.equal(retry.prompt,'Estas mesas son ___.');
  assert.equal(retry.translation,'Эти столы мои.');
  assert.deepEqual(retry.answers,['mías']);
  assert.match(retry.explanation,/mesas/i);
  assert.doesNotMatch(retry.explanation,/llaves/i);
});
