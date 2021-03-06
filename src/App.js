import React, {useState, useEffect} from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import styles from './style.module.css';
import imgApi from './API/Api';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import Load from './components/Loader/Loader';


function App() {
  const [imgName, setImgName] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentImages, setCurrentImages] = useState('');
  const [openModal, setOpenModal] = useState(false);

  useEffect(()=>{
  if (!imgName) return;
  fetchImages();
  }, [imgName, page])
  
  const fetchImages = async () => {
    setIsLoading(true)
    const images = await imgApi
      .fetchImg(imgName, page)
      setImages(prevState => [...prevState, ...images.hits])
      setIsLoading(false); 
    if (page !== 1) {
      scrollPage()
    } 
    
  };

  const scrollPage = () => {
      window.scrollBy({
        top: document.documentElement.clientHeight - 160,
        behavior: "smooth",
      });
  };
  
  const handleSearchbarSubmit = imgName => {
   setImgName(imgName);
   setPage(1);
   setImages([]);
  };

  const OnLoadMore = () => {
    setPage(prev => (prev + 1));
  };

  const onImgClick = e => {
    if (e.target.nodeName !== 'IMG') {
      return;
    }
    setCurrentImages(e.target.dataset.img,);
    toggleModal();
  };

  const toggleModal = () => {
    setOpenModal(prev => !prev);
  };

  return (
      <div className={styles.App}>
        <Searchbar onSubmit={handleSearchbarSubmit} />
        <ImageGallery images={images} onImgClick={onImgClick} />
        {isLoading && <Load />}
        {images.length > 0 && !isLoading && (
          <Button onBtnClick={OnLoadMore} text={'Загрузить еще'} />
        )}
        <ToastContainer autoClose={3000} />

        {openModal && (
          <Modal onCloseModal={toggleModal}>
            <img src={currentImages} alt="Dont Worry Be Happy" />
          </Modal>
        )}
      </div>
    );
  }

export default App;