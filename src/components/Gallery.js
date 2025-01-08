import React from 'react'
import Cards from './Cards'


const datas= [
  {id: 1, src:"https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name:"image1"},
  {id: 2, src:"https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name:"image2"},
  {id: 3, src:"https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name:"image3"},
  {id: 4, src:"https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name:"image4"},
  {id: 5, src:"https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name:"image5"},
  {id: 6, src:"https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name:"image6"},
  {id: 7, src:"https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name:"image7"},
  {id: 8, src:"https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name:"image8"},
  {id: 9, src:"https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name:"image9"}

  
]




const Gallery = () => {
  return (
    <div className='gallery'>
        
        {datas.map(image => (
        <Cards key={image.id} src={image.src} name={image.name} />
      ))}

    </div>
  )
}

export default Gallery