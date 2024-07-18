import mongoose from 'mongoose';

const dbURI = 'mongodb+srv://akshat123:qwerty123@real-estate.21f1utk.mongodb.net/?retryWrites=true&w=majority&appName=real-estate';

mongoose.connect(dbURI, {})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log('MongoDB connection error: ', err));

export default mongoose;
