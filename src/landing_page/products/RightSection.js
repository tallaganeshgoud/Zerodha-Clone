import React from 'react';
function RightSection({imageURL,ProjectTitle,Description,tryDemo,}) {
    return ( 
        <div className='container mt-5 '>
          <div className='row'>
            <div className='col-6 p-5 mt-5'>
              <h1 className='mb-4'>{ProjectTitle}</h1>
              <p>{Description}</p>
              <div>
              <a href={tryDemo} style={{textDecoration:"none"}}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a> 
              </div>
            </div>
            <div className='col-6 '>
              <img src={imageURL}/>
            </div>
          </div>
        </div>
     );
}

export default RightSection;