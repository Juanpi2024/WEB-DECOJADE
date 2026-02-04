const QRCode = require('qrcode');
const path = require('path');

const url = 'https://decojade-web.vercel.app';
const outputPath = path.join(__dirname, '../public/site-qr.png');

QRCode.toFile(outputPath, url, {
    color: {
        dark: '#000000',  // Black dots
        light: '#FFFFFF'  // White background
    },
    width: 500
}, function (err) {
    if (err) throw err;
    console.log('QR Code generated successfully at ' + outputPath);
});
