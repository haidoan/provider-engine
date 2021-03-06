import test from 'tape'
import {cacheIdentifierForPayload} from '../util/rpc-cache-utils'

test('cacheIdentifierForPayload for latest block', function (t) {
  const payload1 = {id: 1, jsonrpc: '2.0', params: ['latest', false], method: 'eth_getBlockByNumber'}
  const payload2 = {id: 2, jsonrpc: '2.0', params: ['0x0', false], method: 'eth_getBlockByNumber'}
  const cacheId1 = cacheIdentifierForPayload(payload1, { includeBlockRef: true })
  const cacheId2 = cacheIdentifierForPayload(payload2, { includeBlockRef: true })

  t.notEqual(cacheId1, cacheId2, 'cacheIds are unique')
  t.end()
})
