# delete_all_derivatives_for_named_transformation

Tool written in JavaScript that deletes all derived for a defined Named Transformation. Useful in scenarios where an exsiting Named Transformation may need to be updated but may have greater than 1000 existing derivatives (https://cloudinary.com/documentation/image_transformations#named_transformations).

**Requirements:**
- Node.js - (https://nodejs.org)

## Configuration:

- `delete_all_derivatives_for_named_transformation.js`
  - `cloud_name: 'example-cloudname'`
    - **Cloud name** replace the `example-cloudname` value from the account's Cloudinary Dashboard > Account Details.
  - `api_key: '0123456789'`
    - **API Key** replace the `0123456789` value from the account's Cloudinary Dashboard > Account Details.
  - `api_secret: 'abcdefgh_ijklmnop'`
    - **API Secret** replace the `abcdefgh_ijklmnop` value from the account's Cloudinary Dashboard > Account Details.

  - `NAMED_TRANSFORMATION = 'example_named_transformation'`
    - **Named Transformation** replace the `example_named_transformation` value from the account's Transformation > Named Transformations.

:warning: Note that **this script will delete all of the derivatives for a specified Named Transformation!** Pkease be certain that you have a clear understanding of this script's functionality prior to executing against a production Cloudinary sub-account.
