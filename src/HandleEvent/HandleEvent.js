import React, { Component } from 'react'

export default class HandelEvent extends Component {
    handleClick = () => {
        alert("Hô lé")
    }
    showMess = (mess) => {
        alert(mess)
    }


    render() {
        return (
            <div className="container m-5">
                <button id="btnSubmid" onClick={this.handleClick}>Click</button>

                <button className="btn btn-success mx-3" onClick={() => {
                    this.showMess('cyber soft - fe58')
                    //Gọi các hàm sử lý khác
                }} >Show Mess</button>
            </div >
        )
    }
}
