  
const redirect_on_click = (redirect_to)=>{
    //redirec user to a page when click
    const base_url = import.meta.env.BASE_URL;
    window.location.href = `${base_url.replace(/\/$/, '')}/${redirect_to.replace(/^\//, '')}`
}

export {redirect_on_click}