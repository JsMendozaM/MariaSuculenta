import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'




const Product = () => {
  return (
    <div className='p-20 bg-emerald-800 rounded-[10%] m-10'>
        <div>
            <h1 className='text-transparent text-[40px] font-bold bg-clip-text bg-gradient-to-r from-primary to-emerald-600'>Consigue tu dosis de apoyo emocional con Maria Suculentas</h1>
            <p className='text-xl text-gray-400'>Deje que nuestras suculentas hechas a mano y ricas en nutrientes ayuden a calmar su mente y alma.</p>
</div>
                    {/* Productos */}
        <div className='grid grid-cols-1 md:grid-cols-2 -ml-[20%] xl:ml-[2%] md:ml-[2%]'>
            <div className='bg-gradient-to-r from-green-300 rounded-3xl xl:w-[60%]  w-[115%] xl:h-[64%] md:h-[90%] flex flex-col items-center bg-lime-300 shadow-lg shadow-lime-300/50 mt-20 xl:ml-[2%] md:-ml-[20%] items-center p-2 xl:p-0 -mb-[20%] ' >
                <img src={img1} alt="sucuone" className='xl:w-[90%] w-[80%] m-10 rounded-2xl' />
                <h2 className='font-bold text-2xl -mt-10 text-secundary  ml-2 md:ml-0'>Suculenta Azul Marina
    </h2>
                <p className='font-medium p-3 text-gray-800'>fáciles de cuidar se cultivan con amor y brindan una presencia edificante en su hogar.</p>

                    <button type="button" class="bg-gradient-to-r   hover:from-amber-200
                    hover:to-yellow-600
                    border-2 border-secundary
                    hover:border-none
                    h-10 xl:w-40 w-full font-bold hover:text-white text-secundary rounded-xl xl:ml-[30%]  m-[2%] ">
                    Comprar
    </button>
 </div>
           
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-3 xl:-ml-10 xl:mt-20 mt-20 md:ml-1 md:w-[120%] gap-3 -mr-[3%] ml-2'>
                <div className='flex flex-col bg-gradient-to-r from-green-300 rounded-3xl bg-lime-300 shadow-lg shadow-lime-300/50 xl:w-[80%] w-[105%]  items-center p-1 xl:p-0 '>
                    <img src={img2} alt="sucutwo" className='mb:w-[50%] w-[80%] m-2 rounded-2xl' />

                    <h2 className='font-bold text-2xl  text-secundary ml-3'>Cariño Suculenta </h2>
                <p className='font-medium p-3 md:p-2 text-gray-800'>Está científicamente comprobado que nuestras suculentas reducen el estrés y la ansiedad.</p>

                    <button type="button" class="bg-gradient-to-r   hover:from-amber-200
                    hover:to-yellow-600
                    border-2 border-secundary
                    hover:border-none
                    h-10 xl:w-40 w-full font-bold hover:text-white text-secundary rounded-xl xl:m-2 m-5">
                    Comprar
    </button>
         </div>

        
         <div className='flex flex-col bg-gradient-to-r from-green-300 rounded-3xl bg-lime-300 shadow-lg shadow-lime-300/50  xl:w-[80%] w-[100%] h-[100%] items-center p-2 xl:p-2  '>
                    <img src={img3} alt="sucutwo" className='xl:w-[90%] w-[95%] m-2 rounded-2xl' />

                    <h2 className='font-bold text-2xl  text-secundary mt-3 ml-3'>Suculenta PostDate </h2>
                     <p className='font-medium p-3 text-gray-900'>Perfectas para iluminar cualquier habitación o para regalar a tus seres queridos.</p>

                <button type="button" class="bg-gradient-to-r   hover:from-amber-200
                hover:to-yellow-600
                border-2 border-secundary
                hover:border-none
                h-10 xl:w-40 w-full font-bold hover:text-white text-secundary rounded-xl m-2 ">
                Comprar
                
</button>
     </div>

                <div className='flex flex-col bg-gradient-to-r from-green-300 rounded-3xl bg-lime-300 shadow-lg shadow-lime-300/50  xl:w-[80%] w-[99%] md:w-[104%] h-[100%] mb-2 items-center p-1 xl:p-2'>
                    <img src={img4} alt="sucutwo" className='xl:w-[70%] w-[70%] rounded-2xl' />

                    <h2 className='font-bold text-2xl  text-secundary ml-3'>Jardin del eden </h2>
                     <p className='font-medium p-3 md:p-1 text-gray-800'>Quiera alegrar su hogar, estas suculentas seguramente traerán alegría a su vida.
                </p>

                    <button type="button" class="bg-gradient-to-r   hover:from-amber-200
                    hover:to-yellow-600
                    border-2 border-secundary
                    hover:border-none
                    h-10 xl:w-40 w-full font-bold hover:text-white text-secundary rounded-xl  ">
                    Comprar
                </button>
 </div>

                <div className='flex flex-col bg-gradient-to-r from-green-300 rounded-3xl bg-lime-300 shadow-lg shadow-lime-300/50  xl:w-[80%] w-[100%] h-[100%] items-center p-2 xl:p-2  '>
                    <img src={img5} alt="sucutwo" className='xl:w-[80%] w-[85%] m-2 rounded-2xl' />

                    <h2 className='font-bold text-2xl  text-secundary mt-2 ml-3'>Pareja Suculenta </h2>
                    <p className='font-medium p-3 text-gray-800'>Cada uno viene con un mensaje positivo único
        </p>

                    <button type="button" class="bg-gradient-to-r   hover:from-amber-200
                    hover:to-yellow-600
                    border-2 border-secundary
                    hover:border-none
                    h-10 xl:w-40 w-full font-bold hover:text-white text-secundary rounded-xl m-2">
                    Comprar
                </button>
            
            </div>    
        </div>
    </div>
</div>
  )
}

export default Product