function c5tojson (contents) {
  const parts = contents
    .toString()
    .split('\n_____\n\n')

  parts.splice(0, 2)

  return parts.reduce((result, val, idx) => {
    const words = val.split('\n')

    result[words[0]] = words
        .slice(2)
        .map(
          (word) => word.replace(/^.*\./, '').trim()
        )

    if (idx === parts.length - 1) result[words[0]].pop()

    return result
  }, {})
}

module.exports = c5tojson
