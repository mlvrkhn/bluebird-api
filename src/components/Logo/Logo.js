import React from 'react';

function Logo({ src, alt }) {
    return (
        <img
            style={{
                height: '60px',
                marginLeft: '10px',
            }}
            src={src}
            alt={alt}
        />
    );
}

export default Logo;
