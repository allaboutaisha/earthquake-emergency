import React from 'react'
import { checkToken } from '../../utilities/users-service';
import './OrderHistoryPage.css'

export default function OrderHistoryPage() {
    async function handleCheckToken() { 
        const expDate = await checkToken();
        console.log(expDate);
    }
    return (
        <> 
            <h1>OrderHistoryPage</h1>
            {/* <button id='OrderHistoryButton' onClick={handleCheckToken}>Check When My Login Expires</button> */}
        </>
    )
}