import * as React from 'react';

type Props = {
    activeOrInactive: string
}
//Will render generic text that differs whether used on the active or inactive page
function MissingContainers(props:Props) {
    return (  
        <div className='flex flex-col pt-10 justify-center items-center'>
            <h1 className='text-5xl font-medium text-center'>It looks like you have no {props.activeOrInactive === 'Active' ? 'active': 'inactive'} containers!</h1>
            <p className='mt-5 text-2xl w-[70%] text-center'>You can {props.activeOrInactive === 'Active' ? 'start': 'unmount'} containers via the Docker
             Desktop App or you can click the {props.activeOrInactive === 'Active' ? 'inactive': 'active'} button on the top left and 
             {props.activeOrInactive === 'Active' ? ' start': 'unmount'} a container from there.</p>
        </div>
    )
}

export default MissingContainers;