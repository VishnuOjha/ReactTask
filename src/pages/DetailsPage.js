import { useEffect, useState } from 'react'
import '../css/details.css'

export default function DetailsPage({ visible }) {

    return (
        <div className='root'>
            <div className='container'>
                {
                    visible ? <div className="block">
                        <div className='centerText'>
                            Center
                        </div>
                        <div className='dragText'>
                            Drage me around...
                        </div>
                    </div> : <></>
                }
            </div>
        </div>
    )
}