# delete_all_derivatives_for_named_transformation

Tool written in JavaScript that deletes all derived for a defined Named Transformation. Useful in scenarios where an exsiting Named Transformation may need to be updated but may have greater than 1000 existing derivatives (https://cloudinary.com/documentation/image_transformations#named_transformations).

**Requirements:**
- Node.js - (https://nodejs.org)

## Configuration:

- `delete_all_derivatives_for_named_transformation.js`
  - `cloud_name: ''`
    - **Cloud name** value from the account's Cloudinary Dashboard > Account Details.
  - `api_key: ''`
    - **API Key** value from the account's Cloudinary Dashboard > Account Details.
  - `api_secret: ''`
    - **API Secret** value from the account's Cloudinary Dashboard > Account Details.

  - `NAMED_TRANSFORMATION = ''`
    - Named Transformation value from the account's Transformation > Named Transformations.

:warning: Note that this script will delete all of the derivatives for a specified Named Transformation. Pkease be certain that you have a clear understandong of this script's functionality prior to executing within a production envirnoment.
