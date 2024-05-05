import { MongoClient, ServerApiVersion } from 'mongodb';
import { env } from '@/env';

const uri = env.MONGODB_CONNECTION_STRING;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const run = async () => {
  try {
    await client.connect();
    await client.db('admin').command({ ping: 1 });
    console.log('你已成功連上 MongoDB!');
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};
run().catch(console.dir);

export { client };
