import { Header, Footer } from 'components'
import { FC, memo } from 'react'
import { Outlet } from 'react-router'


export const PageLayout: FC = memo(() => {
  return (
    <div className={'overflow-hidden flex flex-col min-h-screen w-full children:flex-grow'}>
      <Header/>
      <div className='pt-100 rounded-b-50  pb-50 bg-page -mb-50 z-10'>
      <Outlet />
      </div>
       <Footer/>
    </div>
  )
})