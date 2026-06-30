import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

const Formik_02 = () => {
    return (
        <>
            <Formik initialValues={{ name: "", email: "", password: "" }}

                    onSubmit={(values, { resetForm }) => { 
                        console.log(values);
                        alert("Form Submitted");
                        resetForm();}} 

                    validationSchema={Yup.object({
                    name: Yup.string()
                        .min(2,"min 2 character required")
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    password: Yup.string()
                        .min(6,"minimum 6 character is required")
                        .max(10, 'Must be 20 characters or less')
                        .required('Required'),
                    email: Yup.string().email('Invalid email address').required('Required'),
                })}>

                <Form>
                    <Field type="text" name="name" placeholder="enter name"/>
                    <ErrorMessage name="name"/>
                    <br />
                    <br />
                    <Field type="email" name="email" placeholder="enter email"/>
                    <ErrorMessage name="email" />
                    <br />
                    <br />
                    <Field type="text" name="password" placeholder="enter password"/>
                    <ErrorMessage name="password" />
                    <br />
                    <br />
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>

        </>
    )
}

export default Formik_02
