const assertObjectsEqual = require('../assertObjectsEqual');

assertObjectsEqual({}, {});
assertObjectsEqual({ hello: 'hello' }, { hello: 'hello' });
assertObjectsEqual({ hello: 'hello' }, { hello: 'hell' }); // expect false message.
assertObjectsEqual({ hello: 'hello' }, { hello: 1 }); // expect false message.
assertObjectsEqual({ hello: 1 }, { hello: 1 });
assertObjectsEqual({ hello: [1, 2] }, { hello: [1, 2] });
assertObjectsEqual({ hello: [1, 2] }, { hello: [1] }); // expect false message.
assertObjectsEqual(undefined, { hi: 'hello' }); // expect false message.
assertObjectsEqual({ hi: 'hello' }, undefined); // expect false message.