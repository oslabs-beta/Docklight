import * as React from 'react';

function InactiveContainers(props: { info: { ID: any; Names: any; }; }) {
    const { ID, Names } = props.info;
    return ( 
        <div className='flex'>
            <h1>Container Name: {Names} </h1>
            <h1>Container ID: {ID}</h1>
        </div>
    );
}

export default InactiveContainers;