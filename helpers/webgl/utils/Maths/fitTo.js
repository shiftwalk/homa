export default function (camera, z, fWidth, fHeight) {
  const distance = camera.position.z - z;
  const aspect = fWidth / fHeight;
  const vFov = (camera.fov * Math.PI) / 180;

  const height = 2 * Math.tan(vFov / 2) * distance;
  const width = height * aspect;

  return {
    width,
    height,
  };
}
