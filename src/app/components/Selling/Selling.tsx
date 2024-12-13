import Cart3 from "../../../../images/Cart (3).png"
import Cart4 from "../../../../images/Cart (4).png"
import Cart5 from "../../../../images/Cart (5).png"
import Cart6 from "../../../../images/Cart (6).png"
import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'

const Selling = () => {
    return (
        <div>
            <div className="mt-[120px] w-full  sm:h-[150px] flex items-center flex-col">
                <div className="w-[80%] flex flex-col sm:flex-row ">
                    <div className="flex gap-2 items-center">
                        <div className="w-[20px] h-[40px] sm:ml-[36px]  bg-oranges"></div>
                        <h2 className="font-poppin text-oranges">This Month</h2>

                    </div>
                </div>

                <div className="flex w-[76%]  mt-4 gap-16 items-center  justify-between flex-col sm:flex-row ">
                    <h1 className="font-inter font-[600] text-[24px] sm:text-[36px] text-black ">Best Selling Products</h1>
                    <button className="w-[159px] h-[56px]  bg-oranges text-[14px] text-white  border-[1px] border-oranges rounded-[5px] hover:bg-transparent hover:text-black transition-all duration-500 hidden sm:block">View All</button>


                </div>



            </div>




            {/* Best selling Products */}
            <div className="w-full h-auto  flex justify-center items-center  overflow-hidden" >
                <div className="w-full xl:w-[80%] h-auto ">



                    {/* Large box 1 start */}
                    <div className="flex flex-wrap   justify-evenly items-center w-full h-[1800px] sm:h-[800px]  xl:h-[500px]">
                        {/* box one */}
                        <div className="w-[270px] h-[350px]  flex-col  text-black justify-between items-center">






                            {/* small box 1 */}


                            <div className="w-[270px] xl:w-[270px] h-[250px] flex justify-center items-center">
                                <Image src={Cart3} alt="Cart3" />
                            </div>

                            <div className="">

                                <h2 className="text-[16px] font-[600] font-poppin pt-3">HAVIT HV-G92 Gamepad</h2>
                                <div className="flex gap-2">
                                    <button className="w-[100px] h-[30px] text-[16px] mt-4 border bg-transparent border-black rounded-[5px] hover:bg-black hover:text-white transition-all duration-[0.5s]">$120</button>
                                    <button className="w-[77px] h-[40px] text-[16px] mt-3 underline" >$160</button>
                                </div>
                                <div className="flex text-[20px] mt-2  items-center">
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <h1 className="pl-2">(88)</h1>
                                </div>
                            </div>





                        </div>




                        {/* box one end */}




                        {/* box two start */}

                        <div className="w-[270px]  h-[350px]  flex-col  text-black justify-between items-center">



                            <div className="w-[270px] xl:w-[270px] h-[250px] flex justify-center items-center">
                                <Image src={Cart4} alt="Cart4" />
                            </div>

                            <div className="">

                                <h2 className="text-[16px] font-[600] font-poppin pt-3">AK-900 Wired Keyboard</h2>
                                <div className="flex gap-2">
                                    <button className="w-[100px] h-[30px] text-[16px] mt-4 border bg-transparent border-black rounded-[5px] hover:bg-black hover:text-white transition-all duration-[0.5s]">$120</button>
                                    <button className="w-[77px] h-[40px] text-[16px] mt-3 underline" >$160</button>
                                </div>
                                <div className="flex text-[20px] mt-2  items-center">
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <h1 className="pl-2">(88)</h1>
                                </div>
                            </div>

                        </div>





                        {/* box two end */}


                        {/* box three start */}

                        <div className="w-[270px]  h-[350px]  flex-col  text-black justify-between items-center">



                            <div className="w-[270px] xl:w-[270px] h-[250px] flex justify-center items-center">
                                <Image src={Cart5} alt="Cart5" />
                            </div>

                            <div className="">

                                <h2 className="text-[16px] font-[600] font-poppin pt-3">IPS LCD Gaming Monitor</h2>
                                <div className="flex gap-2">
                                    <button className="w-[100px] h-[30px] text-[16px] mt-4 border bg-transparent border-black rounded-[5px] hover:bg-black hover:text-white transition-all duration-[0.5s]">$120</button>
                                    <button className="w-[77px] h-[40px] text-[16px] mt-3 underline" >$160</button>
                                </div>
                                <div className="flex text-[20px] mt-2  items-center">
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <h1 className="pl-2">(88)</h1>
                                </div>
                            </div>

                        </div>
                        {/* box three end */}



                        {/* box four start */}
                        <div className="w-[270px]  h-[350px]  flex-col  text-black justify-between items-center">



                            <div className="w-[270px] xl:w-[270px] h-[250px] flex justify-center items-center">
                                <Image src={Cart6} alt="Cart6" />
                            </div>

                            <div className="">

                                <h2 className="text-[16px] font-[600] font-poppin pt-3">S-Series Comfort Chair </h2>
                                <div className="flex gap-2">
                                    <button className="w-[100px] h-[30px] text-[16px] mt-4 border bg-transparent border-black rounded-[5px] hover:bg-black hover:text-white transition-all duration-[0.5s]">$120</button>
                                    <button className="w-[77px] h-[40px] text-[16px] mt-3 underline" >$160</button>
                                </div>
                                <div className="flex text-[20px] mt-2  items-center">
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <h1 className="pl-2">(88)</h1>
                                </div>
                            </div>

                        </div>
                        {/* box four end */}


                    </div>

                    {/* large box 1 end */}










                </div>

            </div>

            <div className="w-full h-[100px] mt-[40px] flex justify-center items-center  sm:hidden ">
              <button className="w-[159px] h-[56px]  bg-oranges text-[14px] text-white  border-[1px] border-oranges rounded-[5px] hover:bg-transparent hover:text-black transition-all duration-500 ">View All</button>

             </div>





        </div>
    )
}

export default Selling