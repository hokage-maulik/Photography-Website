import React from 'react'
import '../CSS/Clent.css'

import { Link } from 'react-router-dom'
export default function Clent() {
  return (
    <div>

        <h1>Client Albums</h1>
               


               ______ 



               <p>Impress your clients by easily creating an album site that they'll love.</p>

               <div className="container">
                <div className="row">
                    <div className="col-md-4">
                       <Link style={{textDecoration:"none",color:"black"}} to={"/album1"}> <img src="https://www.ptaufiqphotography.com/wp-content/uploads/2019/02/Indian-Wedding-Haldi-Sunny%E2%80%99s-World-1-1-1024x683.jpg" alt="" className='img-fluid' />
                       
                         Saurabh &amp; Priya  <br />
                         Octomber 15,2023
                       </Link>
                    </div>
                     <div className="col-md-4">
                        <Link style={{textDecoration:"none",color:"black"}} to={"/album2"}> <img src="https://image14.photobiz.com/10152/13_20210122194938_9565717_xlarge.jpg" alt="" className='img-fluid' />
                       
                         Jack &amp; Rose  <br />
                         June 11,2020
                       </Link>
                    </div>
                     <div className="col-md-4">
                        <Link style={{textDecoration:"none",color:"black"}} to={"/album3"}> <img src="https://images.prismic.io/qpidindia/a02ddf78-f0dc-4442-9dce-01310fd8e848_14.png.jpg?auto=compress,format&rect=0,0,6720,4480&w=900&h=600" alt="" className='img-fluid' />
                       
                         AAmir &amp; Nagma  <br />
                         Deceber 31,2024
                       </Link>
                    </div>
                </div>
               </div>
    </div>
  )
}
