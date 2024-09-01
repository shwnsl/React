import React, { useState } from 'react';

import image from "./images/aaa.jpg"

const ImageComponent = () => {
    const imgList = [
        {value: 'grape', name: 'Grape', src: './images/bbb.jpg'},
        {value: 'lime', name: 'Lime', src: './images/aaa.jpg'},
        {value: 'coconut', name: 'Coconut', src: './images/logo512.png'},
        {value: 'mango', name: 'Mango', src: './images/logo192.png'}
    ]
    const [img, imgSet] = useState('');
    function imgChange(e) {
        imgSet(e.target.value)
    }
    return (
        <div>
            <p>import 사용</p>
            <img src={image} width="200px" alt="" />
            <p>require 사용</p>
            <img src={require("./images/bbb.jpg")} width="200px" alt="" />
            <p>public 폴더 사용</p>
            <img src="/images/logo512.png" width="200px" alt="" />
            <p>외부 서버 이미지</p>
            <img src="" alt="" /><hr/>

            <h3>선택한 과일 : {img}</h3>
            <select value={img} onChange={imgChange}>
                {
                    imgList.map((item) => (
                        <option value={item.src}>{item.name}</option>
                    ))
                }
            </select>
            <img src={img} alt="" width="200px" />
        </div>
    );
};

export default ImageComponent;