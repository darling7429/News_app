import React, { useEffect, useState } from 'react'
import axios from "axios";
const categories=["general","health","science","sports","entertainment"]


function Body() {
  var emp=[]
    const[category,setcategory]=useState("general")
    const[loading,setloading]=useState(false)
    const[data,setdata]=useState([])
   
   
  
    
   
    const handle_click=(item)=>{
        setloading(true)
        setcategory(item);
        setloading(false);
        
    }
   
    useEffect(()=>{
loadnews()
    },[])
    useEffect(()=>{
      loadnews()
    },[category])
   
	const loadnews = () => {
		setloading(true);
axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=4b233e45a7f94d5488c5bdaba5031f7c`).then((resp)=>{
  setdata(resp.data.articles)
  console.log(resp.data.articles)
  
  setloading(false)
}).catch((err)=>{
  console.log(err)
})
	}
  











  return (
    <>
    <div className='flex justify-center items-center'>
        {
            categories.map((item,index)=>{
                return(
                   <div className='flex m-2 ' key={index}>
                    <button className={category===item? 'btn bg-green-500 rounded-lg shadow-lg capitalize text-white p-2 inline-block':"'btn bg-red-500 rounded-lg shadow-lg capitalize text-white p-2 inline-block'"}  onClick={()=>{
                        handle_click(item)
                    }}>{item}</button>

                   </div>
                )

            })
        }
       
        
        </div>
        <div className='w-[100%] text-center mt-5'>
      <div className='ml-auto'>   
      <div className='grid grid-cols-1 ml-20 p-2 '>
    {
    loading? <div className="flex justify-center items-center space-x-2 w-full h-[50vh]">
    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-800 bg-red-800" role="status">
      
      
      
    </div>
    <p>loading data please wait.......</p>
    
  
    
  </div>:( data.map((item,index)=>{
      return( 
        <div className='flex justify-start items-center space-x-10 bg-white shadow-xl mt-4 p-2  w-[100%]'>
          <div className='img_div w-[300px] h-[220px] p-3  '>
            <img src={item.urlToImage} key={item.author} alt={item.urlToImage} className="shadow-xl  w-[250px] h-[200px] "/>
          </div>

          
          <div className='mt-10 space-y-8  w-[70%]'>
          <p className='font-bold text-lg ' key={item.title}>{item.title}-{item.author}</p>
          <p className='mt-4' key={item.urlToImage}>{item.description}</p>
          <div className='float-right bg-blue-600 p-2 rounded-lg shadow-lg text-white'><p className='capitalize'> date and time : {item.publishedAt.substring(0,10)}</p></div>
          
          
            </div>
           
        </div>
      
      )
     

    }))
    
    
    }

    
    

   
  </div>
      
      
        </div>
        
        
       
        

       </div>


      
        </>
  )
}

export default Body