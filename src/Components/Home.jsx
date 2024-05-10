import React, { useState } from 'react'
import { BiTrash } from 'react-icons/bi';
import Modal from './Modal.jsx';
import Carousel from './Carousel.jsx';

const Home = () => {

    const [ open, setOpen ] = useState(false);

  return (
    <main className='App'>
        <button className='btn btn-danger' onClick={() => setOpen(true)}>
            <BiTrash /> Delete
        </button>

        <Modal open={open} onClose={() => setOpen(false)}> 
        <div className="text-center w-56">
          <BiTrash size={56} className="mx-auto text-red-300" />
            <div className="mx-auto my-4 w-48">
              <h3 className="text-lg font-black text-gray-800">
                Confirm Delete
              </h3>
              <p className="text-sm text-gray-500">
                Are you sure you want to delete this item?
              </p>
            </div>
            <div className="flex gap-4">
              <button className="btn btn-danger w-full">Delete</button>
              <button
              onClick={() => setOpen(false)} 
              className="btn btn-light w-full">Cancel</button>
            </div>

        </div>
        </Modal>
        <Carousel />
        <img src="/src/assets/istockphoto.jgp" alt="" />
    </main>
  )
}

export default Home