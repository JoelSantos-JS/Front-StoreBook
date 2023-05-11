import { Container } from "./style";

export default function Nav() {





    return (
        <>
            <Container>
                
            <div className="flex flex-col w-64 h-screen bg-black">
      <div className="flex items-center justify-center h-16 text-white text-2xl font-bold">Home</div>
      <div className="flex-grow overflow-y-auto">
        <nav className="flex flex-col mt-4">
          <a className="px-4 py-2 text-gray-300 hover:bg-white  hover:text-black" href="#">Category</a>
         
        </nav>
      </div>
    </div>



            



            </Container>
      

        </>
    )
}