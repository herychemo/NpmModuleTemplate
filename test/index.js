
import test from 'tape';
import MyModuleObject from '../build/index';

test('test results', (t) => {
  const instance = MyModuleObject();

  t.notSame(instance.anyValue, null,
    'It should have a value');

  t.same(instance.anyValue, 80,
    'It should be 80');

  t.end();
});
