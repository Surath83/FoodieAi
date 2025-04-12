import Style from './Pic.module.css'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'

const Pic = () => {
    return (
        <>
        <div className={Style.container}>
            <h1 className={Style.title}>Unhealthy Persons</h1>
            <img src={img1} alt="Image" className={Style.img} />
            <h1 className={Style.title}>Mass Category</h1>
            <img src={img2} alt="Image" className={Style.img} />
        </div>
        </>
    )
}
export default Pic;
