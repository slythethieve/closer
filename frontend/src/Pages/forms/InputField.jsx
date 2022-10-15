import './form.scss'

const InputField = ({label,...props}) => {
	return (
		<div className='form-control'>
			<label>{label}</label>
			<input {...props}/>
		</div>
	)
}

export default InputField