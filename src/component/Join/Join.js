import React, { useState } from 'react'
import "./Join.css";

import { Link } from "react-router-dom";

let user;


const sendUser = () => {
  user = document.getElementById('joinInput').value;
  document.getElementById('joinInput').value = "";

}

const Join = () => {

  const [name, setname] = useState("");

  return (
    <div className="JoinPage">
          <div className="JoinContainer">
            
            <h3>CHAT APP</h3>
            {/* <h3>Welcome!!</h3> */}
            
              
              <input  onChange={(e) => setname(e.target.value)} placeholder="Enter Your Name" type ="text" id="joinInput"/>
              <Link onClick={(event) => !name ? event.preventDefault() : null} to="/chat"><button onClick={sendUser} className =  'joinbtn'>Login</button></Link>
          </div>
      </div>
    // <main>
    //   <div class="box">
    //     <div class="inner-box">
    //       <div class="forms-wrap">
    //         <form action="index.html" autocomplete="off" class="sign-in-form">
    //           <div class="logo">
    //             <h4>CHAT</h4>
    //           </div>

    //           <div class="heading">
    //             <h2>Welcome!!</h2>
    //           </div>

    //           <div class="actual-form">
    //             <div class="input-wrap">
    //               <input
    //                 type="text"
    //                 placeholder="Enter Your Full Name"
    //                 class="input-field"
    //                 autocomplete="off"
    //                 required
    //               />
    //               <label></label>
    //             </div>

    //             <div class="input-wrap">

    //               <input
    //                 input onChange={(e) => setname(e.target.value)} type="text"
    //                 className="input-field"
    //                 autocomplete="off"
    //                 placeholder="Enter Your Nick Name"
    //                 required
    //               />
    //               <label></label>
                  
    //               </div>
    //               <Link onClick={(event) => !name ? event.preventDefault() : null} to="/chat"><button onClick={sendUser} className =  'joinbtn'>Login</button></Link>
                
    //           </div>
    //         </form>



    //         <div class="carousel">
    //           <div class="images-wrapper">
    //             <img src="./img/image1.png" class="image img-1 show" alt="" />
    //             <img src="./img/image2.png" class="image img-2" alt="" />
    //             <img src="./img/image3.png" class="image img-3" alt="" />
    //           </div>

    //           <div class="text-slider">
    //             <div class="text-wrap">
    //               <div class="text-group">
    //                 <h2>Create your own courses</h2>
    //                 <h2>Customize as you like</h2>
    //                 <h2>Invite students to your class</h2>
    //               </div>
    //             </div>

    //             <div class="bullets">
    //               <span class="active" data-value="1"></span>
    //               <span data-value="2"></span>
    //               <span data-value="3"></span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     </div>
    // </main>


  )
}



export default Join
export { user }
