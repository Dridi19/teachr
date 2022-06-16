import './Firstpage.css';
import Sidebar from "./Sidebar.js"
import Content from "./Content.js"

function Firstpage() {
  return (

    <div>
          <div className='home'>
            <Sidebar/>
            <Content/>
          </div>
    </div>
  );
}

export default Firstpage;
