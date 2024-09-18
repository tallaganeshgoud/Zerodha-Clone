import React from 'react';
function LeftSection({imageURL,ProjectTitle,Description,tryDemo,Learnmore,googleplaystore,appstore}) {
    return (
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-6'>
              <img src={imageURL}/>
            </div>
            <div className='col-6 p-5 mt-5'>
              <h1 className='mb-4'>{ProjectTitle}</h1>
              <p>{Description}</p>
              <div>
              <a href={tryDemo} style={{textDecoration:"none"}}>Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href={Learnmore} style={{marginLeft:"50px", textDecoration:"none"}}>
              Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
              </div>
              <div className='mt-3'>
              <a href={googleplaystore}/>
              <img src='media/images/googlePlayBadge.svg'/>
              <a href={appstore}/>
              <img src='media/images/appstoreBadge.svg' style={{marginLeft:"50px"}}/>
              </div>
            </div>
          </div>
        </div>
      );
}

export default LeftSection;