//imports
import { redirect_on_click } from "../utils/events"

let Card = ({content,image_src,link})=>{

    return (
        <div onClick={()=>{redirect_on_click(link)}} className="w-[388px] h-[677px] block mx-2 cursor-pointer">
            <img src={image_src} alt="Imagem de destaque" className="h-[40%] w-full object-cover" />
            <p className="w-full h-[60%] bg-color-2 p-2 text-center">
                {content}
            </p>
        </div>
    )
}

export default Card