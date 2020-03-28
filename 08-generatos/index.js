/**
 * Some function that can pause and resume
 */
function *g1() {
  console.log('Hello');
  yield 'Yield 1 Ran...';
  console.log('World');
  yield 'Yield 1 Ran...';
  return 'Returned';
}

let g = g1();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);