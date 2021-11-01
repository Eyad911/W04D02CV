import React from 'react'
import './style.css'

const Info = ()=> {
   
        return (
            <div className="infoDiv">
                <div className="mainInfo"> <img src="data:image/png;base64,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" alt="personalPic"/><h1>Eyad Alshuaibi</h1> <h2>Information Technology</h2><hr/></div>
                <div><h3>Qassim,Burydah</h3><h3><a href=""> Eyad.Hamoud.elq.js@tuwaiq.edu.sa</a></h3><hr/></div>
                <div className="logos"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSz6FdtsnQvEw_lAu0xUFLuuVpjNBqgR1Bhg&usqp=CAU" alt="personalPic" /><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="personalPic" /></div>
                <div><hr/><p>I built this site with <a href="#">React</a> components and a <a href="#">JSON Resume Schema.</a> The full source code can be found in <a href="#">my Github repo.</a></p></div>
            </div>
        )
    
}
export default Info