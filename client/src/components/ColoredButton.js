import { useEffect } from "react"
import { Link } from "react-router-dom";

const ColorButton = () => {
  
  useEffect(() => {
    function b(timer){
      clearInterval(timer);
    }
    function a(){
      let random =  `hsl(${Math.floor((Math.random()*255))+1},${100}%,${50}%)`;
      let timer = setInterval(()=>{
        random =  `hsl(${Math.floor((Math.random()*255))+1},${100}%,${50}%)`;
        document.getElementById('signup-btn').style.backgroundColor = random;
      },200)
      document.getElementById('signup-btn').addEventListener('mouseleave',function(){
        b(timer);
        this.style.backgroundColor= "black";
      })
      document.getElementById('signup-btn').addEventListener('click',function(){
        b(timer);
        this.style.backgroundColor= "black";
      })
    }
   
    document.getElementById('signup-btn').addEventListener('mouseenter',a);
    
  },[]);
    return(
      <Link to="/newsletter">
        <div id="signup-btn" className="flex cursor-pointer items-center justify-center absolute top-0 right-0 text-white h-full w-1/4" style={{backgroundColor:"black"}}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
              <span className="hidden sm:block random-colors text-xs p-1" >Sign Me Up</span>
            
        </div>
      </Link>
    )
}

export default ColorButton