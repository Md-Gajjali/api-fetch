import React from 'react'
import { useContext } from 'react'
import { AppProvider } from '../ContextApi.jsx'

const ComThree = ({ title }) => {
    const { nam } = useContext(AppProvider);
    return (
        <div>
            <h1>{nam},{title}</h1>
        </div>
    )
}

export default ComThree
