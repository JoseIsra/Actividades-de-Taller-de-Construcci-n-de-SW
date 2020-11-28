import React, {useState} from 'react'
import './Register.css';
import SaveIcon from '@material-ui/icons/Save';

export const Register = () => {
    const [user, setUser] = useState({
        name:'',
        lastname:'',
        email:'',
        password:''
    })

    const handleChange = (e) =>{
        setUser({
            ...user,
            [e.target.name] : e.target.value
        });
    };


    return (
        <div className="register">
            <div className="register__card">
                <h2>Regístrate</h2>
                <div className="register__content">
                    <form>
                        <input type="text"
                        name="name"
                        value= {user.name}
                        placeholder= "Nombre..."
                        onChange = {handleChange}
                        />
                        <input type="text"
                        name="lastname"
                        placeholder= "Apellido..."
                        value= {user.lastname}
                        onChange = {handleChange}
                        />
                        <input type="text"
                        name="email"
                        placeholder ="Correo..."
                        value= {user.email}
                        onChange = {handleChange}
                        />
                        <input type="text"
                        value ={user.password}
                        name="password"
                        placeholder="Contraseña..."
                        onChange = {handleChange}
                        />
                    
                        <button type="submit" className="btn-register">Guardar datos
                        <SaveIcon className="save-icon"/>
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}
