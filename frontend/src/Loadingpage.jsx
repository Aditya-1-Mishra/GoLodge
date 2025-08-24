import React from 'react'
import LoadingPg_bg from "/src/images/LoadingPg_bg.jpg"
import { Link } from 'react-router-dom'

const Loadingpage = () => {
  return (
    <div>

   

<section style={{
    backgroundImage:`url(${LoadingPg_bg})`,
    backgroundPosition:'center',
    backgroundSize:'contain',
}}>
  <div
    className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
      Great deals for hosts…

        <strong className="block font-extrabold text-rose-500"> …and great stays for guests! </strong>
      </h1>

      <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
      "Seamless stays, effortless hosting. Unlock the best deals, whether you're booking or listing!"
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <Link to='/Login'
          className="block w-full rounded-sm bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:ring-3 focus:outline-hidden sm:w-auto"
        >
          Find Your Stay
        </Link>

        <Link to='/PartnersLogin'
          className="block w-full rounded-sm bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow-sm hover:text-rose-700 focus:ring-3 focus:outline-hidden sm:w-auto"
        >
          Rent Your Space
        </Link>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Loadingpage
