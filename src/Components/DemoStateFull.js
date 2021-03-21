import React, { Component } from 'react'

export default class DemoStateFull extends Component {

    //có thẻ tạo nhiều phương thức và thuộc tính cho component
    rederDiv = () => {
        return <div>123</div>
    }
    //nội dung phương thức render sẽ là nội dung của giao diện thẻ <DemoStateFull/>
    render() {
        return (
            <div className="container">
                <div className="card text-left">
                    <img className="card-img-top w-25" src="https://picsum.photos/200/200" alt />
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Body</p>
                    </div>
                </div>

            </div>
        )
    }
}
