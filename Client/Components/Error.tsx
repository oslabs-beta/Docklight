import * as React from 'react';

//Component purpose - Will render when Docker isn't open on a users PC - Or when there are no active containers
    //for Data Overview
function Error() {
    return ( 
        <div className='flex flex-col items-center h-[100%]'>
            <h1 className='text-3xl font-medium text-center p-10'>We had some trouble connecting to the Docker Desktop App...</h1>
            <p className='text-3xl text-center'>Please make sure your Docker Desktop App is running and that you have active containers.</p>
            <div className='text-center mt-auto mb-[50px] p-10'>
                <p className='text-2xl'>If your Docker Desktop App is running and you are still getting this error, please:</p>
                <ul className='text-center text-1xl mt-2'>
                    <li>Open an issue via Github by clicking <a href='https://github.com/oslabs-beta/Docklight/issues' className='text-sky-400' target='_blank'>here</a></li>
                    <li>Include your OS, Docker Desktop version and any other details you may find useful</li>
                    <li>We'll look to fix it as soon as possible!!</li>
                </ul>
            </div>            
        </div>
    );
}

export default Error;