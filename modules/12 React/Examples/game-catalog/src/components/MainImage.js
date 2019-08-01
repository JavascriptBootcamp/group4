import React from 'react';

const cssPadding = 0;
const MainImage = ({ title, src }) => (
    <img
        src={src}
        title={title}
        alt={title}
        className="col-sm-12"
        style={{ padding: cssPadding, margin: 0, borderColor: 'red', borderWidth: 4, borderStyle: 'solid' }} />
);

export default MainImage;