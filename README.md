# delete_all_derivatives_for_named_transformation

Tool written in JavaScript that deletes all derived for a defined Named Transformation. Useful in scenarios where an exsiting Named Transformation may need to be updated but may have greater than 1000 existing derivatives (https://cloudinary.com/documentation/image_transformations#named_transformations).

**Requirements:**
- Node.js - (https://nodejs.org)

## Configuration:

- `cloud_name: ''`
  - This is the Cloud Name from Cloudinary Dashboard Account Details.
- `api_key: ''`
- `api_secret: ''`

- `NAMED_TRANSFORMATION = ''`
