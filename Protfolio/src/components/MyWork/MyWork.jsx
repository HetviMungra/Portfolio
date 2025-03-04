
// import React from 'react'
// import './MyWork.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
// import mywork_data from '../../assets/mywork_data'
// import arrow_icon from '../../assets/arrow_icon.svg'

// export default function MyWork() {
//   return (
//     <div id='work' className='mywork'>
//         <div className="mywork-title">
//             <h1>My latest work</h1>
//             <img src={theme_pattern} alt="" />
//         </div>
//         <div className="mywork-containor">
//             {mywork_data.map((work,index)=>{
//                 return  <a 
//                 key={index} 
//                 href={work.w_link} 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//             >
//                 <img src={work.w_img} alt={work.w_name} />
//             </a>
            
//             })}

//         </div>
//         <div className="mywork-showmore">
//          <p>Show More</p>
//             <img src={arrow_icon} alt="" />
//         </div>
//     </div>
//   )
// }



import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import link_icon from '../../assets/link_icon.svg'; // Add link icon
import git_icon from '../../assets/git_icon.svg'; // Add GitHub icon

export default function MyWork() {
  return (
   
            <div id='work' className='mywork'>
                 <center>
        <div className="mywork-title">
             <h1>My latest work</h1>
          <img src={theme_pattern} alt="" />
       </div>
        <div className="mywork-container">
            {mywork_data.map((work, index) => (
                <div key={index} className="work-item">
                    <img src={work.w_img} alt={work.w_name} className="work-image" />
                    <div className="work-details">
                        <h3>{work.w_name}</h3>
                        <p>{work.w_description}</p>
                        <div className="work-icons">
                            <a href={work.w_link} target="_blank" rel="noopener noreferrer">
                                <img src={link_icon} alt="Link" />
                            </a>
                            <a href={work.w_git} target="_blank" rel="noopener noreferrer">
                                <img src={git_icon} alt="GitHub" />
                            </a>
                        </div>
                        <div className="work-tags">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Java Script</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        </center>
    </div>
  );
}