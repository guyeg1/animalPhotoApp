import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";

const LoginSignup = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [isLogin, setIsLogin] = useState(true);

const handleToggle = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('email:', email);
    console.log('pass:', password);
};

    return (
        <div className="w-screen">
            <Header/>
            <div className="w-screen flex justify-center mb-2">            
               <Image className="" width={70} height={70} src="/cat.png" alt=""></Image>
            </div>
            <div className="flex flex-col items-center justify-center">
               <div className="w-72 h-72 border-2 border-orange-300 rounded-2xl flex items-center justify-center flex-col gap-y-9 ">
                  <h2 className="text-2xl text-orange-300 underline">{isLogin ? 'Login' : 'Sign up'}</h2>
                  <form onSubmit={handleSubmit}>
                      <label>Email:</label>
                      <input className="border-2 border-orange-300 rounded-2xl" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <div className="mt-2">
                      <label className="pr-1">Pass:</label>
                      <input className="border-2 border-orange-300 rounded-2xl " type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button className="text-xl text-orange-300 w-full flex justify-center hover:text-2xl underline underline-offset-1" type="submit">{isLogin ? "Submit" : 'Submit'}</button>
                  </form>
                  <p onClick={handleToggle}>{isLogin ? "Dont have an account? Sign Up" : "Already have an account? Login"}</p>
                  <Footer/>
               </div>
            </div>
        </div>
        )}
export default LoginSignup;