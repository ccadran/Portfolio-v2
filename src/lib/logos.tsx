export async function getLogosImgs(logos: string) {
  const logosArray = logos.split(",").map((logo) => logo.trim());
  const logosImgs = logosArray.map((logo: string) => {
    const logoImg = `/assets/logos/${logo}.svg`;
    return logoImg;
  });

  return logosImgs;
}
