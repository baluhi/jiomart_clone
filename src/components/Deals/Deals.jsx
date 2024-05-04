import React from 'react'
import  './deals.css'
import {Link} from 'react-scroll'
const Deals = () => {

const dealsImages = [
    {
        id:1,
        imgUrl:"https://www.jiomart.com/images/cms/aw_rbslider/slides/1714480810_1.jpg?im=Resize=(368,538)"
    },
    {
        id:2,
        imgUrl:"https://www.jiomart.com/images/cms/aw_rbslider/slides/1714480940_2.jpg?im=Resize=(368,538)"
    }
    ,
    {
        id:3,
        imgUrl:"https://www.jiomart.com/images/cms/aw_rbslider/slides/1714480967_3.jpg?im=Resize=(368,538)"
    }
    ,
    {
        id:4,
        imgUrl:"https://www.jiomart.com/images/cms/aw_rbslider/slides/1714480994_4.jpg?im=Resize=(368,538)"
    }
    ,
    {
        id:5,
        imgUrl:"https://www.jiomart.com/images/cms/aw_rbslider/slides/1714481053_5.jpg?im=Resize=(368,538)"
    },
    {
        id:6,
        imgUrl:"https://www.jiomart.com/images/cms/aw_rbslider/slides/1714481077_6.jpg?im=Resize=(368,538)"
    }
]


  return (
    <>
   
    < div className='container '>
        <h1>Full Paisa Vasool Deals</h1>
        <div className="deals-container">
        {
            dealsImages.map((item, id) => {
                return(
                    <div key = {id} className="card">
                        <div className="card-body">
                        <img src={item.imgUrl} alt="" />
                        </div>
                        

                    </div>
                )
            })
        }
      </div>
      
    </div>
    
    </>
  )
}

export default Deals
