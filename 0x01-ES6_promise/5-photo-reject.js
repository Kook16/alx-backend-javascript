export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    reject(`${fileName} cannot be processed`)
  });
}
