const express = require('express');
const connectDB = require('./config/db');
const app = express();

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API bezi'));

//Define routes
//app.use('/api/users', require('./routes/api/users'));
//app.use('/api/auth', require('./routes/api/auth'));
//app.use('/api/profile', require('./routes/api/profile'));
//app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/flags', require('./routes/api/flags'));
app.use('/api/flagtrace', require('./routes/api/flagtrace'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
