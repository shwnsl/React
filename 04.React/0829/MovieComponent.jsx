import React from 'react';

const MovieComponent = (props) => {
    const {name, date, src} = props;
    return (
        <div>
            제목: {name}
            <br/>
            개봉: {date}
            <br/>
            <img src={src} alt="" width="250px"/>
            <hr/>
        </div>
    );
};

export default MovieComponent;