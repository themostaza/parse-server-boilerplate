import test from 'ava'
import sinon from 'sinon'
import example from '../../src/cloud/exampleFunction'

test.beforeEach(t => {
  const res = {}
  res.success = sinon.spy()
  res.error = sinon.spy()
  t.context.res = res
})

test('should fail', async t => {
  const res = t.context.res
  const user = null
  const params = {}
  await example({ user, params }, res)
  t.false(res.success.calledOnce)
  t.true(res.error.calledOnce)
})

test('should succeed', async t => {
  const res = t.context.res
  const user = 'testUser'
  const params = { timer: 500 }
  await example({ user, params }, res)
  t.true(res.success.calledOnce)
  t.false(res.error.calledOnce)
})
