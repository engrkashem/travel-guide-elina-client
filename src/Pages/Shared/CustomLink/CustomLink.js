import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {

    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ backgroundColor: match ? "rgba(119, 136, 153, 0.3)" : "", color: match ? 'rgba(207, 7, 7, 0.9)' : 'white', fontWeight: match ? 'bold' : 'normal' }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
};

export default CustomLink;