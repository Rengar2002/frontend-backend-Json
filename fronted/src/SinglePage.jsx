import React from 'react';
import {useSearchParams } from 'react-router-dom';
import './style/happyday.css';

function SinglePage(props) {
  const [searchParams] = useSearchParams();
  const { day, month, year, place, description, description2 } = {
    day: searchParams.get('day'),
    month: searchParams.get('keys'),
    year: searchParams.get('value'),
    place: searchParams.get('place'),
    description: searchParams.get('description'),
    description2: searchParams.get('description2'),
  };

  return (
    <div className="happyday">
      <div className="list1">
        <div className="list2">
          <div></div>
          <div>
            <p>
              {day} {month} {year}
            </p>
            {place && <p>{place}</p>}
          </div>
        </div>
        {description && (
          <div className="list3">
            <p>{description}</p>
            <p>{description2}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export { SinglePage };
