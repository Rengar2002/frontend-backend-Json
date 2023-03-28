import React, { useState, useEffect } from 'react';
import Select from './Select';
import Posts from './Posts';
import PostForm  from './PostForm';
import './style/Home.css';

const Home = () => {
  const [date, setDate] = useState({ year: null, month: null });

  const [iddd, setIddd] = useState(null);

  useEffect(() => {
    fetch('/postbd')
      .then((response) => response.json())
      .then((response) => setIddd(response.message));
  }, [iddd]);

  const getDate = (year, month) => {
    setDate({ year: year, month: month });
  };

  const ungetdate = (year, month) => {
    setDate({ year: null, month: null });
  };

  let filteredPosts = iddd;

  if (date.month && date.year)
    filteredPosts = iddd.filter(
      (post) => post.month === date.month && post.year === date.year
    );

  return (
    iddd && (
      <div>
        <Select onClick={getDate} inhandler={ungetdate} />
        <PostForm/>
        {date.year === null && date.month === null
          ? iddd.map((post) => (
              <Posts
                id={post.id}
                day={post.day}
                value={post.year}
                keys={post.month}
                name={post.events}
                description={post.description}
                key={post.events}
              />
            ))
          : filteredPosts &&
            filteredPosts.map((post) => (
              <Posts
                id={post.id}
                day={post.day}
                value={post.year}
                keys={post.month}
                name={post.events}
                key={post.events}
                description={post.description}
              />
            ))}
      </div>
    )
  );
};

export { Home };
