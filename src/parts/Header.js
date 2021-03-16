import logo from './../assets/img/logo.png';
import './../assets/style/header.css'

export default function Header() {
    return (
        <section id="header">
            <div className="logo">
                <a href="/"><img alt="Venturus logo" src={logo} /></a>
                <p>Squad Management Tool</p>
            </div>
            <div className="user-info">
                <p>John Doe</p>
                <span>JD</span>
            </div>
        </section>
    );
}