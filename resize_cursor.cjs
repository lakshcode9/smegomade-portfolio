const sharp = require('sharp');

sharp('public/images/cursor.png')
  .resize({ width: 42 })
  .png({ quality: 100 })
  .toFile('public/images/cursor_small.png')
  .then(() => console.log('Cursor perfectly resized for CSS rule limits!'))
  .catch(err => console.error('Error resizing cursor:', err));
