import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const data = req.body;
    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.USER_NAME}:${process.env.DATABASE_PASSWORD}@cluster0.vnelg.mongodb.net/meetups?retryWrites=true&w=majority`
    );
    const db = client.db();
    const meetupCollection = db.collection('meetups');
    const result = await meetupCollection.insertOne(data);
    // eslint-disable-next-line no-console
    console.log(result);
    client.close();
    res.status(201).json({ message: 'Meetup inserted' });
  }
};

export default handler;
