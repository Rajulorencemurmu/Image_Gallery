import React,{useState,useEffect} from 'react';
import './App.css';
import ImageCard from './ImageCard';
import SearchImage from './SearchImage';

function App() {
  const [images, setImages]=useState([])
  const [isLoading, setIsLoading]=useState(true)
  const [search, setSearch]=useState('')

   useEffect(() => {
    fetch(`https://pixabay.com/api/?key=36117761-ae1ea222f3c8d0ed1bc054700&q=${search}&image_type=photo`)
    // fetch("https://api.tvmaze.com/search/shows?q=all")
      .then(res=> res.json())
      // .then(data=>console.log(data))
    .then(data=>{
      setImages(data.hits)
      setIsLoading(false)
    })
    .catch(err=> console.log(err))
   }, [search]);

  return (
    <div className='container max-auto'>
      <SearchImage set={(find)=>setSearch(find)}/>
      {isLoading ? 
          <h1 className='text-6xl font-semibold justify-center'>The image is Loading please wait....</h1> :
      <div className='grid grid-cols-4 gap-4'>
        {images.map(image=>(
          <ImageCard key={image.id} image={image}/>
        ))}
      </div>}
    </div>
  )
}

export default App;
