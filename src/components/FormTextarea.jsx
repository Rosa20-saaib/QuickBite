
function FormTextarea({ label, name, value, onChange }) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>

      <textarea
        name={name}
        className="form-control"
        rows="4"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default FormTextarea;
