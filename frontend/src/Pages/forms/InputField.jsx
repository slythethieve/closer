import './form.scss'

const InputField = ({label,...props}) => {
  return (
    <div className='form-control'>
        
        <input {...props}/>
    </div>
  )
}

export default InputField