import './AboutMe.css';
import Btn from '../../SharedUI/Btn/Btn'
const AboutMe = () => {
    return(
        <>
            <div className="aboutMeStyle">
                <h1>ABOUT ME</h1>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.<br/>
                        Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est.<br/>
                        Duis a arcu convallis, gravida purus eget, mollis diam.<br/>
                        Donec laoreet rutrum libero sed pharetra.<br/>
                    </p>
                    <Btn content="Download Resume"/>
                </div>
            </div>
        </>
    )
}
export default AboutMe;