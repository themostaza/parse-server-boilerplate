import test from 'ava'
import sinon from 'sinon'
import WinstonLogger from '../../src/utils/logger'
const console = WinstonLogger('test')

test.beforeEach(t => {
  console.log = sinon.spy()
  console.error = sinon.spy()
  t.context.log = console.log
  t.context.error = console.error
})

test('should print the log', async t => {
  console.log = t.context.log
  console.log('dumb test')
  console.error = t.context.error
  console.error('dumb test')
  console.error('dumb test')
  t.true(console.log.calledOnce)
  t.true(console.error.calledTwice)
})
