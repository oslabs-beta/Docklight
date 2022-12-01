import * as React from 'react';

//info will be the Container data needed for display
//Mount - function from YourContainers - On button click, will activate/mount the selected container
//testID - used for Jest to give the component unique testID's for react testing
type Props = {
    info: {
        ID: string,
        Names: string
    }
    mount: any,
    testID: string
}

//Props passed from YourContainers
//Purpose - Will render unique cards after clicking on the inactive button
function InactiveContainers(props: Props) {
    const { ID, Names } = props.info;
    return ( 
        <div className='flex flex-col items-center m-10 rounded overflow-hidden shadow-lg h-[250px] bg-stone-50 font-bold w-[300px]' data-testid={`${props.testID}`}>
            <h1 className='mt-2'>Container Name: {Names} </h1>
            <h1 className='mt-2'>Container ID: {ID}</h1>
            <button onClick={() => props.mount(props.info)} className='mt-auto text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Activate Container</button>
        </div>
    );
}

export default InactiveContainers;