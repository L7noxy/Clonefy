import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;

console.log("URI lida no Docker:", uri);

const connectDB = async () => {
  try {
    mongoose.connect(uri)
      .then(() => console.log("MongoDB conectado"))
      .catch(err => console.error("Erro ao conectar no MongoDB:", err));

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB;