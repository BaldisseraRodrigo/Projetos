
import MainHome from './main/MainHome'
import './Navbar.css'

function Navbar() {
    return (
        <>
            <section>
                <div className='option'>
                    <button onClick={MainHome()}><h1>Home</h1></button>
                </div>
                <div className='option'>
                    <button>Car List</button>
                </div>
                <div className='option'>
                    <button>Class Reference</button>
                </div>
                <div className='option'>
                    <button>Tuning Tutorial</button>
                </div>
            </section>
        </>
    )
}

export default Navbar