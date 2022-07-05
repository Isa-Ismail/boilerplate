const Banner = () => {

  return (
    <div className="flex-col w-[100%] py-[18rem] h-screen">

        <div className="pb-6">
          <h1 className="text-[#343A40] text-center text-[3rem]">DISASTER RELIEF</h1>
        </div>

        <div>
          <p className="text-center">
            Find the latest news, in-depth stories, Q&A and FAQs about natural disaster and humanitarian emergencies around the world
          </p>
        </div>

        <div className="flex justify-center px-6 py-20 space-x-10">
          <button className="px-5 py-2 bg-green-700 rounded-md hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."><p className="text-white sm:text-[.9rem]">Get Aid</p></button>
          <button className="px-5 py-2 bg-green-700 rounded-md hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."><p className="text-white sm:text-[.9rem]">Donate</p></button>
          <button className="px-5 py-2 bg-green-700 rounded-md hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."><p className="text-white sm:text-[.9rem]">Get Involved</p></button>
        </div>

    </div>
  )
}

export default Banner