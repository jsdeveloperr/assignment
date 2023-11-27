import { Buffer } from 'buffer';

export const encodeBase64Object = (base64: any) => {
  return JSON.parse(Buffer.from(base64, 'base64').toString('utf-8'));
};

export default encodeBase64Object;
