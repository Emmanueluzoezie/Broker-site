import Link from 'next/link'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
          <div className=' md:justify-center md:flex md:space-x-6 p-10 md:pb-20'>
              <div className='md:w-[50%] '>
                  <h1 className='mb-6 text-center font-bold text-2xl'>Risk Disclaimer</h1>
                  <p className='text-gray-600 '>Trading and investing in digital options involves significant level of risk and is not suitable and/or appropriate for all clients. Please make sure you carefully consider your investment objectives, level of experience and risk appetite before buying or selling any digital option. Buying or selling digital options entails financial risks and could result in a partial or complete loss of your funds, therefore, you should not invest funds you cannot afford to lose.</p>
              </div>
              <div className='w-full md:w-[50%] justify-start mt-4 md:mt-0 '>
                  <h1 className='mb-6 flex flex-col font-bold text-xl'>Useful Links</h1>
                  <ul className=' space-y-3'>
                      <li className=' text-blue-400 flex items-center space-x-1'><MdKeyboardArrowRight /><Link href='/'>Home </Link></li>
                      <li className=' text-blue-400 flex items-center space-x-1'><MdKeyboardArrowRight /><Link href='/login'>Login</Link></li>
                      <li className=' text-blue-400 flex items-center space-x-1'><MdKeyboardArrowRight /><Link href='/register'>SignUp </Link></li>
                      <li className=' text-blue-400 flex items-center space-x-1'><MdKeyboardArrowRight /><Link href='/about'>About us</Link></li>
                      <li className=' text-blue-400 flex items-center space-x-1'><MdKeyboardArrowRight /><Link href='/contact'>Contact</Link></li>
                  </ul>
              </div>
          </div>
          <div className='mx-6 p-6 w-full bg-gray-200 border-t-2 border-gray-300 text-center'>
              <p>© Copyright Bictrade.com. All Rights Reserved</p>
          </div>
    </div>
  )
}

export default Footer