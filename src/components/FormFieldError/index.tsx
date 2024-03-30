const FormFieldError = (fieldName: any, formik: any) => {
  return (
    formik.touched[fieldName] &&
    formik.errors[fieldName] && (
      <div
        id="Authentication_quick_rid_error_input"
        className="el-form-item__error is-error primo-error"
      >
        {formik.errors[fieldName]}
      </div>
    )
  );
};
export default FormFieldError;
