import "../css/details.css";
import Draggable from "react-draggable";
import { useLayoutEffect, useState } from "react";

export default function DetailsPage({
    visible,
    selected,
    visited,
    setCount,
    count,
}) {
    const [drag, setDrag] = useState(false);

    const startHandler = () => {
        setCount(count + 1);
        setDrag(true);
    };
    const stopHandler = () => {
        setCount(0);
        setDrag(false)
    };

    const [pos, setPos] = useState({
        pos: { x: 0, y: 0 },
    });

    const handleDrag = (e, ui) => {
        const { x, y } = pos.pos;
        setPos({ pos: { x: x + ui.deltaX, y: y + ui.deltaY } });
    };

     useLayoutEffect(() => {
        if (selected === 'center' || selected === 'lowerRight' || visited) {
            setPos({ pos: { x: 0, y: 0 } });
        }

    }, [selected, visited]);


    function showtext(selected, drag, visited) {
        if (selected === "center" || visited) {
            return `Center`;
        } else if (selected === "lowerRight") {
            return `Lower Right`;
        } else if (drag) {
            return `Floating....`;
        } else {
            return `Floating....`;
        }
    }

    return (
        <div className="root">
            <div
                className={
                    selected === "center" || visited
                        ? "containerCenter"
                        : selected === "lowerRight"
                            ? "containerRight"
                            : "container"
                }
            >

                {visible ? (
                    <Draggable
                        bounds="parent"
                        onStart={startHandler}
                        onStop={stopHandler}
                        onDrag={handleDrag}
                        position={pos.pos}


                    >
                        <div className={visited ? "blockVisited" : "block"}>
                            <div className="centerText">
                                {showtext(selected, drag, visited)}
                            </div>
                            <div className="dragText">Drage me around...</div>
                        </div>
                    </Draggable>
                ) : (
                    <></>
                )}


            </div>
        </div>
    );
}