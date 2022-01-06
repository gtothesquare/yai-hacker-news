import { NextApiRequest } from 'next';

export function getAbsoluteUrl({ req }: { req: NextApiRequest }) {
  let host;
  let protocol = 'http:';
  if (!req) {
    return {};
  }
  if (req && req.headers) {
    host = req.headers.host;
  } else if (typeof window !== 'undefined') {
    host = window.location.host;
    protocol = window.location.protocol;
  }

  if (
    req &&
    req.headers['x-forwarded-host'] &&
    typeof req.headers['x-forwarded-host'] === 'string'
  ) {
    host = req.headers['x-forwarded-host'];
  }

  if (
    req &&
    req.headers['x-forwarded-proto'] &&
    typeof req.headers['x-forwarded-proto'] === 'string'
  ) {
    protocol = `${req.headers['x-forwarded-proto']}:`;
  }
  return {
    protocol,
    host,
    origin: `${protocol}//${host}`,
  };
}
