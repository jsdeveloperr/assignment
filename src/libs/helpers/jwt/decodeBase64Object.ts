import { Buffer } from 'buffer';

export const decodeBase64Object = (object: any) => {
  return Buffer.from(JSON.stringify(object)).toString('base64');
};

export default decodeBase64Object;
