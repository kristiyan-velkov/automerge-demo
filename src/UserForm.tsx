// MyForm.tsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Define the validation schema using Yup
const formSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must be only digits")
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone is required"),
});

const UserForm: React.FC = ({ doc, changeDoc }) => {
  return (
    <section className="flex h-screen pt-2 pb-60 bg-primary-50">
      <Formik
        initialValues={doc.form}
        validationSchema={formSchema}
        onSubmit={(values, { setSubmitting }) => {
          changeDoc((doc) => (doc.form = values));

          setSubmitting(false);
        }}
        className="mt-20"
      >
        <Form className="m-auto w-4/5 max-w-xl border border-neutral-300 shadow-md rounded-md bg-white p-10">
          <div className="flex flex-col py-5">
            <label
              htmlFor="name"
              className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name
            </label>
            <Field
              type="text"
              name="name"
              id="name"
              className="
          bg-white border border-gray-300 text-gray-900 text-sm rounded-lg
          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
          shadow-sm
        "
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-600 text-xs italic"
            />
          </div>
          <div className="flex flex-col py-5">
            <label
              htmlFor="email"
              className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <Field
              type="email"
              name="email"
              id="email"
              className="
          bg-white border border-gray-300 text-gray-900 text-sm rounded-lg
          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
          shadow-sm
        "
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-600 text-xs italic"
            />
          </div>
          <div className="flex flex-col py-5">
            <label
              htmlFor="phone"
              className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Phone
            </label>
            <Field
              type="text"
              name="phone"
              id="phone"
              className="
          bg-white border border-gray-300 text-gray-900 text-sm rounded-lg
          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
          shadow-sm
        "
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-red-600 text-xs italic"
            />
          </div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Submit
          </button>
        </Form>
      </Formik>
      <div className="bg-red-500 w-96 text-white p-10 text-xl flex flex-col h-screen">
        <div>{doc.form.name}</div>
        <div>{doc.form.email}</div>
        <div>{doc.form.phone}</div>
      </div>
    </section>
  );
};

export default UserForm;
