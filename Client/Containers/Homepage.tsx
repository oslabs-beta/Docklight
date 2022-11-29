import * as React from 'react';

export default function Homepage() {
  // console.log(data-theme)
  return (
    <div className='' data-theme=''>      
      <h1>Welcome to Docklight </h1>
    <h2>Your Containers shows the individual CPU usage, memory usage, and Network I/O of currently active containers.</h2>
    <section></section>
    <h2>Data Overview shows the average CPU and memory usage of all containers in a quickly-digestible display.</h2>
    </div>
  );
}
/*
Hello welcome to Docklight
This button does this and this button does this
----  The "Data Overview" page could be retitled to something like "your containers" or "containers"
Data Overview displays your active and inactive containers.
  Active containers show a status bar of their relative health, and are ordered top to bottom from least healthy to stable.
Your Containers shows active containers and their 
 */