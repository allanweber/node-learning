import { expect } from 'chai'
import format from './format'

describe('Numeral test', () => {
  it('Should be $1,000.00', () => {
    expect(format(1000)).to.equal('$1,000.00')
  })
})
