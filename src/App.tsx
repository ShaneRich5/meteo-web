import React from 'react'
import logo from './logo.svg'
import dotsIcon from './icons/dots.svg'
// import './App.css';

const Dots = () => <img src={dotsIcon} className="cursor-pointer h-6 w-6" />

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p className=" text-gray-700 text-4xl">
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <main className="bg-gray-200 h-screen flex flex-col">
      <div className="flex-grow flex justify-center items-center flex-col">
        <div className="max-w-lg flex flex-wrap">
          <div className="bg-white rounded-3xl shadow flex-grow w-full flex flex-col mb-4 px-8 pt-8">
            <div className="flex justify-between pb-4">
              <div className="flex flex-col justify-center">
                <h3 className="text-8xl text-gray-700	font-semibold font-mono">23<span>&#176;</span></h3>
                <p className="text-gray-400 font-semibold font-mono">Coimbra, Portugal</p>
              </div>
              <div className="bg-gray">
              </div>
            </div>
            <div className="self-center">
              <Dots />
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow flex-grow w-full flex flex-col mb-4 px-12 pt-8">
            <div className="flex justify-between">
            </div>
            <div className="self-center mt-2">
              <Dots />
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow flex-grow w-full flex flex-col mb-4 px-12 pt-8">
            <div className="flex justify-between">
            </div>
            <div className="self-center mt-2">
              <Dots />
            </div>
          </div>
        </div>
      </div>
      <div className="self-start p-4">
        <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </div>
      </div>
    </main>
  );
}

export default App;
