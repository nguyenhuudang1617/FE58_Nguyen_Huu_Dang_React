import React, { Component } from 'react'

export default class Databinding extends Component {
    name = 'A';
    renderSinhVien = () => {
        let sinhVien = {
            ma: 1,
            ten: "Nguyen Van A"
        }
        //nội dung hàm hiển thị lên phương thức render phải trả về 1 component,hoặc chuỗi ,số...
        return <div>
            <p>Mã: {sinhVien.ma}</p>
            <p>Tên: {sinhVien.ten}</p>
        </div>
    }







    render() {
        let title = 'cybersoft';
        let renderTitile = () => {
            return <div>CyberSoft</div>
        }

        return (
            <div className="container">
                <p id="titile" className="display-4">{title}</p>
                {this.renderSinhVien()}
                {renderTitile()}
            </div>
        )
    }
}

