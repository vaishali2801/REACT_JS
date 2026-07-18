import * as yup from "yup";

const StudentValidation = yup.object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup
        .string()
        .email("Invalid email")
        .required("Email is required"),
    phoneNumber: yup.string().required("Phone number is required"),
    course: yup.string().required("Course is required"),
    terms: yup
        .boolean()
        .oneOf([true], "Terms must be accepted"),
});

export default StudentValidation;