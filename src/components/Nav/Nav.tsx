import { Container, ContainerText, SideBar } from "./style";
import { BiHomeAlt } from "react-icons/bi";
import { BiCategoryAlt } from "react-icons/bi";

export default function Nav() {





    return (
        <>
            <Container>

                <SideBar>

                    <div className="flex flex-col w-64 h-screen bg-[#495057]">
                        <div className="flex items-center justify-center h-16 text-white text-2xl gap-1 font-bold"><BiHomeAlt /> Home</div>
                        <div className="flex-grow overflow-y-auto">
                            <nav className="flex flex-col mt-4">
                                <a className="px-4 py-2 text-gray-300 hover:bg-white flex gap-1 justify-center items-center  hover:text-black" href="#"><BiCategoryAlt /> Category</a>

                            </nav>
                        </div>
                    </div>

                </SideBar>

                <ContainerText>
                    <h1>Bem Vindo</h1>


                    <p>Sistema para exemplicar um CRUD</p>
                </ContainerText>

            </Container>


        </>
    )
}