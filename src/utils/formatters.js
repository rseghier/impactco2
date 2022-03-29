export function formatNumber(value) {
  let tempTotal = Math.round(value * 100000) / 100000
  tempTotal =
    tempTotal > 0.001 ? Math.round(tempTotal * 10000) / 10000 : tempTotal
  tempTotal =
    tempTotal > 0.001 ? Math.round(tempTotal * 1000) / 1000 : tempTotal
  tempTotal = tempTotal > 0.01 ? Math.round(tempTotal * 100) / 100 : tempTotal
  tempTotal = tempTotal > 0.1 ? Math.round(tempTotal * 10) / 10 : tempTotal
  tempTotal = tempTotal > 1 ? Math.round(tempTotal * 1) / 1 : tempTotal
  return tempTotal.toLocaleString('fr-fr')
}

export function formatName(name, value) {
  return name
    .replaceAll('[s]', value > 1 ? 's' : '')
    .toLowerCase()
    .replaceAll('[x]', value > 1 ? 'x' : '')
    .toLowerCase()
}
