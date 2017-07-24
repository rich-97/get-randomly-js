/**
 * (c) Ricardo Moreno <morenoricardo237@gmail.com>
 *
 * For more details about the license of this source code,
 * please view the license file LICENSE.
 */

/* Module export */

module.exports = getRandomly

/**
 * randomInt - Function get a random integer beetwen an interval.
 * @param {Integer} min
 * @param {Integer} max
 * @return {Integer}
 */
function randomInt (min, max) {
  const randomFloat = (Math.random() * (max - min)) + min

  return Math.floor(randomFloat)
}

/**
 * getRandomly - Function for get items randomly.
 * @param {Array|String|Object} iter - An iterator object.
 * @return {Any}
 */
function getRandomly (iter) {
  if (Array.isArray(iter) || typeof iter === 'string') {
    return iter[randomInt(0, iter.length)]
  } else {
    if (typeof iter === 'object') {
      const keys = Object.keys(iter)
      const randomIndex = randomInt(0, keys.length)

      return iter[keys[randomIndex]]
    } else {
      throw new Error('The parameter is not a iterator.')
    }
  }
}