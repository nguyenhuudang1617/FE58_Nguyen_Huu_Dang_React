import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    dataProduct = [
        { id: 1, productName: 'iphone', price: 1000, img: 'http://picsum.photos/200/200' },
        { id: 2, productName: 'iphone x', price: 2000, img: 'http://picsum.photos/200/200' },
        { id: 3, productName: 'iphone sx', price: 3000, img: 'http://picsum.photos/200/200' },
    ]
    renderProduct = () => {
        // let arrJsx = [];
        // for (let i = 0; i < this.dataProduct.length; i++) {
        //     // mỗi lần duyệt lấy ra product [i]
        //     let prod = this.dataProduct[i];
        //     //từ prod => tạo đôi tượng jsx giao diện
        //     let jsxProd =
        //         <div classname="col-4 ">
        //             <div className="card text-white bg-dark">
        //                 <img className="card-img-top" src={prod.img} alt />
        //                 <div className="card-body">
        //                     <h4 className="card-title">{prod.productName}</h4>
        //                     <p className="card-text">{prod.price}</p>
        //                 </div>
        //             </div>
        //         </div>;


        //     //mỗi lần tạo ra đối tượng jsx sẽ đưa jsx vào mảng
        //     arrJsx.push(jsxProd);
        // }
        // return arrJsx;// [<div className='col-4'>card</div>](

        let jsxContent = this.dataProduct.map((item, index) => {
            return <div classname="col-4 " key={index}>
                <div className="card text-white bg-dark">
                    <img className="card-img-top" src={item.img} alt />
                    <div className="card-body">
                        <h4 className="card-title">{item.productName}</h4>
                        <p className="card-text">{item.price}</p>
                    </div>
                </div>
            </div>;
        })
        return jsxContent;
    }
    renderTableProduct = () => {
        return this.dataProduct.map((item, index) => {
            return <tr key={index}>
                <td>{item.id}</td>
                <td><img src={item.img} width={50}></img></td>
                <td>{item.productName}</td>
                <td>{item.price}</td>
                <td><button className="btn btn-danger">Delete</button></td>
            </tr>
        })
    }
    render() {
        return (
            <div className="container">
                <h3 className="text-center" display-4 >Product list</h3>

                <div className="row">
                    {this.renderProduct()}
                </div>

                <div className="table mt-5">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>img</th>
                            <th>name</th>
                            <th>price</th>
                            <th>action</th>
                        </tr>

                    </thead>
                    <tbody>
                        {this.renderTableProduct()}
                    </tbody>

                </div>
            </div>
        )
    }
}
