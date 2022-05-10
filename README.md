# Image Uploader Express Backend Project (The backend for the Image Uploader Website deployed [here](https://imageuploader-adeoluwa.netlify.app/).)

This project was developed using `Node` v "^16.13.0", `Express` v "^4.16.1", `Multer` v "^1.4.4", `Form-data` v "^4.0.0", and `Cloudinary` v "^1.29.1" libraries.

Deployed on a `Digital Oceans` Droplet using `Github Actions` for CI/CD.

The Image Uploader Website was deployed with `Netlify` link [here](https://imageuploader-adeoluwa.netlify.app/).

Figma design was provided by [devChallenges.io](https://devchallenges.io/).

You can clone project and customise at your end.

### API Documentation

- 'http://localhost:8000/v1/image/' Endpoint

METHOD: 'POST'

BODY: {'file': Image File}

SUCCESS RESPONSE (200): {'success': true, 'image_link': '**********'}

ERROR RESPONSE (4**, 5**): {'success': false, 'error': '***********'}
