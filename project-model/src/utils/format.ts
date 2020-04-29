import numeral from 'numeral'

const format = (num: number) => {
  return numeral(num).format('$0,0.00')
}

export default format
