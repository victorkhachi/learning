import React,{useState} from 'react';
import Header from '../Header'
import Body from '../Body'
import About from './about'
import Portfolio from './portfolio'
import Contact from './contact'




function Home() {
    const intro =<div className='welcome'>
        Welcome to the portfolio page of Obi Onyedikachi Victor,
        the navigation bar above should serve you. 
        <span>thank you!!</span>
    </div>
    const [content,setContent]=useState(intro);
    const about =()=>setContent(<About />)
    const portfolio =()=>setContent(<Portfolio />)
    const contact =()=>setContent(<Contact />);

    const [navClass,setNav] =useState('navigation')
     const navigation=()=>setNav('navigation')
     const menu=()=>setNav('navigation2');
   
    return (
 
       <div className='header-body'>
           
           <Header 
            name ='Obi Onyedikachi'
            about={about}
            portfolio={portfolio}
            contact ={contact}
            menu ={menu}
            navClass={navClass}
            navigation={navigation}
           />
          
          
          
           <Body writeup={content} />
        </div>
    
    );
   }

export default Home;