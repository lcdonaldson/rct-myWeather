import React from 'react';

const MediaObject = (props) => {
    const {img, date, day, month, desc, precipitation, temp} = props;
    return (
        <div className="mediaObjWrapper">
            <img src={img} className="img-sm" alt="image here"/>
            <div className="info">
                <p>{day}, {month} {date}</p>
                <p style={{fontSize: 12}}>{desc}</p>
                <p style={{ fontSize: 12 }}>{precipitation}</p>
            </div>
            <div className="temp">
                <h4 style={{marginTop: 15, marginBottom: 0}}>{temp}</h4>
            </div>
        </div>
    )
}
export default MediaObject