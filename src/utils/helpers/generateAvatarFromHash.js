import tinycolor from 'tinycolor2';

const generateAvatarFromHash = (hash) => {
  const [r, g, b] = hash
    .substr(0, 3)
    .split('')
    .map((char) =>
      char.charCodeAt() + 10 > 255
        ? 255
        : char.charCodeAt() +10,
    );
    
  const color = tinycolor({ r, g, b });
  const colorLighten = tinycolor({ r, g, b }).lighten(40);
  return {
    color: color.toHexString(),
    colorLighten: colorLighten.toHexString(),
  };
};

export default generateAvatarFromHash;
