export async function getLogosImgs(logos: string) {
  const logosArray = logos.split(",");
  const logosImgs = logosArray.map((logo: string) => {
    const logoImg = require(`../public/images/logos/${logo}.svg`);
    return logoImg;
  });
  return logosImgs;
}
