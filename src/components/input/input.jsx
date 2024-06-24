import './input.scss'


// eslint-disable-next-line react/prop-types
const Input = ({ label, value, type, name, onChange }) => {
    return (
        <div className="form_component">
            {label && <label htmlFor="input-field">{label}</label>}
            <input
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                className='input_tag'
            />
        </div>
    )
}

export default Input