import React from 'react';
import './Layout.css';

const Teacher = () => (
    <div className='Teacher'>
        <div className='TeacherContent'>
            <div className='split TeacherText'>
                <div className='TeacherTextContent'>
                    <div className='Bottom'>
                        <h3>Professor Dhalsim</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lorem nibh, 
                            volutpat nec tincidunt eu, pellentesque in est. Proin in nibh sed mauris sollicitudin aliquet 
                            laoreet a erat. Integer justo mauris, interdum a tempus imperdiet, tristique suscipit urna. 
                            Mauris massa mauris, cursus et ligula non, varius lobortis sem. Etiam malesuada convallis ante, vitae 
                            cursus velit sollicitudin commodo. Nunc molestie accumsan elit, eu viverra quam commodo non. 
                            Nam ut diam ullamcorper justo finibus condimentum.</p>
                    </div>
                </div>
            </div>
            <div className='split TeacherImage'></div>
        </div>
    </div>
)

export default Teacher;