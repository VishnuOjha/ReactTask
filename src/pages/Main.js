import { useEffect, useState } from "react";
import DetailsPage from "./DetailsPage";
import Footer from "./Footer";
import Header from "./Header";

export default function Main() {

    const [fill, setFill] = useState(false)

    useEffect(() => {
        const retunData = JSON.parse(localStorage.getItem('back'))
        if (retunData) {
            setFill(true)
            localStorage.clear()
        }

    }, [])



    console.log(fill)
    return (
        <>
            <Header fill={fill} />
            <DetailsPage />
            <Footer />
        </>
    )
}