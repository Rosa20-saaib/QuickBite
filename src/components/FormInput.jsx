
function FormInput({ label, name, type, value, onChange }) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>

      <input
        type={type}
        name={name}
        className="form-control"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default FormInput;
