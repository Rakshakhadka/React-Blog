import React, { useState, useEffect } from 'react';
import './posts.css';

const apiUrl = 'https://jsonplaceholder.typicode.com/photos';

export default function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [visiblePhotos, setVisiblePhotos] = useState(9);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          console.error('Error response from server:', response);
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Data:', data);
        setPhotos(data);
      } catch (error) {
        console.error('Error fetching photos:', error.message);
      }
    };

    fetchPhotos();
  }, []);

  const loadMore = () => {
    setVisiblePhotos((prevVisiblePhotos) => prevVisiblePhotos + 9);
  };

  return (
    <div>
      <div className="gallery">
        {photos.slice(0, visiblePhotos).map((photo) => (
          <div key={photo.id} className="photo">
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <h3>{photo.title}</h3>
          </div>
        ))}
      </div>

      {visiblePhotos < photos.length && (
        <div className="load-more-container">
          <button className="load-more" onClick={loadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
