import './Header.css';
import Btn from '../../SharedUI/Btn/Btn'
const Header = () => {
    return(
        <>
            <div className="headerStyle">
                <h1>Mary Hardy</h1>
                <h5>Front-end Web Developer</h5>
                <Btn content="Contact Me"/>
            </div>
        </>
    )
}
export default Header;