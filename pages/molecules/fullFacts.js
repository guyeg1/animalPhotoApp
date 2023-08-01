import { useState, useEffect } from 'react';  


const AnimalCard = ({ animal, imageUrl }) => {
  const [animalFact, setAnimalFact] = useState('');

  return (
    <div className='w-full'> 
    <div className="animal-card flex flex-row items-center justify-center pt-12 sm:max-xl:flex-col sm:pt-12">
      <img className='h-96 w-96 border-2 border-blue-500' src={imageUrl} alt={animal}/>
    </div></div>
  );
};

const Buttons = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [backgroundImageUrl, setBackgroundImageUrl] = useState('');

  const handleCatButtonClick = async (animal) => {
    try {
      const response = await fetch("https://source.unsplash.com/featured/?${cats}");
      setImageUrl(response.url);
      setBackgroundImageUrl(response.url);
    } 
   catch (error) {
    console.error(error);
  }
  };

  const handleDogButtonClick = async (animal) => {
    try {
      const response = await fetch("https://source.unsplash.com/featured/?${dogs}");
      setImageUrl(response.url);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSnailButtonClick = async (animal) => {
    try {
      const response = await fetch("https://api.unsplash.com/search/photos/?client_id=OH9n_HpkCQzYkl4jAC7b1Y38sNPMgq2c6sdsbfoblUw&query=snail");
      setImageUrl(response.url);
    } catch (error) {
      console.error(error);
    }
  };

  const handleHorseButtonClick = async (animal) => {
    try {
      const response = await fetch("https://source.unsplash.com/featured/?${horses}");
      setImageUrl(response.url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ backgroundImage: ({backgroundImageUrl}), backgroundSize: 'cover', minHeight: '100vh' }} className='w-full'>
      <div className='flex justify-center'>
        <button className='border-2 border-blue-500 px-8 text-2xl hover:bg-blue-500 hover:text-white' onClick={() => handleCatButtonClick('cat')}>Cat</button>
        <button className='border-2 border-blue-500 px-8 text-2xl hover:bg-blue-500 hover:text-white' onClick={() => handleDogButtonClick('dog')}>Dog</button>
        <button className='border-2 border-blue-500 px-8 text-2xl hover:bg-blue-500 hover:text-white' onClick={() => handleSnailButtonClick('snail')}>Snail</button>
        <button className='border-2 border-blue-500 px-8 text-2xl hover:bg-blue-500 hover:text-white' onClick={() => handleHorseButtonClick('horse')}>Horse</button>
      </div>
      {imageUrl && <AnimalCard animal={imageUrl.split('/')[4]} imageUrl={imageUrl} />}
    </div>
  );
};
export default Buttons;