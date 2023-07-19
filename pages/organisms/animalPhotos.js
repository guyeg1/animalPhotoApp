import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Cat from "../black-cat.png"
import Header from '../molecules/Header';
import Footer from '../molecules/Footer';
import Dog from "../dog.png"
import Horse from "../horse.png"
import Snail from "../snail.png"
import Search from "../magnifying-glass.png"
import Plus from "../plus.png"


const AnimalsPage = ({ initialImages }) => {
  const [images, setImages] = useState(initialImages);
  const [category, setCategory] = useState('cats');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    fetchImages(category)
  }, [category]);


  useEffect(() => {
    filterImages(category);
  }, [searchKeyword]);


  const fetchImages = async () => {
    setLoading(true)
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos/', {
        params: {
          client_id: 'OH9n_HpkCQzYkl4jAC7b1Y38sNPMgq2c6sdsbfoblUw',
          query: category + ' ' + searchKeyword,
          page: 2,
          per_page: 999,
        },
      });

      const fetchedImages = response.data.results;
      setImages(fetchedImages);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error(error);
    }
  };

  const handleCategoryChange = (category) => {
    setCategory(category);
  }

  const handleChange = (event) => {
    setSearchKeyword(event.target.value);
  };



  const filterImages = () => {
    const filtered = images.filter((image) =>
      image.description?.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    return filtered;
  };


  return (
    <div className='w-screen overflow-hidden font-roboto'>
      <Header />
      <div className='w-screen relative '>
        <div className=''>
          <input
            className='text-sm pb-1 border-b border-stone-300  w-screen mx-4 md:ml-0 md:w-screen'
            type="text"
            placeholder="Search"
            value={searchKeyword}
            onChange={handleChange}
          />
        </div>
        <Image src={Search} alt="" className='w-6 h-6 absolute left-80 ml-7 bottom-1 md:flex md:justify-center md:hidden' />
      </div>

      <div className="mt-6 flex flex-row w-min justify-center md:w-full md:gap-4 gap-3 mx-4">

        <div onClick={() => handleCategoryChange('cats')} className={`button-wrapper w-20  ${category === 'cats' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}>
          <div className="button-content p-2 flex flex-col items-center justify-center w-full h-full space-y-1">
            <Image src={Cat} alt="" className="aspect-square" width={32} />
            <button onClick={() => handleCategoryChange('cats')}>Cats</button>
          </div>
        </div>

        <div onClick={() => handleCategoryChange('dogs')} className={`button-wrapper w-20 ${category === 'dogs' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}>
          <div className="button-content p-2 flex flex-col items-center justify-center w-full h-full space-y-1">
            <Image src={Dog} alt="" className="aspect-square" width={32} />
            <button onClick={() => handleCategoryChange('dogs')}>Dogs</button>
          </div>
        </div>

        <div onClick={() => handleCategoryChange('horses')} className={`button-wrapper w-20 ${category === 'horses' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}>
          <div className="button-content p-2 flex flex-col items-center justify-center w-full h-full space-y-1">
            <Image src={Horse} alt="" className="aspect-square" width={32} />
            <button onClick={() => handleCategoryChange('horses')}>Horse</button>
          </div>
        </div>

        <div onClick={() => handleCategoryChange('snails')} className={`button-wrapper w-20 ${category === 'snails' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}>
          <div className="button-content p-2 flex flex-col items-center justify-center w-full h-full space-y-1">
            <Image src={Snail} alt="" className="aspect-square" width={32} />
            <button onClick={() => handleCategoryChange('snails')}>Snail</button>
          </div>
        </div>
      </div>


      <div className="center sal-animate pt-6" data-sal="slide-up" data-sal-duration={200} data-sal-delay={300}>
        <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden w-full xl:ml-0 rounded-xl">
          <div className='flex flex-row w-screen'>
            <p className="text-xl pl-4 font-bold">Popular</p>
            <div className='ml-6'>
              <p className='flex justify-end ml-52  font-bold text-sm'>See All</p>
            </div>
          </div>

          <div className="swiper-wrapper w-screen snap-x snap-mandatory overflow-x-scroll flex flex-row flex-nowrap items-center justify-between w-screen pl-4 pt-4">

            <div className="slider-container flex justify-between ">
              <div className="slider flex flex-row  w-full xl:gap-96">
                {filterImages().map((image, index) => (

                  <div key={image.id} className="flex flex-row snap-always snap-end">
                    <div className="w-80 h-48 bg-stone-100 rounded-2xl pt-2 pl-2 gap-9 flex flex-row snap-align-start">
                      <div className='flex flex-col ml-1'>
                        <div className='flex flex-row justify-between'>
                          <p className="font-bold mt-2">{image.likes} ⭐  </p>
                        </div>
                        <p className="text-lg font-bold pt-8">{image.description?.split(' ').slice(0, 4).join(' ') || 'No description available'}</p>

                      </div>
                      <div className="w-11/12">
                        <div className="rounded-full flex flex-col pr-2  pt-1">
                          <Image className='w-6 h-6 flex self-end ' alt="" src={Plus}></Image>

                          <div className='pl-2'>
                            <img src={image.urls.regular} alt={image.alt_description} className="rounded-full h-36 w-36 " />
                          </div>
                        </div>
                      </div>
                    </div>
                    {index !== images.length - 1 && <div className="stop-element" />}
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>
      </div>

      <div className="w-screen pb-40">
        <div className='flex flex-row w-screen'>
          <p className='text-xl py-6 pl-4 font-bold'>New arrivals</p>
          <div className='ml-11'>
            <p className='flex justify-end ml-36 mt-8  font-bold text-sm'>See All</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mx-4">
          {filterImages().map((image) => (
            <div>
              <div key={image.id} className="bg-stone-100 rounded-2xl h-44 relative md:h-80">
                <div className="h-36 md:h-64 pt-4 flex justify-center snap-align-start ">

                  <img src={image.urls.regular} alt={image.alt_description} className="h-28 w-28  md:w-72 md:h-64 rounded-full z-30" />
                </div>
                <div className="flex justify-center flex-row justify-around ">
                  <p className='flex flex-row justify-around font-bold'>{image.likes} ⭐</p>
                  <Image className='w-6 h-6' alt="" src={Plus}></Image>
                </div>
                <div className='absolute top-44 right-44'>
                  <div className='absolute rounded-bl-full rounded-tr-sm bg-yellow-500 h-24 w-24 left-20 bottom-20 mix-blend-darken z-20'></div>
                </div>
              </div>
              <p className="text-xl opacity-100 mt-4 flex justify-center text-center font-bold">{image.description?.split(' ').slice(0, 8).join(' ') || 'No description available'}</p>

            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos/', {
      params: {
        client_id: 'OH9n_HpkCQzYkl4jAC7b1Y38sNPMgq2c6sdsbfoblUw',
        query: 'cats',
      },
    });

    const initialImages = response.data.results.slice(0, 30);

    return {
      props: {
        initialImages,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        initialImages: [],
      },
    };
  }
}

export default AnimalsPage;