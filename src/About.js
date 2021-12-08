import * as React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
// const AboutForm = () => {};
// export function About() {
//   const validateAboutForm = (values) => {
//     console.log("validateAboutForm", values);
//     const errors = {}
//     if (values.email.length < 5) {
//       errors.email = "Please provies a valid email adress";
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//       errors.email = "Invalid email address";
//     }
//     if (values.password.length > 8) {
//       errors.email = "Please provies a valid email password";
//     }
//     if (values.password.length < 12) {
//       errors.email = "Please provies a valid email password";
//     }
//     console.log(errors)
//     return errors
//   };
//   return (
//     <Formik
//       initialValues={{ email: "", password: "" }}
//       validate={validateAboutForm}
//       onSubmit={(values) => {
//         console.log("onSubmit", values);
//       }}
//     >
//       {(formik) => (
//         <form onSubmit={formik.handleSubmit}>
//           <input
//             id="email"
//             type="email"
//             value={formik.values.email}
//             onChange={formik.handleChange}
//             onBlur={formik.handleChange}
//           />
//           {formik.errors.email && formik.touched.email && formik.errors.email}
//           <input
//             name="password"
//             type="password"
//             value={formik.values.password}
//             onChange={formik.handleChange}
//             onBlur={formik.handleChange}
//           />
//           {formik.errors.password &&
//             formik.touched.password &&
//             formik.errors.password}
//           <button type="submit">Submit</button>
//         </form>
//       )}
//     </Formik>
//   );
// }
// export function About() {
//   const validateAboutForm = (values) => {
//     console.log("validateAboutForm", values);
//     const errors = {};
//     if (values.email.length < 5) {
//       errors.email = "Please provies a valid email adress";
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//       errors.email = "Invalid email address";
//     }
//     if (values.password.length < 8) {
//       errors.password = "Please provies a valid email password";
//     }
//     if (values.password.length > 12) {
//       errors.password = "Please provies a valid email password";
//     }
//     console.log(errors);
//     return errors;
//   };
//   const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
//     useFormik({
//       initialValues: { email: "", password: "" },
//       validate: validateAboutForm,
//       onSubmit: (values) => {
//         console.log("onSubmit", values);
//       },
//     });
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         value={values.email}
//         onChange={handleChange}
//         onBlur={handleBlur}
//       />
//       {errors.email && touched.email && errors.email}
//       <input
//         id="password"
//         name="password"
//         type="password"
//         value={values.password}
//         onChange={handleChange}
//         onBlur={handleBlur}
//       />
//       {errors.password &&
//         touched.password &&
//         errors.password}
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
export function About() {
  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: { email: "", password: "" },
      // validate: validateAboutForm,
      validationSchema: yup.object({
        email: yup
          .string()
          .min(5, "Enter valid Email adress")
          .required("Please provied an email adress")
          .matches(
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test,
            "parttern not matched"
          ),
        password: yup
          .string()
          .min(8, "Enter valid Email password")
          .max(12, "Please Enter valid Email password")
          .required("Please Enter valid Email password"),
      }),
      onSubmit: (values) => {
        console.log("onSubmit", values);
      },
    });
  return (
    <form onSubmit={handleSubmit} style={{height: "100vh"}}>
      <input
        id="email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.email && touched.email && errors.email}
      <input
        id="password"
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.password && touched.password && errors.password}
      <button type="submit">Submit</button>
    </form>
  );
}