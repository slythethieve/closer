import './form.scss'

const TextArea = ({label,...props}) => {
  return (
    <div className='form-control'>
        <label>{label}</label>
        <textarea {...props}/>
    </div>
  )
}

export default TextArea