import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

const API_KEY = '45703930-0b54bbe75a6f3e40327c9f21b'; 

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [modalImage, setModalImage] = useState(null); 

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );
        setImages((prevImages) =>
          page === 1 ? response.data.hits : [...prevImages, ...response.data.hits]
        );
      } catch (error) {
        console.error("Eroare la preluarea imaginilor:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearchSubmit = (newQuery) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => setPage((prevPage) => prevPage + 1);

  const openModal = (largeImageURL, tags) => setModalImage({ largeImageURL, tags });
  const closeModal = () => setModalImage(null);

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <Button onClick={handleLoadMore} />}
      
      {/* Dacă `modalImage` are o valoare, deschide Modal */}
      {modalImage && (
        <Modal 
          largeImageURL={modalImage.largeImageURL} 
          tags={modalImage.tags} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
}

export default App;
