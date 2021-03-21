import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    state = {
        srcImg: "./img/car/products/red-car.jpg"
    }
    changeColor = (color) => {
        this.setState({
            srcImg: `./img/car/products/${color}-car.jpg`
        })
    }





    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <p>Please choose your favorite about car's color</p>
                        <img img src={this.state.srcImg} className="w-100" ></img>
                    </div>
                    <div className="col-6">
                        <p> Change color</p>
                        <button className="btn btn-danger " onClick={() => {
                            // this.setState({
                            //     srcImg: "./img/car/products/red-car.jpg"
                            // })
                            this.changeColor('red');
                        }}> Red color</button>
                        <button className="btn btn-secondary mx-5" onClick={() => {
                            // this.setState({
                            //     srcImg: "./img/car/products/silver-car.jpg"
                            // })
                            this.changeColor('silver');
                        }}>Silver color</button>
                        <button className="btn btn-dark" onClick={() => {
                            // this.setState({
                            //     srcImg: "./img/car/products/black-car.jpg"
                            // })
                            this.changeColor('black');
                        }}> Black color</button>
                    </div>

                </div>
            </div>
        )
    }
}
