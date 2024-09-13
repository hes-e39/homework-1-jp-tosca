import fetch from 'node-fetch';
// Recommend using node-fetch for those familiar with JS fetch

const COLORS = 'https://nt-cdn.s3.amazonaws.com/colors.json';

/**
 * @param name filter for color name
 * @param hex filter for color hex code
 * @param compName filter for complementary color name
 * @param compHex filter for complementary color hex code
 * @returns Promise
 */
const fetchColors = ({ name, hex, compName, compHex }) => {

  const filter = fetch(COLORS)
    .then(response => response.json())
    .then(colors => {
      if (name != undefined) {
        return colors.filter(
          color => color.name.toLowerCase() === name.toLowerCase()
        );
      }
      if (hex != undefined) {
        return colors.filter(
          color => color.hex.toLowerCase() === hex.toLowerCase()
        );
      }
      if (compName != undefined) {
        return colors.filter(
          color => color.comp.some(
            compColor => compColor.name.toLowerCase().includes(compName.toLowerCase())
          )
        );
      }
      if (compHex != undefined) {
        return colors.filter(
          color => color.comp.some(
            compColor => compColor.hex.toLowerCase().includes(compHex.toLowerCase())
          )
        );
      }
    })
  return filter;
};

// Leave this here
export default fetchColors;
 