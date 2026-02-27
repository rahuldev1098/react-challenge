import React from 'react'

const Navbar = (props) => {
  console.log(props);
  return (
    <div>
        <div style={{backgroundColor:props.color}} className="bg-pink-700 mb-1 flex items-center justify-between text-white px-8 py-4 m-3">
            <h2>{props.title}</h2>
            <div className="flex gap-10">
                {props.links.map(function(elem, idx){
                    return <h4 key={idx}>{elem}</h4>
                })}
            </div>
        </div>
    </div>
  )
}

export default Navbar