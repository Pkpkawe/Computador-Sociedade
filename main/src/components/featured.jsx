import Card from "./card";

const Featured = ({card_parms_list})=>{

    let div_style = 'w-full flex justify-around items-center px-2 min-h-[500px] pt-5 flex-wrap [&_div]:mt-2'

    if(!card_parms_list){
        return (
            <div className={div_style}>
                <h1 className="capitalize text-2xl">
                    Nenhum destaque no momento
                </h1>
            </div>
        )
    }

    return (
        <div className={div_style}>
            {card_parms_list.map((element,index)=><Card content={element.content} image_src={element.image_src} link={element.link} key={index}/>)}
        </div>
        
    )
}

export default Featured 