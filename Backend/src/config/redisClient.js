import redis from "redis";

const redisClient = redis.createClient();

const connectRedis = async () => {
  try {
    redisClient.on("error", (err) => {
      console.error("Redis client error: " + err);
    });

    redisClient.on("ready", () => {
      console.log("[Redis] Redis client ready");
    });

    await redisClient.connect();
    await redisClient.ping();
  } catch (err) {
    console.error("[Redis] Failed to connect to Redis: " + err);
    process.exit(1);
  }
};

export { redisClient, connectRedis };
