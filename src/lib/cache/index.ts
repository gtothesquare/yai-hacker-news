import Redis, { Ok } from 'ioredis';

function retryStrategy(times: number) {
  // increments retry time 1 second per time it retries.
  // times specifies in which retry we are.
  return Math.min(times * 1000, 60000);
}

function getHostName(url: string) {
  if (url) {
    const urlSplit = url.split('@');
    if (urlSplit.length > 1) {
      return urlSplit[1];
    }
    return urlSplit[0];
  }
  return null;
}

let redis: Redis.Redis;
const connectionUrl = process.env.REDIS_URL;
if (connectionUrl) {
  redis = new Redis(connectionUrl, { retryStrategy });
  // Redis event listeners
  redis.on('error', (err) => {
    console.error(`Cache Middleware: ${err}`);
  });

  redis.on('connect', () => {
    console.info(`Connected to ${getHostName(connectionUrl)}`);
  });
} else {
  console.info(`NOT connected to Redis`);
}

export async function setValue(
  key: string,
  value: Record<string, unknown>,
  expiryMode?: string | any[],
  time?: number | string
): Promise<Ok | null> {
  try {
    const stringVal = JSON.stringify(value);
    return redis?.set(key, stringVal, expiryMode, time);
  } catch (err) {
    console.warn(err);
  }
  return null;
}

export async function getValue(
  key: string
): Promise<Record<string, unknown> | null> {
  try {
    const value = await redis?.get(key);
    if (value) {
      return JSON.parse(value);
    }
  } catch (err) {
    console.warn(err);
  }
  return null;
}
