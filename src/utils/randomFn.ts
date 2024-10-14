export const randomize = ({
  min = 0,
  max = 0,
  step = 1
}: {
  min: number
  max: number
  step: number
}) => {
  if (max < min || max - min < step) throw Error('wrong arguments')
  const num = Math.random() * (max - min) + min
  return Math.max(Math.floor(num / step) * step, min)
}

export const pickRandom = <T>({
  data = [],
  length = 1
}: {
  data: T[]
  length: number
}) => {
  const shuffled = [...data].sort(() => (Math.random() - 0.5 >= 0 ? 1 : -1))
  return shuffled.slice(0, length)
}

export const waitFor = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms))
