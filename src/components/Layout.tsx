import { Header } from 'components'
import { FC, memo } from 'react'
import { Outlet } from 'react-router'
// import { Footer } from 'widgets/Footer'
// import { Header } from 'widgets/Header'

export const PageLayout: FC = memo(() => {
  return (
    <div className={'flex flex-col min-h-screen w-full children:flex-grow'}>
      <Header/>
      <div className='pt-100'> 

      <Outlet />
      </div>
      {/* <Footer/> */}
    </div>
  )
})