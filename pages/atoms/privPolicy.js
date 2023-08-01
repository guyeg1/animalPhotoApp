import React from 'react';
import Header from '../molecules/Header';

const AnimalsPage = () => {

  return (
    <div>
    <Header/>
    <div className="flex flex-col items-center justify-center w-screen  bg-gray-200"> 
      <h1 className="text-4xl font-bold mb-8">Our Privacy Policy:</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <p className="text-lg mb-4">
            We at CAT FACTS do not condemn any animal violence. We seek to help cats and any other animals in danger or in danger of extinction. All donations are sent to animal shelters and other helpful animal organizations in need for funds. We at CAT FACTS work towards a better future where animals are free and healthy just as well as humans.
        </p>
        <p className="text-lg mb-4"></p>
      </div>
    </div></div>
  );
};
export default AnimalsPage;