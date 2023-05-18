import Card from '../../SharedUI/Card/Card';
import './Portfolio.css';
const Portfolio = () => {
    return(
        <>
        <div className='container'>
            <h1>Portfolio</h1>
            <Card content={
                <>
                <h3>Web Design</h3>
                </>
            }/>
            <Card content={
                <>
                <h3>Mobile Design</h3>
                </>
            }/>
            <Card content={
                <>
                <h3>Logo Design</h3>
                </>
            }/>
            <Card content={
                <>
                <h3>Web App Development</h3>
                </>
            }/>
            <Card content={
                <>
                <h3>Mobile App Development</h3>
                </>
            }/>
            <Card content={
                <>
                <h3>Web App Development</h3>
                </>
            }/>
            </div>
        </>
    )
}
export default Portfolio;
