import { useEffect, useState } from 'react'
import '../css/details.css'

export default function DetailsPage() {

    return (
        <div className='container'>
            <div className="block">
                <div className='centerText'>
                    Center
                </div>
                <div className='dragText'>
                    Drage me around...
                </div>
            </div>
        </div>
    )
}