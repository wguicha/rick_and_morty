import styles from './Form.module.css'
import { useState } from 'react'
import validate from './validation'

export default function Form(props) {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
     });

     const [errors, setErrors] = useState({
        email: [],
        password: []
     });

     const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property]: value});
        setErrors({email: [], password: []})
        validate({...userData, [property]: value}, errors, setErrors);
        //console.log("Errors: ",errors.password.length, " - ", errors.password.length !== 0 ? styles.inputIncorrect : styles.inputCorrect)
     }

     const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData);
     }

    return (
        <form className={styles.form}>
            <div>
                <label className={styles.label} htmlFor='email'>email:</label><br />
                <input type='text'
                    className={errors.email.length !== 0
                                ?styles.inputIncorrect
                                :styles.inputCorrect}
                    name='email'
                    value={userData.email}
                    onChange={handleChange}>
                </input><br />
                    {errors.email
                    ?errors.email.map((error) => {return <p className={styles.p}>{error}</p>})
                    :<></>}
            </div>
            <div>
                <label className={styles.label} htmlFor='password'>password:</label><br />
                <input type='text'
                    className={errors.password.length !== 0
                                ?styles.inputIncorrect
                                :styles.inputCorrect}
                    name='password'
                    value={userData.password}
                    onChange={handleChange}>
                </input>
                {errors.password
                    ?errors.password.map((error) => {return <p className={styles.p}>{error}</p>})
                    :<></>}
            </div>
            <button className={styles.buttonSubmit} onClick={handleSubmit}>Submit</button>
        </form>

    );

}