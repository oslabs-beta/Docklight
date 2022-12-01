import * as React from 'react'
import luisPhoto from '../assets/IMG_2699-removebg-preview.png'
import annaPhoto from '../assets/Anna-pic.jpg'
import ramaPhoto from '../assets/Rama-photo.png'
import dennisPhoto from '../assets/Dennis-photo.jpg'
//after 1800px we wnat each card to stay as it it 

export default function Team() {
  return (
    <> 
    <div className='flex flex-row flex-wrap justify-evenly gap-x-10 gap-y-10 mt-1 overflow-auto h-[95%] pb-[8rem]'>
    <div className="card w-[28rem] bg-base-100 shadow-xl flex-2 h-[40rem] md:top-[1.5rem] 2xl:top-[3rem]">
  <figure><img className='min-w-[31.7rem] max-w-[32rem]' src={annaPhoto} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Anna Larouche</h2>
    <p>Software Engineer</p>
    <div className="card-actions grid">
    <a className="btn btn-primary" href='https://github.com/amlarouche'>Github</a>
      <a className="btn btn-primary" href='https://www.linkedin.com/in/anna-larouche'>LinkedIn</a>
    </div>
  </div>
</div>
<div className="card w-[28rem] bg-base-100 shadow-xl flex-2 h-[40rem] md:top-[1.5rem] 2xl:top-[3rem]">
  <figure><img className='min-w-[31.7rem] max-w-[32rem]' src={ramaPhoto} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Andrew Rama</h2>
    <p>Software Engineer</p>
    <div className="card-actions grid">
    <a className="btn btn-primary" href='https://github.com/RamaSaga'>Github</a>
      <a className="btn btn-primary" href='https://www.linkedin.com/in/andrew-rama-075b3a145/'>LinkedIn</a>
    </div>
  </div>
</div>
<div className="card w-[28rem] bg-base-100 shadow-xl flex-2 h-[40rem] md:top-[1.5rem] 2xl:top-[3rem] ">
  <figure><img className='min-w-[31.7rem] max-w-[32rem]' src={dennisPhoto} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Dennis Park</h2>
    <p>Software Engineer</p>
    <div className="card-actions grid">
    <a className="btn btn-primary" href='https://github.com/hdennispark'>Github</a>
      <a className="btn btn-primary" href='https://www.linkedin.com/in/dennishpark/'>LinkedIn</a>
    </div>
  </div>
</div>
<div className="card w-[28rem] bg-base-100 shadow-xl flex-2 h-[40rem] md:top-[1.5rem] 2xl:top-[3rem] max-w-7xl">
  <figure><img className='min-w-[31.7rem] max-w-[32rem]' src={luisPhoto} alt="Luis Photo" /></figure>
  <div className="card-body">
    <h2 className="card-title">Luis Gomez</h2>
    <p>Software Engineer</p>
    <div className="card-actions grid">
    <a className="btn btn-primary" href='https://github.com/Luisortzg'>Github</a>
      <a className="btn btn-primary" href='https://www.linkedin.com/in/luisgomezo/'>LinkedIn</a>
    </div>
  </div>
</div>
</div>
</>
  )
}
