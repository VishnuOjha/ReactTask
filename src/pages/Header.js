import "../css/header.css";
export default function Header({ fill, setSelected }) {
    const today = new Date();

    const centerHandler = (e) => {
        setSelected(e.target.value);
    };

    return (
        <>
            <nav className="navStyle">
                <li className="posStyle">
                    <strong> Position : </strong>
                    <div className="radiogroup">
                        <input
                            type="radio"
                            value="center"
                            name="key"
                            checked={"center" === fill ? fill : null}
                            onChange={centerHandler}
                        />
                        Center
                        <input
                            type="radio"
                            value="lowerRight"
                            name="key"
                            onChange={centerHandler}
                        />
                        Lower Right
                    </div>
                </li>
                <li>Press ESC key to hide the Window, Enter to show it again</li>
                <li className="dateInfo">{today.toLocaleTimeString()}</li>
            </nav>
        </>
    );
}