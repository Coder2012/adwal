import React from 'react';
import styles from './Link.css';

const Link = (props) => {
    return (
        <a className={styles.link} href={props.url}>
            {props.title}
        </a>
    );
};

export default Link;