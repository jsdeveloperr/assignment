import { Buffer } from 'buffer';

export const decodeBase64 = (data: any) => {
  return Buffer.from(data, 'utf8').toString('base64');
};

export default decodeBase64;
