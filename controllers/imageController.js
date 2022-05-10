// const fetch = require("node-fetch");
// const FormData = require("form-data");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

const uploadImage = (req, res) => {
	const imageFile = req.file;

	// Validate Image File type
	if (
		!["image/png", "image/jpeg", "image/jpg"].includes(imageFile.mimetype)
	) {
		res.status(400);
		throw new Error("Invalid File Type");
	}

	// Using cloudinary REST endpoint
	// const url = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`;
	// const formData = new FormData();
	// formData.append("upload_preset", process.env.CLOUDINARY_PRESET);
	// formData.append("file", fs.createReadStream(imageFile.path));

	// fetch(url, {
	// 	method: "POST",
	// 	body: formData,
	// })
	// 	.then((resp) => {
	// 		if (resp.ok) {
	// 			return resp;
	// 		} else {
	// 			throw new Error("Error with Cloudinary API");
	// 		}
	// 	})
	// 	.then((resp) => {
	// 		return resp.json();
	// 	})
	// 	.then((json) => {
	// 		console.log(json);
	// 		res.status(200).json({
	// 			success: true,
	// 			image_link: json.url,
	// 		});
	// 	})
	// 	.catch((err) => {
	// 		console.log(err);
	// 		res.status(400).json({
	// 			success: false,
	// 			message: err.message,
	// 		});
	// 	});

	// Using the Nodejs Cloudinary SDK
	cloudinary.config({
		cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
		upload_preset: process.env.CLOUDINARY_PRESET,
		secure: false,
	});

	cloudinary.uploader
		.unsigned_upload(imageFile.path, "dev-challenges")
		.then((image) => {
			// Remove file upon successful upload
			fs.unlinkSync(imageFile.path);
			res.status(200).json({
				success: true,
				image_link: image.url,
			});
		})
		.catch((err) => {
			// Remove file upon unsuccessful upload
			fs.unlinkSync(imageFile.path);
			res.status(400).json({
				success: false,
				error: err.message,
			});
		});
};

module.exports = {
	uploadImage,
};
