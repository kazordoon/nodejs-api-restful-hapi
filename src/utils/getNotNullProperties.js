function getNotNullProperties (target) {
  const notNullProperties = Object.entries(target)
    .filter(([key, value]) => {
      if (value) {
        return [key, value]
      }
    })
    .map(([key, value]) => ({
      [key]: value
    }))
    .reduce((previous, current) => ({
      ...previous,
      ...current
    }), {})

  return notNullProperties
}

module.exports = getNotNullProperties
