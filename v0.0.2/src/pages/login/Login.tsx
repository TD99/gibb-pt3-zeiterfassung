// import { useRef, useState, useEffect, useContext } from 'react';
// import { Link } from "react-router-dom";
import './login.css';

// const LOGIN_URL = 'auth';

const Login: React.FC = () => {
    // const { setAuth } = useContext(AuthContext);
    // const userRef = useRef();
    // const errRef = useRef();

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [errMsg, setErrMsg] = useState('');
    // const [success, setSuccess] = useState(false);

    // useEffect(() => {
    //     userRef.current.focus();
    // }, []);

    // useEffect(() => {
    //     setErrMsg('');
    // }, [email, password]);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log("Email: " + email + ", Passwort: " + password); // remove

    //     try {
    //     const response = await axios.post(
    //         LOGIN_URL,
    //         JSON.stringify({email, password}),
    //         {
    //         headers: { 'Content-Type': 'application/json'},
    //         withCredentials: true
    //         }
    //     );
    //     console.log(JSON.stringify(response?.data));
    //     // console.log(JSON.stringify(response));
    //     const accessToken = response?.data?.accessToken;
    //     const roles = response?.data?.roles;
    //     setAuth({ email, password, roles, accessToken });
    //     setEmail();
    //     setPassword();
    //     setSuccess(true);
    //     } catch (err) {
    //     if (!err?.response) {
    //         setErrMsg('Server reagiert nicht!')
    //     } else if (err?.response.status === 400) {
    //         setErrMsg('Passwort oder/und Benutzer fehlen!');
    //     } else if (err?.response.status === 401) {
    //         setErrMsg('Nicht authentifiziert!');
    //     } else {
    //         setErrMsg('Login fehlgeschlagen!');
    //     }
    //     setSuccess(false);
    //     errRef.current.focus();
    //     }

    //     setEmail('');
    //     setPassword('');
    //     setSuccess(true);
    // }

    // /* var users = [
    //     { email: 'max.mustermann@gibb.ch', password: 'max1234' },
    //     { email: 'tdu135585@stud.gibb.ch', password: 'sml12345' },
    //     { email: 'olo135597@stud.gibb.ch', password: 'olo12345' },
    // ]; */

    // return (
    //     <>
    //     {success
    //     ? (
    //         <div>
    //         <h1>Du bist eingeloggt.</h1>
    //         <Link to={"/"}>Home</Link>
    //         </div>
    //     )
    //     : (
    //         <div>
    //             <p
    //             ref={errRef}
    //             className={errMsg ? "errMsg" : "offscreen"}
    //             aria-live="assertive">{errMsg}</p>
    //             <h1>Login</h1>
    //             <form onSubmit={handleSubmit} style={{display: 'flex', flexFlow: 'column'}}>
    //             <label htmlFor="email">E-Mail-Adresse</label>
    //             <input
    //                 type="email"
    //                 id="email"
    //                 ref={userRef}
    //                 autoComplete="off"
    //                 onChange={e => setEmail(e.target.value)}
    //                 value={email}
    //                 placeholder="max.mustermann@gibb.ch"
    //                 required />
    //             <label htmlFor="password">Passwort</label>
    //             <input
    //                 type="password"
    //                 id="password"
    //                 onChange={e => setPassword(e.target.value)}
    //                 value={password}
    //                 placeholder="********"
    //                 required />
    //             <button type="submit">Einloggen</button>
    //             </form>
    //             <Link to='/register'>Registrieren</Link>
    //         </div>
    //     )}
    //     </>
    // )

    return (
        <>
        </>
    )
}

export default Login;