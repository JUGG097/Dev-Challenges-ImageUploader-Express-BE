var createError = require("http-errors");
var express = require("express");
var path = require("path");
const dotenv = require("dotenv").config();
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var imageRouter = require("./routes/imageRoutes");

var app = express();

// var corsOptions = {
// 	origin: "http://localhost:3000/",
// 	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };
app.use(cors());
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/v1/image", imageRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	// res.status(err.status || 500);
	res.status(err.status || 500);
	res.json({ success: false, error: err.message });
});

module.exports = app;
