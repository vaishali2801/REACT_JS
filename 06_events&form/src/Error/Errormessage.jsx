import React from "react";
import { ErrorMessage } from "formik";

const Errormessage = ({name}) => {
    return (
        <>
            <ErrorMessage name={name}>
                {(msg) => (
                    <div style={{ color: "red" }}>
                        {msg}
                    </div>
                )}
            </ErrorMessage>
        </>
    );
};

export default Errormessage;