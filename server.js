const express = require('express');
var cors = require('cors');
const connectDB = require('./config/db');
const app = express();

//Connect Database
connectDB();

const allowedOrigins = ['http://localhost:3000'];
app.use(
	cors({
		origin: function (origin, callback) {
			if (!origin) return callback(null, true);
			if (allowedOrigins.indexOf(origin) === -1) {
				const msg =
					'The CORS policy for this site does not allow access from the specified Origin.';
				return callback(new Error(msg), false);
			}
			return callback(null, true);
		},
	})
);

//Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API bezi'));

//Define routes
//app.use('/api/users', require('./routes/api/users'));
//app.use('/api/auth', require('./routes/api/auth'));
//app.use('/api/profile', require('./routes/api/profile'));
//app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/flags', require('./routes/api/flags'));
//app.use('/api/flagtrace', require('./routes/api/flagtrace'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
