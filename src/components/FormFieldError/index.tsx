const FormFieldError = (fieldName: any, formik: any) => {
  return (
    formik.touched[fieldName] &&
    formik.errors[fieldName] && (
      <div className="alert-error">{formik.errors[fieldName]}</div>
    )
  );
};
export default FormFieldError;
