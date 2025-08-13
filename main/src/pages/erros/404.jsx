import Footer from "../../layout/Footer"
import Header from "../../layout/Header"

const base_url = import.meta.env.BASE_URL

const Page404 = ()=>{
    return (
        <>
        <Header/>
        <main>
            <section className="flex flex-col items-center min-h-[923px] justify-center">
                <img src={`${base_url}src/assets/img/404.svg`} alt="" className="mt-[10%] max-[500px]:w-[60%]" />
                <h1 className="mt-[5%] text-[32px] text-center w-full block tracking-[5px] text-color-1 uppercase px-5 max-[500px]:text-[1rem]">
                    Pagina não encontrada
                </h1>
            </section>
        </main>
        <Footer/>
        </>
    )
}


export default Page404