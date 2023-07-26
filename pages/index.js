import Header from "./molecules/Header";
import Link from 'next/link';


export default function Home() {
  return (
    <div  className="w-screen h-screen bg-cats bg-no-repeat bg-cover bg-center">
      <div className='w-full'>
        <Header />
      </div>
      <div className='flex items-center justify-center h-full justify-around'>
        <Link className='underline bg-blue-500 hover:text-2xl border-orange-500 border-2 p-6 text-white text-xl' href="/atoms/animalPreview">Different Cat Facts</Link>
        <Link className='underline bg-blue-500 hover:text-2xl border-orange-500 border-2 p-6 text-white text-xl' href="/organisms/FactsPage">Open Pictures</Link>
        <Link className='underline bg-blue-500 hover:text-2xl border-orange-500 border-2 p-6 text-white text-xl' href="/organisms/animalPhotos">Preview other animals</Link>
      </div>
    </div> )
}
