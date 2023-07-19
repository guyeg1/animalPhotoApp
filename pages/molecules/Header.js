import Image from "next/image"

const Header = () => {
  return (
    <>
      <header className="fixed z-50 text-4xl text-black text-primary-900 flex h-16 w-full items-center justify-center overflow-hidden bg-white flex-row">
        <div className="flex w-screen justify-between">
            <a href="#">
              <p className="flex justify-start text-2xl  ml-4">☰</p> 
            </a>
            <a href="/">
            <Image
              width={20}
              height={8}
              href="/"
              src="/t-logo.png"
              className="h-8 w-20  flex self-center"
              alt=""/>            
            </a>

            <a href="#">
              <Image width={5} height={5} src="/shopping-bag.png" alt="" className="flex mr-5 mt-2 w-5 h-5"/>
            </a>
        </div>
      </header>

      <div className="relative h-24 w-full" />
    </>
  )
}

export default Header;