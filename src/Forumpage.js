import './Firstpage.css';
import Forum from "./Forum.js"
import Secondsidebar from "./Secondsidebar.js"

function Forumpage() {
  return (

    <div>
          <div className='home'>
            <Secondsidebar/>
            <Forum/>
          </div>
    </div>
  );
}

export default Forumpage;
