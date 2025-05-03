import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 px-4 md:px-12 lg:px-20 py-10 text-white">
    <div className="flex md:flex-row flex-col justify-between items-center gap-6 mx-auto max-w-7xl">
      <div className="md:text-left text-center">
        <h2 className="font-bold text-xl">DropNest</h2>
        <p className="mt-1 text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} DropNest Inc. All rights reserved.
        </p>
      </div>
      <div className="space-y-1 text-center md:text-right">
        <p className="text-sm">Have questions? Reach out via:</p>
        <p className="text-sm">
          <span className="font-medium">Email:</span> t.sholanke5@gmail.com
        </p>
        <p className="text-sm">
          <span className="font-medium">Phone:</span> +2349071115021
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer
