import Navbar from '../Navbar'
// import { Input } from '../ui/input'
// import { Button } from '../ui/button'
import Footer from '../Footer'
import HomeLayout from './HomeLayout'
// import i18next from 'i18next'

const Home = () => {
  return (
    <main className='pt-[10px] flex flex-col min-h-screen justify-between'>
      <div className='px-[22px] flex flex-col space-y-5 mb-10'>
        <Navbar />
        <HomeLayout />
      </div>
      {/* <div className="bg-[url('/bg.jpg')] h-[380px]">
        <div className='bg-black/50 flex flex-col justify-center gap-6 w-full px-6 h-[380px]'>
          <p className="text-3xl font-medium text-center text-white">
            {i18next.t("home_subscribe")}
          </p>

          <div className="flex flex-col gap-4 px-10">
            <Input className='bg-white h-12 focus-visible:right-0 shadow-none' placeholder='Enter your email' type='email' />
            <Button className='h-14 bg-[#FFB000] text-lg'>
              {i18next.t("home_subscribe_button")}
            </Button>
          </div>
        </div>
      </div> */}
      <Footer />
    </main>
  )
}

export default Home
