import * as React from 'react';

function InactiveContainers(props: { info: { ID: any; Names: any; }; }) {
    const { ID, Names } = props.info;
    return ( 
        <div className='flex flex-col items-center m-10 rounded overflow-hidden shadow-lg h-[250px] bg-stone-50 font-bold w-[300px]'>
            <h1 className='mt-2'>Container Name: {Names} </h1>
            <h1 className='mt-2'>Container ID: {ID}</h1>
            <button className='mt-auto text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Activate Container</button>
        </div>
    );
}

export default InactiveContainers;