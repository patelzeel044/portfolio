import Link from 'next/link'
import React from 'react'

function Page() {
  return (
    <div className='justify-center text-center items-center'>
      <div className='text-xl font-bold m-5 p-5 '>
      <div>⚠️⚠️⚠️</div>
      The Backend of Gold Rush Slot is hosted on a free-tier service, so the server automatically turns off when inactive. As a result, it may take up to 100 seconds to start up after periods of inactivity, so please wait until the content loads.
      <div>⚠️⚠️⚠️</div>
      </div>
    <button className='text-xl font-bold p-2 m-2 rounded-lg bg-blue-950 text-white'>
    <Link href='https://gold-rush-slot-in.vercel.app/'>Click here to go to Gold Rush Slot</Link>
    </button>
    </div>
  )
}

export default Page