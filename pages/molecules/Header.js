import Image from "next/image";
import Link from "next/link";


const Header = ({ handleAddToCart }) => {

  return (
    <>
      <header className="fixed z-50 text-4xl text-black text-primary-900 flex h-16 w-full items-center justify-center overflow-hidden bg-white flex-row ">
        <div className="w-screen flex ml-6 gap-28 md:w-screen md:flex md:justify-around md:mr-16">
          <Link href="/organisms/AnimalFacts">
            <Image width={22} height={23} src="/assets/lines.png" className="flex mt-1 w-auto h-auto" alt="lines"/>
          </Link>
          <a href="/">
            <Image width={75} height={65} src="/assets/t-logo.png" className="flex w-auto h-auto" alt="t-logo"/>            
          </a>
          <Link href="/organisms/Cart">
            <Image width={22} height={23} src="/assets/shopping-bag.png" className="flex mt-1 w-auto h-auto" alt="cart"/>
          </Link>
        </div>
      </header>
      <div className="relative h-24 w-full"></div>
    </>
  );
};
export default Header;