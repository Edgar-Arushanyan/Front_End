import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { DataState } from '../reducer/reducers';


const Photos: React.FC = () => {
  const dispatch = useDispatch();

  const photos = useSelector((state: { data : DataState }) => state.data.photos);
  const currentPage = useSelector((state: {data: DataState}) => state.data.currentPagePhotos);
  const perPage = useSelector((state: {data: DataState}) => state.data.photosPerPage);

  //если на страницу отображантся по 10 фото м сы находимся на 5ой,
  //странице то indexOfLastElement = 50 , indexOfFirstElement = 40
  const indexOfLastElement = currentPage * perPage;
  const indexOfFirstElement = indexOfLastElement - perPage;

// здесь из большоно массива всех фотограйий полученныз из глобального состояния
// сохраняем только фотограйии отображаемые на той одной странице фотонрфий на которой
//  мы находимся
  const currentPhotos = photos.slice(indexOfFirstElement, indexOfLastElement);

  const previousPage = () => {
    dispatch(setCurrentPagePhotos(currentPage -1));
  };

  const nextPage = () => {
    dispatch(setCurrentPagePhotos(currentPage +1));
  };
  return(

   <>
      <h2>Photos</h2>
      <ul>
          {currentPhotos.map(photo => (
            <li key={photo.id}>
              <img src={photo.thumbnailUrl} alt="photo_150" />             
            </li>
          ))}
      </ul>
      <button disabled={currentPage === 1} onClick={previousPage}>Previous page</button>
      <button disabled={indexOfLastElement >= photos.length} onClick={nextPage}>Next Page</button>

   </>
  )
  
};

export default Photos;