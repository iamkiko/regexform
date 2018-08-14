// validation script here
const inputs = document.querySelectorAll('input');

//getting patterns to test regex - must match whatever the property name is in form
const patterns = {
	username: /^[a-z\d]{5,12}$/i,
	password: /^[\w@-]{8,20}$/,
	telephone: /^\d{11}$/,
	slug: /^[a-z\d-]{8,20}$/,
	email: /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/ //brackets to evaluate separately
};

//validation function

function validate(field, regex) {
	if(regex.test(field.value)){ //checking if true or not and appending the classes vs field value
		field.className = 'valid';
	} else {
		field.className = 'invalid';
	}
}

inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
	// console.log(e.target.attributes.name.value); 
	validate(e.target, patterns[e.target.attributes.name.value])
});
});	