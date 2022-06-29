const Banner = () => {

  return (
    <div className="flex-col h-[100vh] w-[100%] bg-[url(/floodLanding.jpg)] bg-no-repeat bg-cover bg-center py-[10rem]">

        <div className="flex justify-center">
          <h1>DISASTER RELIEF</h1>
        </div>

        <div className="flex justify-center">
          <p>
            Find the latest news, in-depth stories, Q&A and FAQs about natural disaster and humanitarian emergencies around the world
          </p>
        </div>

        <div className="flex justify-center py-20 space-x-10">
          <button className="px-5 py-2 bg-green-700 rounded-md"><h2 className="text-white">Get Aid</h2></button>
          <button className="px-5 py-2 bg-white rounded-md"><h2 className="text-black">Get Involved</h2></button>
        </div>

    </div>
  )
}

export default Banner