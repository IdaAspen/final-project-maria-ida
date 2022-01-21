import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import dynamicData from './data/dynamicData.json';

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/finalproject';
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
mongoose.Promise = Promise;

// create a user schema with mongoose and use crypto for accessToken
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    storyCollection: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'StoryCollection'
    }
  },
  password: {
    type: String,
    required: true
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex')
  }
});

const User = mongoose.model('User', UserSchema);

// Schema for showing a users own saved stories
const StoryCollectionSchema = mongoose.Schema({
  description: String
});

const StoryCollection = mongoose.model(
  'StoryCollection',
  StoryCollectionSchema
);

// Schema for dynamicData.json
const ElementSchema = new mongoose.Schema({
  id: Number,
  label: String,
  list: String,
  image: String
});

const Element = mongoose.model('Element', ElementSchema);

const port = process.env.PORT || 8080;
const app = express();

// Allow all domains
app.use(cors());

// Only allow one:
// app.use(cors({
//   origin: 'https://my-frontend.com'
// }));

app.use(express.json());

// Add seedDatabase function

// Error handling if the server is not running
app.use((req, res, next) => {
  if (mongoose.connection.readyState === 1) {
    next();
  } else {
    res.status(503).json({ error: 'Service unavailable' });
  }
});

// Function for checking if user is logged in
const authenticateUser = async (req, res, next) => {
  const accessToken = req.header('Authorization');

  try {
    const user = await User.findOne({ accessToken });
    if (user) {
      next();
    } else {
      res.status(401).json({ response: 'Please log in', success: false });
    }
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
};

// Start defining routes here
app.get('/', (req, res) => {
  res.send(
    'This is the backend of the final project by Maria Petersson and Ida Aspen. Please visit <a href="#">frontend</a> for the main page!'
  );
});

// What you see when you are logged in added here, change "main"
app.get('/main', authenticateUser);
app.get('/main', (req, res) => {
  // const secrets = await Secret.find({});
  res.status(201).json({ response: 'ROAAAAR', success: true });
});

// app.get('/storycollection', authenticateUser);
app.post('/storycollection', async (req, res) => {
  const { description } = req.body;

  try {
    const newStoryCollection = await new StoryCollection({
      description
    }).save();
    res.status(201).json({ response: newStoryCollection, success: true });
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
});

// POST request for creating a user CONSOLE.LOG (storycollection)
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
    const salt = bcrypt.genSaltSync(); // Create a randomizer to prevent to unhash it
    const strongPassword =
      /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,20}$/;

    // checking if password match strongPassword = regex
    if (password.match(strongPassword)) {
      const newUser = await new User({
        username,
        password: bcrypt.hashSync(password, salt)
      }).save();
      res.status(201).json({
        response: {
          userId: newUser._id,
          username: newUser.username,
          accessToken: newUser.accessToken // add storycollection to response, console.log?
        },
        success: true
      });
    } else {
      throw 'Password must contain at least 8 characters, at least one letter, one number and one special character';
    }
  } catch (error) {
    res
      .status(400)
      .json({ response: 'problem with the signup', success: false });
  }
});

// POST request for signing in, match username and password
// if you include accessToken in your request = you are logged in
app.post('/signin', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({
        response: {
          userId: user._id,
          username: user.username,
          accessToken: user.accessToken
        },
        success: true
      });
    } else {
      res.status(404).json({
        response: "Username or password doesn't match.",
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
});

//app.get('element', authenticateUser)
app.get('/element', async (req, res) => {
  try {
    // const elementsList = await DynamicData.find();
    res.status(200).json({ response: dynamicData, success: true });
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
});

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`);
});
