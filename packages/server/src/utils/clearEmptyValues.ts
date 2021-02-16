export function clearEmptyValues(obj: object): object {
  const newObj: any = {}
  Object.entries(obj).forEach(([key, value]: [string, string]) => {
    if (value) newObj[key] = value
  })
  return newObj
}
