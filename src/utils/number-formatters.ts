export const durationFormatter = (val?: number) => {
  if (val === undefined) {
    return ''
  }

  const hrs = Math.trunc(val / 60)
  const mins = val % 60

  return `${hrs}h ${mins}min`
}

export const scoreFormatter = (val?: number) => {
  if (val === undefined) {
    return ''
  }

  return Intl.NumberFormat('en-US', {
    maximumFractionDigits: 1,
    minimumFractionDigits: 1,
  }).format(val)
}
