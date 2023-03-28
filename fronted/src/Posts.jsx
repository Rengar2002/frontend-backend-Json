import React from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import './style/Posts.css';

const Posts = (props) => {
  const navigate = useNavigate();

  return (
    <div className="Postshead">
      <div>
        <p>
          {props.keys} {props.value}
        </p>
      </div>
      <div>
        <p>{props.name}</p>
        <p>{props.description}</p>
      </div>
      <button
        onClick={() => {
          navigate({
            pathname: `/${props.id}`,
            search: createSearchParams({
              ...props,
            }).toString(),
          });
        }}
      >
        подробнее
      </button>
    </div>
  );
};

export default Posts;
