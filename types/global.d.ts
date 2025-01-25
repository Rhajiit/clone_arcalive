export {};

declare global {
  const _mongo: Promise<MongoClient> | undefined;
}
