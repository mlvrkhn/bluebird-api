import React from 'react';

function Logo({ src, alt, height, padding }) {
    return (
        <img
            style={{
                height: height,
                marginLeft: '10px',
                paddingBottom: padding,
            }}
            src={src}
            alt={alt}
        />
    );
}

export default Logo;
