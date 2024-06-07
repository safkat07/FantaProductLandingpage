import img from '../assets/graph.png'
const Product = () => {
  return (
    <>
      {/* pc view */}
      <div className="w-full  two h-screen md:flex  hidden justify-center bg-gradient-to-t from-orange-300  to-orange-600 ">
        {/* product image */}
        <div className="w-1/2 pt-40 flex pl-20  items-center h-full ">
          <img style={{ transform: "rotateX(55deg)" }} className='mt-36' src={img} alt="" />
        </div>
        {/* product text */}
        <div className="w-1/2 flex flex-col gap-[5vh] text-[#f9f9f9] justify-center   h-full ">
          <h1 className='text-[3vw] '>Flavour Updated</h1>
          <p className='w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quos iure voluptas officiis suscipit aperiam dolore ab sunt deleniti, minima reiciendis dolor fuga! Dolorum, inventore delectus facere quod eveniet dolor cum accusamus deleniti, enim iste quidem, aperiam quaerat voluptates recusandae expedita eaque? Quas, pariatur? Eos doloremque quidem, voluptates non atque accusantium fugit dolores hic deserunt, exercitationem vero rerum doloribus quasi nostrum, qui amet quia! Impedit beatae voluptas illo nemo saepe veniam numquam velit, molestias at amet minus quam error cum harum. Laborum, non dignissimos voluptas doloremque voluptatibus facilis iusto, est repellendus velit dolor excepturi ipsa ducimus placeat esse vel illo.</p>
        </div>
      </div>
      {/* mobile view */}
      <div className="w-full md:hidden two h-screen flex flex-col-reverse justify-center bg-gradient-to-t from-orange-300  to-orange-600 ">
        {/* product image */}
        <div className="w-1/2 pt-40 flex pl-20  items-center h-full ">
          <img style={{ transform: "rotateX(55deg)" }} className='mt-36' src={img} alt="" />
        </div>
        {/* product text */}
        <div className="w-1/2 flex flex-col gap-[5vh] text-[#f9f9f9] justify-center   h-full ">
          <h1 className='text-[3vw] '>Flavour Updated</h1>
          <p className='w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quos iure voluptas officiis suscipit aperiam dolore ab sunt deleniti, minima reiciendis dolor fuga! Dolorum, inventore delectus facere quod eveniet dolor cum accusamus deleniti, enim iste quidem, aperiam quaerat voluptates recusandae expedita eaque? Quas, pariatur? Eos doloremque quidem, voluptates non atque accusantium fugit dolores hic deserunt, exercitationem vero rerum doloribus quasi nostrum, qui amet quia! Impedit beatae voluptas illo nemo saepe veniam numquam velit, molestias at amet minus quam error cum harum. Laborum, non dignissimos voluptas doloremque voluptatibus facilis iusto, est repellendus velit dolor excepturi ipsa ducimus placeat esse vel illo.</p>
        </div>
      </div>
    </>
  )
}

export default Product