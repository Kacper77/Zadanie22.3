import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './PostListItem.css';

function PostListItem(props) {
  return ( <
    div className = { styles['single-post'] } >
    <
    h3 className = { styles['post-title'] } >
    <
    Link to = { `/posts/${props.post.slug}-${props.post.cuid}` } > { props.post.title } <
    /Link> < /
    h3 > <
    p className = { styles['author-name'] } > < FormattedMessage id = "by" / > { props.post.name } < /p> <
    p className = { styles['post-desc'] } > { props.post.content } < /p> <
    div className = { styles['post-action'] } >
    <
    span className = { styles['post-votes-count'] } > { props.post.voteCount } < /span> <
    button className = { styles['votes-plus'] } onClick = { props.onThumbUp } > + < /button> <
    button className = { styles['votes-minus'] } onClick = { props.onThumbDown } > - < /button> <
    button className = { styles['post-delete'] } >
    <
    a href = "#"
    onClick = { props.onDelete } > < FormattedMessage id = "deletePost" / > < /a> < /
    button > <
    /div> <
    hr className = { styles.divider }
    /> < /
    div >
  );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onThumbUp: PropTypes.func.isRequired,
  onThumbDown: PropTypes.func.isRequired,
};

export default PostListItem;
