import fs from 'fs';
import {promisify} from 'util';

const readFileAsync = promisify(fs.readFile);

export function readDatabase(filePath) {
  return readFileAsync(filePath, 'utf8').
    then((data) => {
      const lines = data.trim().split('\n').
slice(1); // Skip the header
      const fields = {};

      lines.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (firstname && field) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      });

      return fields;
    }).
    catch((error) => {
      throw new Error('Cannot load the database');
    });
}
