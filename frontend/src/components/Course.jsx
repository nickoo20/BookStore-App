import { Link } from 'react-router-dom';
import list from '../../public/list.json' ;
import Cards from './Cards';
const Course = () => {
  return(
    <>
          <div className='max-w-screen-2xl mx-auto container px-4 md:px-20'>
              <div className='mt-28 items-center justify-center text-center'>
                  <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! : )</span></h1>
                  <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sapiente harum perferendis esse numquam repudiandae quam, velit, facilis eaque doloribus, culpa tempora labore exercitationem mollitia eveniet? Excepturi molestias assumenda blanditiis, expedita voluptatibus magnam eveniet sed? Nesciunt soluta natus, eos nam nulla facere illo minima sunt fugiat voluptatem magnam ad architecto.</p>
                  <Link to={'/'}>
                    <button className='mt-6  bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
                  </Link>
              </div>
              <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
                 {
                    list.map((item)=>(
                      <Cards item={item} key={item.id}/>
                    ))
                 }
              </div>
          </div>
    </>
  )
}

export default Course;