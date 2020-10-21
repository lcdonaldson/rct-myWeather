import React from 'react';

const MediaObject = (props) => {
    const {img, date, day, month, desc, precipitation, temp} = props;
    return (
        <div className="mediaObjWrapper">
            <img src={img} className="img-sm" alt="image here"/>
            <div className="info">
                <p>{day}, {month} {date}</p>
                <p style={{fontSize: 12}}>{desc}</p>
                <p style={{ fontSize: 12 }}>Precipitation: {precipitation} %</p>
            </div>
            <div className="temp">
                <h4 style={{marginTop: 15, marginBottom: 0}}>
                    {temp}
                    <span style={{ fontSize: 16 }}> F</span>
                </h4>
            </div>
        </div>
    )
}
export default MediaObject