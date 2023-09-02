import { useState } from 'react'
import '../styles/LoginForm.css'
import { useEffect } from 'react'
import useFetch from '../hooks/useFetch'

function LoginForm() {
    const {data, isPending, error} = useFetch('https://64ea744cbf99bdcc8e679258.mockapi.io/sda/login')

    const [email, setEmail] = useState('Initial Email')
    const [password, setPassword] = useState('Initial Password')
    
    useEffect(() => {
        console.log('data is ', data);
        console.log('isPending is ', isPending);
        console.log('error is ', error);
    })

    useEffect(() => {
        console.log("Komponenti login form .jsx u fut ne dom");
    }, [email, password])



    // const [formerror, setFormData] = useState({
    //     email: 'email23',
    //     password: 'passwdef',
    // })

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Forma u be submit');
    }

    const handleChange = (event) => {
        let value = event.target.value;
        let inputName = event.target.name;

        if(inputName === 'email') setEmail(value)
        else if(inputName === 'password') setPassword(value)
        
    }

  return (
    <div className="LoginForm">
        <form onSubmit={handleSubmit}>
            <h3>Login to HR Platform</h3>
            Email: {email} <br />
            Password: {password}
            <fieldset className="form-control">
                <input type="email" name="email" id="email" onChange={handleChange} placeholder="Email..." />
            </fieldset>
            <fieldset className="form-control">
                <input type="password" name="password" id="password" onChange={handleChange} placeholder="password..." />
            </fieldset>
            <div className='error'>Incorrect login credentials</div>
            <input type="submit" value="Login to Platform" />
        </form>
    </div>
  )
}

export default LoginForm