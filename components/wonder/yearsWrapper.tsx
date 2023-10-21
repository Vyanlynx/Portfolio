'use client'
import React, { useState, useEffect } from 'react'

export default function YearsWrapper() {
    const [dateState, setDateState] = useState<any>({
        year: '', month: '', day: ''
    })
    const months: any = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const findDateToday = () => {
        let today: any = new Date();
        setDateState({
            year: today.getFullYear(),
            month: months[today.getMonth()],
            day: String(today.getDate()).padStart(2, '0')
        })
    }
    useEffect(() => findDateToday(), []);
    return (
        <div className='flex justify-center text-white p-8 text-sm'>
            It's {dateState?.day}st of {dateState?.month} {dateState?.year}, am still wondering after graduation why I decided to become a web developer and obsessed with React.js.
        </div>
    )
}
