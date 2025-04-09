// export const getAllNews = async()=>{
//     const res = await fetch('https://the-news-portal-server.vercel.app/all-news',{
//         cache:'force-cache'})
//     const data = await res.json();
//     return data
// }

export const getAllNews =  () => {
    const res = fetch('https://news-portal-zeta.vercel.app/all-news', {
        Cache: 'force-cache'
    })
    const data = res.json();
    return data
}