import { Header, Footer, PlatformsSideBar } from 'components'
import { FC, memo, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'


export const PageLayout: FC = memo(() => {
  const location = useLocation();

  useEffect(()=>{
    window.scrollTo({
      top: 0,
      left: 0
    });
  },[location])

  return (
    <div className={'relative flex flex-col min-h-screen w-full children:flex-grow'}>
      <Header/>
      <div className='pt-100 rounded-b-50  pb-50 bg-page -mb-50 z-10'>
      <Outlet />
      </div>
       <Footer/>
    </div>
  )
})