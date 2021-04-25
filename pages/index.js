import Head from 'next/head';
import Avatar from '../components/Avatar';
import { MicrophoneIcon, SearchIcon, ViewGridIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Footer from '../components/Footer';
import { useRef } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google 2.0</title>
        <link rel="icon" href="/google2.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Image</p>

          {/* icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          {/* avatar */}
          <Avatar url="https://avatars.githubusercontent.com/u/69115176?v=4" />
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center flex-grow w-4/5">
        <Image
          src="https://download.logo.wine/logo/Google_Search/Google_Search-Logo.wine.png"
          width={350}
          height={230}
        />
        <div className="flex w-full hover:shadow-lg focus-within:shadow-lg max-w-md border border-gray-200 rounded-full px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl -mt-11">
          <SearchIcon className="h-5 mr-5 text-gray-500" />
          <input ref={searchInputRef} type="text" className="flex-grow focus:outline-none" />
          <MicrophoneIcon className="h-5 mr-5 text-gray-500" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">Google Search</button>
          <button onClick={search} className="btn">I'm Feeling Lucky</button>
        </div>
      </form>


      {/* Footer */}
      <Footer />
    </div>
  )
}
