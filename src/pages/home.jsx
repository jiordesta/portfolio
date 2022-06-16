import React from 'react';

import file from '../file/Resume.docx'

import img from '../img/1.png'

const Home = () => {
    return (
        <div className="container-fluid xl home">
            <div className="row">
                <div className='col homecol'>
                    <img src={img} alt='' width={'90%'}></img>
                </div>
                <div className='col homecol'>
                    <div className='colcontent'>
                        <p className='text'>
                            Hi! my name is <code>Irson</code>.
                            I am a programmer, and I don't have life.
                            This is my personal website, created using <code>reactjs</code>.
                        </p>
                        <a href={file} download style={{textDecoration:'none',fontSize:'25px'}}>Click here to download my resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Home;