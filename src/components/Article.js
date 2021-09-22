import React from 'react';

function Article(props) {
    return (
        <article>
            <a href={"https://reddit.com" + props.item.permalink} target="_blank" rel="noreferrer">
                <h3>{props.item.title}</h3>
            </a>
        </article>
    )
}

export default Article

