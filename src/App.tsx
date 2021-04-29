import React from 'react'
import dotsIcon from './icons/dots.svg'
import sunnyIcon from './icons/sunny.svg'
import logo from './icons/logo-color.svg'

const DegreeSymbol = () => <span>&#176;</span>

const Dots = () => <img src={dotsIcon} className="cursor-pointer h-6 w-6" alt="see more" />

const HourlyForecast = () => (
  <div className="flex flex-col items-center">
    <span className="text-sm text-gray-700 font-bold mb-2">20<DegreeSymbol /></span>
    <svg className="h-10 w-10 mb-2" xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 512.003 512.003" height="512" viewBox="0 0 512.003 512.003" width="512"><g><g><g><path d="m399.953 335.213c0-73.005-59.182-132.187-132.187-132.187-52.279 0-97.465 30.352-118.911 74.393-12.162-5.325-25.588-8.299-39.714-8.299-54.754-.001-99.141 44.386-99.141 99.14s44.387 99.141 99.141 99.141h290.812c36.503 0 66.094-29.591 66.094-66.094s-29.592-66.094-66.094-66.094z" fill="#a0c8ff" /><path d="m389.65 283.973c-20.01-47.56-67.05-80.95-121.88-80.95-5.87 0-11.65.38-17.32 1.13-.53-40.95 26.23-78.84 67.5-90.65 49.44-14.15 101 14.45 115.15 63.9 12.07 42.15-6.94 85.83-43.45 106.57z" fill="#ffcd69" /></g></g><g><path d="m409.647 325.827c-.861-13.143-3.523-25.8-7.728-37.737 36.44-24.89 53.145-70.314 40.796-113.438-7.578-26.483-25.017-48.428-49.103-61.793-24.083-13.364-51.929-16.549-78.411-8.97-41.813 11.965-71.438 48.983-74.495 91.74-17.478 3.373-34.205 9.99-49.337 19.649-19.586 12.503-35.761 29.533-47.198 49.604-11.255-3.827-22.999-5.762-35.028-5.762-60.183 0-109.143 48.96-109.143 109.14s48.96 109.14 109.141 109.14h193.414c5.522 0 10-4.477 10-10s-4.478-10-10-10h-193.414c-49.153 0-89.141-39.988-89.141-89.14s39.988-89.141 89.141-89.141c12.384 0 24.396 2.509 35.701 7.458 22.522 9.874 40.132 28.815 48.315 51.966 1.451 4.105 5.309 6.67 9.428 6.67 1.106 0 2.231-.185 3.332-.575 5.207-1.84 7.937-7.554 6.096-12.761-8.815-24.941-26.566-45.884-49.481-58.789 21.936-37.282 61.407-60.064 105.233-60.064 64.249 0 117.074 49.846 121.837 112.896-10.999 1.5-21.536 5.377-30.92 11.446-4.638 2.999-5.967 9.19-2.968 13.828 1.914 2.959 5.127 4.571 8.407 4.571 1.859 0 3.742-.519 5.42-1.604 9.055-5.855 19.57-8.95 30.411-8.95 30.931 0 56.094 25.164 56.094 56.094s-25.162 56.095-56.093 56.095h-17.398c-5.522 0-10 4.477-10 10s4.478 10 10 10h17.398c41.958 0 76.094-34.136 76.094-76.094 0-38.675-29.002-70.703-66.4-75.479zm-141.881-132.801c-2.253 0-4.498.073-6.739.178 3.9-32.812 27.232-60.803 59.675-70.087 21.345-6.109 43.79-3.541 63.205 7.23 19.414 10.773 33.471 28.461 39.579 49.809 9.594 33.504-2.56 68.725-29.741 89.19-23.795-45.327-71.332-76.32-125.979-76.32z" /><circle cx="342.555" cy="467.4" r="10" /><path d="m297.067 76.886c1.257 4.39 5.26 7.25 9.609 7.25.911 0 1.838-.125 2.757-.389 5.31-1.52 8.382-7.057 6.862-12.366l-8.453-29.528c-1.521-5.31-7.061-8.382-12.366-6.861-5.31 1.52-8.382 7.057-6.862 12.366z" /><path d="m194.639 131.818 26.856 14.902c1.537.853 3.202 1.258 4.843 1.258 3.516 0 6.927-1.858 8.753-5.15 2.68-4.829.937-10.916-3.892-13.596l-26.856-14.902c-4.83-2.68-10.917-.936-13.596 3.892-2.68 4.829-.937 10.916 3.892 13.596z" /><path d="m492.52 274.233-26.856-14.902c-4.828-2.68-10.916-.938-13.596 3.892-2.68 4.829-.938 10.917 3.893 13.596l26.856 14.902c1.537.853 3.201 1.258 4.843 1.258 3.516 0 6.926-1.858 8.753-5.15 2.679-4.829.937-10.916-3.893-13.596z" /><path d="m511.614 154.922c-1.52-5.311-7.062-8.382-12.366-6.862l-29.528 8.453c-5.31 1.52-8.382 7.056-6.862 12.366 1.257 4.391 5.26 7.251 9.609 7.251.911 0 1.838-.126 2.757-.389l29.528-8.453c5.309-1.52 8.382-7.056 6.862-12.366z" /><path d="m403.777 94.538c1.537.853 3.201 1.258 4.843 1.258 3.516 0 6.926-1.858 8.753-5.15l14.902-26.857c2.68-4.83.937-10.917-3.893-13.596-4.828-2.68-10.915-.937-13.596 3.892l-14.902 26.857c-2.679 4.829-.936 10.916 3.893 13.596z" /></g></g></svg>
    <span className="text-base text-gray-700 font-bold mb-2">1:00</span>
    <span className="text-sm text-gray-400 font-semibold">PM</span>
  </div>
)

const DailyForecast = () => (
  <div className="flex flex-col items-center">
    <span className="text-sm text-gray-700 font-bold mb-2">20<DegreeSymbol /></span>
    <svg className="h-10 w-10 mb-2" xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 512.003 512.003" height="512" viewBox="0 0 512.003 512.003" width="512"><g><g><g><path d="m399.953 335.213c0-73.005-59.182-132.187-132.187-132.187-52.279 0-97.465 30.352-118.911 74.393-12.162-5.325-25.588-8.299-39.714-8.299-54.754-.001-99.141 44.386-99.141 99.14s44.387 99.141 99.141 99.141h290.812c36.503 0 66.094-29.591 66.094-66.094s-29.592-66.094-66.094-66.094z" fill="#a0c8ff" /><path d="m389.65 283.973c-20.01-47.56-67.05-80.95-121.88-80.95-5.87 0-11.65.38-17.32 1.13-.53-40.95 26.23-78.84 67.5-90.65 49.44-14.15 101 14.45 115.15 63.9 12.07 42.15-6.94 85.83-43.45 106.57z" fill="#ffcd69" /></g></g><g><path d="m409.647 325.827c-.861-13.143-3.523-25.8-7.728-37.737 36.44-24.89 53.145-70.314 40.796-113.438-7.578-26.483-25.017-48.428-49.103-61.793-24.083-13.364-51.929-16.549-78.411-8.97-41.813 11.965-71.438 48.983-74.495 91.74-17.478 3.373-34.205 9.99-49.337 19.649-19.586 12.503-35.761 29.533-47.198 49.604-11.255-3.827-22.999-5.762-35.028-5.762-60.183 0-109.143 48.96-109.143 109.14s48.96 109.14 109.141 109.14h193.414c5.522 0 10-4.477 10-10s-4.478-10-10-10h-193.414c-49.153 0-89.141-39.988-89.141-89.14s39.988-89.141 89.141-89.141c12.384 0 24.396 2.509 35.701 7.458 22.522 9.874 40.132 28.815 48.315 51.966 1.451 4.105 5.309 6.67 9.428 6.67 1.106 0 2.231-.185 3.332-.575 5.207-1.84 7.937-7.554 6.096-12.761-8.815-24.941-26.566-45.884-49.481-58.789 21.936-37.282 61.407-60.064 105.233-60.064 64.249 0 117.074 49.846 121.837 112.896-10.999 1.5-21.536 5.377-30.92 11.446-4.638 2.999-5.967 9.19-2.968 13.828 1.914 2.959 5.127 4.571 8.407 4.571 1.859 0 3.742-.519 5.42-1.604 9.055-5.855 19.57-8.95 30.411-8.95 30.931 0 56.094 25.164 56.094 56.094s-25.162 56.095-56.093 56.095h-17.398c-5.522 0-10 4.477-10 10s4.478 10 10 10h17.398c41.958 0 76.094-34.136 76.094-76.094 0-38.675-29.002-70.703-66.4-75.479zm-141.881-132.801c-2.253 0-4.498.073-6.739.178 3.9-32.812 27.232-60.803 59.675-70.087 21.345-6.109 43.79-3.541 63.205 7.23 19.414 10.773 33.471 28.461 39.579 49.809 9.594 33.504-2.56 68.725-29.741 89.19-23.795-45.327-71.332-76.32-125.979-76.32z" /><circle cx="342.555" cy="467.4" r="10" /><path d="m297.067 76.886c1.257 4.39 5.26 7.25 9.609 7.25.911 0 1.838-.125 2.757-.389 5.31-1.52 8.382-7.057 6.862-12.366l-8.453-29.528c-1.521-5.31-7.061-8.382-12.366-6.861-5.31 1.52-8.382 7.057-6.862 12.366z" /><path d="m194.639 131.818 26.856 14.902c1.537.853 3.202 1.258 4.843 1.258 3.516 0 6.927-1.858 8.753-5.15 2.68-4.829.937-10.916-3.892-13.596l-26.856-14.902c-4.83-2.68-10.917-.936-13.596 3.892-2.68 4.829-.937 10.916 3.892 13.596z" /><path d="m492.52 274.233-26.856-14.902c-4.828-2.68-10.916-.938-13.596 3.892-2.68 4.829-.938 10.917 3.893 13.596l26.856 14.902c1.537.853 3.201 1.258 4.843 1.258 3.516 0 6.926-1.858 8.753-5.15 2.679-4.829.937-10.916-3.893-13.596z" /><path d="m511.614 154.922c-1.52-5.311-7.062-8.382-12.366-6.862l-29.528 8.453c-5.31 1.52-8.382 7.056-6.862 12.366 1.257 4.391 5.26 7.251 9.609 7.251.911 0 1.838-.126 2.757-.389l29.528-8.453c5.309-1.52 8.382-7.056 6.862-12.366z" /><path d="m403.777 94.538c1.537.853 3.201 1.258 4.843 1.258 3.516 0 6.926-1.858 8.753-5.15l14.902-26.857c2.68-4.83.937-10.917-3.893-13.596-4.828-2.68-10.915-.937-13.596 3.892l-14.902 26.857c-2.679 4.829-.936 10.916 3.893 13.596z" /></g></g></svg>
    <span className="text-base text-gray-700 font-bold mb-2">Tue</span>
  </div>
)

function App() {
  return (
    <>
      <main className="bg-gray-200 h-screen flex flex-col">
        <header className="self-center p-4">
          <img src={logo} className="h-8" />
        </header>
        <div className="flex-grow flex justify-center items-center flex-col">
          <div className="max-w-lg flex flex-wrap">
            <div className="bg-white rounded-3xl shadow flex-grow w-full flex flex-col mb-4 px-8 pt-8">
              <div className="flex justify-between pb-4">
                <div className="flex flex-col justify-center">
                  <h3 className="text-8xl text-gray-700	font-semibold font-mono">23<DegreeSymbol /></h3>
                  <p className="text-gray-400 font-semibold font-mono">Coimbra, Portugal</p>
                </div>
                <div className="bg-gray">
                  <img src={sunnyIcon} className="cursor-pointer h-24 w-24" alt="today's weather icon" />
                </div>
              </div>
              <div className="self-center">
                <Dots />
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow flex-grow w-full flex flex-col mb-4 px-12 pt-8">
              <div className="flex justify-between">
                <HourlyForecast />
                <HourlyForecast />
                <HourlyForecast />
                <HourlyForecast />
                <HourlyForecast />
              </div>
              <div className="self-center mt-2">
                <Dots />
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow flex-grow w-full flex flex-col mb-4 px-12 pt-8">
              <div className="flex justify-between">
                <DailyForecast />
                <DailyForecast />
                <DailyForecast />
                <DailyForecast />
                <DailyForecast />
              </div>
              <div className="self-center mt-2">
                <Dots />
              </div>
            </div>
          </div>
        </div>
        <div className="self-center p-4">
          <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
          </div>
        </div>
      </main>
    </>
  )
}

export default App;
