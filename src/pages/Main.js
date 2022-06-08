import { useCallback, useEffect, useState } from "react";
import DetailsPage from "./DetailsPage";
import Footer from "./Footer";
import Header from "./Header";

export default function Main() {

    const [fill, setFill] = useState(false)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const retunData = JSON.parse(localStorage.getItem('back'))
        if (retunData) {
            setFill(true)
            localStorage.clear()
        }

    }, [])

    const keyEvent = useCallback((e) => {
        if (e.key === 'Escape') {
            setVisible(false)
        }
        if (e.key === 'Enter') {
            setVisible(true)
        }
    }, [])

    useEffect(() => {
        document.addEventListener('keydown', keyEvent, false)
    }, [])



    return (
        <>
            <Header fill={fill} />
            <DetailsPage visible={visible} />
            <Footer />
        </>
    )
}