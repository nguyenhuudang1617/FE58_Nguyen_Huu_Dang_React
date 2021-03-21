import React, { Component } from 'react'
import Footer from './Footer'
import HeaderComponent from './HeaderComponent'
import ProductListComponent from './ProductListComponent'
import SliderComponent from './SliderComponent'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <SliderComponent />
                <ProductListComponent />
                <Footer />

            </div>
        )
    }
}
