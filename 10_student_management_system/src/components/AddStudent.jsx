
//react bootstrap
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap"

//formik & yup
import * as formik from 'formik';
import * as yup from 'yup';

//components
import StudentValidation from '../validation/StudentValidation';
import { AddStudents, DeleteStudent } from "../APi/StudentFetch";
// import { AddStudents } from "../APi/StudentAxios";

import { useNavigate } from "react-router-dom";

function AddStudent() {
    const { Formik } = formik;
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
            await DeleteStudent(id);
            handleDelete()
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <Formik

            validationSchema={StudentValidation}
            onSubmit={async (values, { resetForm }) => {
                try {
                    const data = await AddStudents(values);

                    console.log(data);
                    navigate("/");

                    alert("Student Added Successfully");

                    resetForm();
                } catch (err) {
                    alert(err.message);
                }
            }}
            initialValues={{
                firstName: '',
                lastName: '',
                email: "",
                phoneNumber: "",
                course: "",
                terms: false,
            }}
        >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationFormik01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                value={values.firstName}
                                onChange={handleChange}
                                isValid={touched.firstName && !errors.firstName}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationFormik02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                isValid={touched.lastName && !errors.lastName}
                            />

                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationFormik03">
                            <Form.Label>email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="enter email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                            />

                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationFormik04">
                            <Form.Label>phoneNumber</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="enter phoneNumber"
                                name="phoneNumber"
                                value={values.phoneNumber}
                                onChange={handleChange}
                                isInvalid={!!errors.phoneNumber}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.phoneNumber}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationFormik05">
                            <Form.Label>course</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="enter course"
                                name="course"
                                value={values.course}
                                onChange={handleChange}
                                isInvalid={!!errors.course}
                            />

                            <Form.Control.Feedback type="invalid">
                                {errors.course}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            name="terms"
                            checked={values.terms}
                            onChange={handleChange}
                            isInvalid={!!errors.terms}
                            label="Agree to terms and conditions"
                            feedback={errors.terms}
                            feedbackType="invalid"
                            id="validationFormik0"
                        />
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
                </Form>
            )}
        </Formik>
    );
}

export default AddStudent;