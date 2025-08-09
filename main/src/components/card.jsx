//imports
import { redirect_on_click } from "../utils/events"

let Card = ({content,image_src,link})=>{

    return (
        <div onClick={()=>{redirect_on_click(link)}} className="w-[388px] h-[677px] block mx-2 p-3 cursor-pointer max-[900px]:w-[90%] max-[900px]:h-[25vh] max-[900px]:flex flex-row-reverse">
            <img src={image_src} alt="Imagem de destaque" className="h-[40%] w-full object-cover max-[900px]:w-[40%] max-[900px]:h-full" />
            <p className="w-full h-[60%] bg-color-2 p-3 max-[900px]:h-full max-[900px]:w-[60%] max-[900px]:text-left overflow-hidden text-ellipsis max-[900px]:line-clamp-8 line-clamp-[17]">
                {content}
            </p>
        </div>
    )
}

export default Card