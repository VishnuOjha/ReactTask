import '../css/header.css'
export default function Header({ fill }) {
    const today = new Date()

    return (
        <>

            <nav className='navStyle'>
                <li className='posStyle'>
                    <strong> Position : </strong>
                    <div className='radiogroup'>
                        <input type="radio" value="center" name="key" onChange={() => { }} /> Center
                        <input type="radio" value="lowerRight" name="key" onChange={() => { }} /> Lower Right

                    </div>
                </li>
                <li>
                    Press ESC key to hide the Window, Enter to show it again
                </li>
                <li>
                    {today.toLocaleTimeString()}
                </li>
            </nav>

        </>
    )
}