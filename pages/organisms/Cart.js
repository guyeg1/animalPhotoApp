import Image from 'next/image';
import Header from '../molecules/Header';
import Footer from '../molecules/Footer';
import useCartStore from '../zustand/cartStore';
import { useState,  useEffect } from 'react';

const Cart = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
		setHydrated(true);
	}, []);
	if (!hydrated) {
		return null;
	}

  return (
    <div className='pb-40'>
      <Header/>
      <h1 className='text-2xl underline text-orange-300 flex justify-center'>Your Saved Animal Portfolio:</h1>
      {cartItems.map((item) => (
        <div className='w-screen' key={item.id}>
          <div className="bg-stone-100 rounded-2xl h-56 relative md:h-96 overflow-hidden border-2 border-orange-300 w-screen">
            <div className="h-36 md:h-64 pt-4 flex justify-center snap-align-start">
              <Image className='rounded-full' src={item.urls.regular} alt={item.description} width={150} height={100} />
              <div className='flex flex-col gap-2 ml-4 mt-4'>
                <p className="text-xl opacity-100 w-24  text-center font-bold underline decoration-0 underline-offset-2">{item.description?.split(' ').slice(0, 4).join(' ') || 'No description available'}</p>
                <p className='ml-8 font-bold'>{item.likes} ⭐</p>
              </div>
            </div>
            <Image className='absolute left-80 bottom-44 ml-4' src="/assets/checked.png" alt=""  onClick={() => removeFromCart(item.id)} width={30} height={30} />
            <div className='w-full flex justify-center'>
              <button className='text-xl border-2 bg-blue-400 text-white p-2 rounded-2xl mt-4 flex items-center' onClick={() => removeFromCart(item.id)}>Remove<Image width={30} height={0} src="/assets/empty-cart.png" alt=""></Image></button>
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  )};
export default Cart;