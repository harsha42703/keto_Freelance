import React,{useState} from 'react'
import { RiEyeCloseFill } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import logbg from '../Assets/logbg.jpg'

const Login = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const handleClick = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 8000); 
  };

  const handlePasswordToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <section>
    <div class="h-[100vh] grid grid-cols-1 lg:grid-cols-2">
      <div class="relative hide-mobile flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
        <div class="absolute inset-0">
          <img
            class="h-[100vh] w-full rounded-br-full rounded-tr-full rounded object-cover"
            src={logbg}
            alt=""
          />
        </div>
      </div>
      <div class="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        
      {/* <div className='libre-caslon-text-bold my-28 text-4xl text-blue-700'><span className='text-blue-900'>G</span><span className='text-yellow-500'>M</span><span className='text-red-500'>R</span><span className=''>IT</span></div> */}
        <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        <div className='w-auto mb-1'><h3 className='text-2xl sm:text-4xl font-bold border bg-gray-100 pb-1 pt-2 px-4 rounded-md w-[30%]' style={{fontFamily : "Grandstander"}}><span className='text-cyan-700'>K</span>eto<span className='text-cyan-700'>.</span></h3></div>
          <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">
            Student Login
          </h2>
          <p class="mt-2 text-sm text-gray-600">
            Don&#x27;t have an account?{" "}
            <a
              href="#"
              title=""
              class="font-semibold text-black transition-all duration-200 hover:underline"
            >
              Contact Your Administator
            </a>
          </p>
          <form onSubmit="#" class="mt-8">
            <div class="space-y-5">
              <div>
                <label for="" class="text-base font-medium text-gray-900">
                  {" "}
                  Email address{" "}
                </label>
                <div class="mt-2">
                  <input
                    class="flex h-10 w-full rounded-md border border-gray-400 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between">
                  <label for="" class="text-base font-medium text-gray-900">
                    {" "}
                    Password{" "}
                  </label>
                  <a
                    href="#"
                    title=""
                    class="text-sm font-semibold text-black hover:underline"
                  >
                    {" "}
                    Forgot password?{" "}
                  </a>
                </div>
                <div className="mt-2">
                <div className="flex items-center border border-gray-400 rounded-md">
                  <input
                    className="h-10 w-full rounded-l-md bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 border-none"
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div onClick={handlePasswordToggle} className="flex items-center px-3 cursor-pointer">
                    {isPasswordVisible ? <FaRegEye /> : <RiEyeCloseFill />}
                  </div>
                </div>
              </div>
              </div>
              <div>
              <button
      type="button"
      className="inline-flex w-full items-center justify-center rounded-full bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#40ADFE', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle
            className="opacity-100"
            cx="12"
            cy="12"
            r="10"
            stroke="url(#gradient)"
            strokeWidth="4"
          ></circle> 
        </svg>
      ) : (
        <>
          Login
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </>
      )}
    </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Login;