import helmet from '../images/helmet.png'
export default function Navbar(){
    return(
        
        <nav class="navbar bg-primary justify-content-center" data-bs-theme="dark" style={{textAlign:"center"}}>
                <a class="navbar-brand" style={{color:"#FFFF00", fontSize:50, fontWeight:"bold"}}>RESQ</a>
                <img src={helmet} alt="" width={80}/>

        </nav>
      
    
    )
}