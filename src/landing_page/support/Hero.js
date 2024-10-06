import React from 'react';
function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className='p-3 ' id="supportWrapper">
                <h4>Supprt Portal</h4>
                <a href=''>track page</a>
            </div>
            <div className='row p-3' id="supportWrapper">
                <div className='col-6 p-5 '>
                    <h1 className='fs-5 p-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input className='p-3' placeholder='Eg: how do I activate F&O, Why is my order getting rejected'/><br/>
                    <a href='' >Track account opening</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href=''>Track segment activation</a> &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href=''>Intraday margins </a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href=''>Kite user manual</a>&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div className='col-6 p-5'>
                    <h1>Featured</h1>
                    <p>Due to the settlement holiday on Monday, your account balance will not include the following credits on Sept 18, 2024:</p>
                 <ul>
                      <li>Intraday profits made in the Equity segment on Sept 17, 2024.</li>
                      <li>Credits from trades made in NFO, Currency, and Commodity derivatives on Sept 17, 2024. This will include options premium credits, futures M2M profits, etc. <a href=''>Read more.</a></li>
                    </ul>
                    
                </div>
            </div>
        </section>
     );
}

export default Hero;