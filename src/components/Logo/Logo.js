import React from 'react';

function Logo({ height, src, alt }) {
    return <img style={{ height }} src={src} alt={alt} />;
}

export default Logo;
