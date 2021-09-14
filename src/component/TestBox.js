import React from 'react'
import PropTypes from 'prop-types'

function TextBox({ title, msg }) {
    return (
        <div>
            <h1>{title}</h1>
            <h3>{msg}</h3>
        </div>
    );
}

TextBox.propTypes = {
    title: PropTypes.string.isRequired,
    msg: PropTypes.string.isRequired,
}

export default TextBox