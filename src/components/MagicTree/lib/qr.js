import QRCode from 'qrcode';

export async function qrToMatrix(value, errorCorrectionLevel = 'M') {
  const qr = QRCode.create(String(value || ' '), { errorCorrectionLevel });
  const size = qr.modules.size;
  const data = qr.modules.data;
  const matrix = Array.from({ length: size }, (_, y) =>
    Array.from({ length: size }, (_, x) => Boolean(data[y * size + x]))
  );
  return { matrix, size, version: qr.version, errorCorrectionLevel };
}
