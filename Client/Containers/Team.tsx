import * as React from 'react'
import luisPhoto from '../assets/IMG_2699-removebg-preview.png'
//after 1800px we wnat each card to stay as it it 

export default function Team() {
  return (
    <> 
    <div className='flex flex-row flex-wrap justify-evenly gap-3 mt-10 overflow-auto h-[95%] pb-8'>
    <div className="card w-70 bg-base-100 shadow-xl flex-2 h-[35rem] md:top-[.5rem] 2xl:top-[10rem]">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Anna</h2>
    <p>perdi mi tren de pensamiento</p>
    <div className="card-actions grid">
    <a className="btn btn-primary" href='https://github.com/amlarouche'>Github</a>
      <a className="btn btn-primary" href='https://www.linkedin.com/in/anna-larouche'>Linked In</a>
    </div>
  </div>
</div>
<div className="card w-70 bg-base-100 shadow-xl flex-2 h-[35rem] md:top-[.5rem] 2xl:top-[10rem]">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Rama</h2>
    <p>Been robbed more than once in spain lol</p>
    <div className="card-actions grid">
    <a className="btn btn-primary" href='https://github.com/RamaSaga'>Github</a>
      <a className="btn btn-primary" href='https://www.linkedin.com/in/luisgomezo/'>Linked In</a>
    </div>
  </div>
</div>
<div className="card w-70 bg-base-100 shadow-xl flex-2 h-[35rem] md:top-[.5rem] 2xl:top-[10rem]">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Dennis</h2>
    <p>nandebayo ? oni chan </p>
    <div className="card-actions grid">
    <a className="btn btn-primary" href='https://github.com/hdennispark'>Github</a>
      <a className="btn btn-primary" href='https://www.linkedin.com/in/luisgomezo/'>Linked In</a>
    </div>
  </div>
</div>
<div className="card w-70 bg-base-100 shadow-xl flex-2 h-[35rem] md:top-[.5rem] 2xl:top-[10rem]">
  <figure><img src={luisPhoto} alt="Luis Photo" /></figure>
  <div className="card-body">
    <h2 className="card-title">Luis</h2>
    <p>how did he even got into codesmith lol</p>
    <div className="card-actions grid">
    <a className="btn btn-primary" href='https://github.com/Luisortzg'>Github</a>
      <a className="btn btn-primary" href='https://www.linkedin.com/in/luisgomezo/'>Linked In</a>
    </div>
  </div>
</div>
</div>
</>
  )
}
