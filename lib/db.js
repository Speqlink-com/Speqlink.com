import { MongoClient } from "mongodb";

const options = {};

/**
 * Returns a promise that resolves to a connected MongoClient.
 * Validation is deferred to runtime so the build doesn't fail
 * when MONGODB_URI is not set in the environment.
 */
export function getClientPromise() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("Please add your MongoDB URI to .env.local");
  }

  if (process.env.NODE_ENV === "development") {
    // Reuse connection across hot-reloads in dev
    if (!global._mongoClientPromise) {
      const client = new MongoClient(uri, options);
      global._mongoClientPromise = client.connect();
    }
    return global._mongoClientPromise;
  }

  // In production, create a new client per invocation
  const client = new MongoClient(uri, options);
  return client.connect();
}

// Default export kept for backward compatibility — same lazy behaviour
export default getClientPromise;
