import { Link, NavLink } from 'react-router-dom'
import '../css/footer.css'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <NavLink to='/info'> <p className='infoText'>Go To Page 2 &#8250;</p></NavLink>
            </div>
        </>
    )
}