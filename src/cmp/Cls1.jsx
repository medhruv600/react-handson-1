import React, { Component } from 'react'

class Cls1 extends Component {
    render() {
        return (
            <div className='cls1'>
                <h1 className='cls'>This is created using Class component</h1>
                <p className='ext'>This is done using external css</p>
                <p style={{ color: "white" }}>This is done using inline CSS</p>
            </div>
        )
    }
}

export default Cls1