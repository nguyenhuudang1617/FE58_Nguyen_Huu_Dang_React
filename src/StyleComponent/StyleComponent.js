import React, { Component } from 'react'
import './Style1.css'
import style from './Style2.module.css';
export default class StyleComponent extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <p className="text-red">
                        Hello - Hô lé
                    </p>

                    <div className={`p-5 ${style.textGreen} ${style['background-black']}`}>
                        haha
                    </div>
                    <p style={{ backgroundColor: 'red', paddding: '15px', color: 'white' }}>
                        heloo
                    </p>

                </div>
            </div >
        )
    }
}
