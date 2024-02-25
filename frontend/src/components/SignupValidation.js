
function validation(values) {

    alert("");
    let error = {};

    if (values.name === "") {
        error.name = "Name shoud not be empty";
    } else {
        error.name = "";
    }


    if (values.email === "") {
        error.email = "Email shoud not be empty";
    } else {
        error.email = "";
    }

    if (values.password === "") {
        error.password = "Password shoud not be empty";

    } else {
        error.password = "";
    }
    return error;
}

export default validation;
