import React from 'react';

const Link = (props) => {
    return (
        <a className={props.classes} href={props.url}>
            {props.title}
        </a>
    );
};

export default Link;