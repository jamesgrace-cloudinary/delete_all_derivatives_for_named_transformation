# delete_all_derivatives_for_named_transformation

Tool written in JavaScript that deletes all derived for a defined Named Transformation. Useful in scenarios where an exsiting Named Transformation may need to be updated but may have greater than 1000 existing derivatives (https://cloudinary.com/documentation/image_transformations#named_transformations).

**Requirements:**
- Node.js - (https://nodejs.org)

## Configuration:

- `delete_all_derivatives_for_named_transformation.js`
  - `cloud_name: ''`
    - Cloud Name value from Cloudinary Dashboard > Account Details.
  - `api_key: ''`
    - API Key value from Cloudinary Dashboard > Account Details.
  - `api_secret: ''`
    - API Secret value from Cloudinary Dashboard > Account Details.

  - `NAMED_TRANSFORMATION = ''`
    - Named Transformation value from.
