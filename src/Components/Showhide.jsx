import React, { useState } from 'react'
import { Container } from 'react-bootstrap'


const Showhide = () => {

    const [ showTab, setShowTab ] = useState(1);

    const handleTab = (e) => {
        setShowTab(e);
    }

  return (
    <React.Fragment>
        <Container>
        <div className='row'>
            <h3 className='mt-3 mb-3 p-4 text-xl capitalize'>Show Hide Div Content on button click in Reactjs</h3>
            <div className='p-4 col-sm-12 bg-light max-w-[660px] border border-red-300'>
                <ul className=' cursor-pointer flex gap-20 nav nav-pills mb-3 mt-1' id='pills-tab' role="tablist"> 
                    <li class="nav-item" role='presentation'>
                        <button 
                        className={ showTab === 1 ? "nav-link active bg-blue-500 p-2 rounded-md hover:p-3 hover:text-white/50 hover:transition-100" : "nav-link" }
                        onClick={() => handleTab(1)}
                        >Home</button>
                    </li>
                    <li class="nav-item" role='presentation'>
                        <button 
                        onClick={() => handleTab(2)}
                        className={ showTab === 2 ? "nav-link text-blue-500 active" : "nav-link text-blue-500"}>Profile</button>
                    </li>
                </ul>

                <div className='tab-content text-dark' id='pills-tabContent'>
                    <div className={ showTab === 1 ? 'tab-pane fade show active' : 'tab-pane fade show'}>
                        <p>Tab 1 content</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, aspernatur vel! Accusantium corrupti quidem ipsum dolore tempora ullam quibusdam totam nam, error odio laborum, harum quam natus eligendi id dolorum?</p>
                    </div>
                </div>
                    <div className={ showTab === 2 ? 'tab-pane fade show active' : 'tab-pane fade show'}>
                        <p>Tab 2 content</p>
                        <p>Fill the form.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, aspernatur vel! Accusantium corrupti quidem ipsum dolore tempora ullam quibusdam totam nam, error odio laborum, harum quam natus eligendi id dolorum?
                        </p>
                    </div>

            </div>
        </div>
        </Container>
    </React.Fragment >
  )
}

export default Showhide