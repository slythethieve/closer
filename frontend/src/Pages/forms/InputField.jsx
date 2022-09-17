import './form.scss'

const InputField = ({...props}) => {
  return (
    <div className='form-control'>
        
        <input {...props}/>
    </div>
  )
}

export default InputField