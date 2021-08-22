import React from 'react'
import './Form.scss'

// Components
import FormCreate from './FormCreate'
import FormUpdate from './FormUpdate'

type PropTypes = {
    type: 'CREATE' | 'UPDATE'
}

const Form: React.FC<PropTypes> = ({ type }) => {
    return (
        <>
            {type === 'CREATE' && <FormCreate />}
            {type === 'UPDATE' && <FormUpdate />}
        </>
    )
}

export default Form