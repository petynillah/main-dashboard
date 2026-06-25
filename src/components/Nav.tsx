import logo from '../assets/logo.jpg'

function Nav(){
    const loginUrl= import.meta.env.VITE_PROFILE_APP_URL;
    return (
        <section className="nav">
            <img src={logo}/>
        <ul> 
            <li><a href="/">Home</a></li>
            <li><a href="/history">History</a></li>
            <li><a href="/services">Services offered $ eligibility</a></li>
            <li><a href={`${loginUrl}/studentlogin`} rel='noopener noreferrer' target="_blank">Login/Registration</a></li>
        </ul>
        </section>
    )
}
export default Nav