import React,{useState,useRef,useEffect} from 'react'
import './content.css';
import Addcard from "./Addcard.js"
export default function Content() {
  const [search,setsearch] = useState("Anglais")
  const [teachers,setteachers] =useState("")
  const [loading,setloading] =useState(true)
  const searchinput = useRef()
  const card = useRef()
  const Api_url = 'https://www.data.gouv.fr/api/1/users/?page=1&page_size=20';
  const scroll = (scrollOffset) => {
    card.current.scrollLeft += scrollOffset;
  };
  useEffect(()=>{
    const lastsearch = JSON.parse(localStorage.getItem(local_storage_key))
    if (lastsearch){
      setsearch(lastsearch) }
    const fetchteachers = async () => {
      try {
        const response = await fetch(Api_url);
        const teacherslist = await response.json();
        console.log(teacherslist)
        setteachers(teacherslist)
      } catch(err){
        console.log(err.stack)
      } finally {
        setloading(false);
      }
    }
   
    (async () => await fetchteachers())();
  },[])
  useEffect(()=>{
    localStorage.setItem(local_storage_key, JSON.stringify(search))
  },[search])

  const local_storage_key ="lastsearch"
  function subject(){
      const tosearch = searchinput.current.value
      if (tosearch){
      setsearch(tosearch)}
  }
  return (
    <div className='content'>
        <div className='top'>
            <div className='top-sentence'>
                <p>En quelle matiére avez-vous besoin de d'aide?</p>
            </div>
            <div className='top-search'>
            <form role="search" id="form">
            <input type="text" id="query" ref={searchinput} name="q"
            placeholder="SVT,piano,anglais,math..."
            aria-label="Search through site content"></input>
            <button type="button" onClick={subject} >
              <svg viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
            </button>
          </form>

            </div>
            <div className='bot-sentence'>
                <p>Les Teach'rs d{search} qui pourraient vous correspondre</p>
            </div>
        </div>
        <div className='cardsss' ref={card} >
          <div className='cards-cont' >

           {!loading && <Addcard teachers={teachers} />}

        </div>

        </div>
   
        <div className="bot-buttons">
        <input type="button" value="PRECEDENT" onClick={() => scroll(-200)} />
        <input type="button" className='next-btn' value="SUIVANT" onClick={() => scroll(200)} />
        </div>
    </div>
  )
}
