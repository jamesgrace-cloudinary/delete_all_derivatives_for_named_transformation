const cloudinary = require('cloudinary').v2;


cloudinary.config({
	cloud_name: 'example-cloudname',
	api_key: '0123456789',
	api_secret: 'abcdefgh_ijklmnop',
	secure: true
});

NAMED_TRANSFORMATION = 'example_named_transformation';


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


function listTransformationDetails(result, next_cursor = null) {

console.log('Deleting all derivatives + invalidating for the [ ' + NAMED_TRANSFORMATION + ' ] Named Transformation...');

	cloudinary.api.transformation(NAMED_TRANSFORMATION,
		{
			max_results: 100, //can be any value up to 500 but 100 is the maximum for delete_derived_resources
			next_cursor: next_cursor
		},
		function(err, res) {
			res.derived.forEach(function(derivative){
				result.push(derivative.id);
			});
			if (res.next_cursor) {
					console.log(result);
				deleteDerivedResources(result);
				result = [];
				listTransformationDetails(result, res.next_cursor);
			} else if (res.next_cursor == null && result != "") {
					console.log(result);
				deleteDerivedResources(result);
			} else {
					console.log('[ Processing Completed ]');
			}
		});

} // listTransformationDetails



function deleteDerivedResources(result) {

cloudinary.api.delete_derived_resources(result,
	{
		invalidate: true
	})
			.catch(error => console.log(error));

} // deleteDerivedResources



let result = [];
listTransformationDetails(result);
