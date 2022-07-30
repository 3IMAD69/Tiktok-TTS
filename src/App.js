
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Logo from './img/resized2.png'
import SelectOptions from './components/SelectOptions';




function App() {
  const [input , setInput] = useState('')
  const [Link,setLink] = useState('')
  const [Type,setType] = useState('en_us_001')
  const [isLoading,setLoading] = useState(false)
  const [Clicked,setClicked] = useState(false)
  const [count, setCount] = useState(0);

  const HandleButton = () => {
    console.log('type : '+Type)
    setClicked(true)
    setLoading(true);
    axios.post('https://bypass-cors-any.herokuapp.com/https://api16-normal-useast5.us.tiktokv.com/media/api/text/speech/invoke/?text_speaker='+Type+'&req_text='+input+'&speaker_map_type=0')
    .then(response => response.data)
    .then(data => {
      setLoading(false);
     // console.log(data.data)
      setLink(data.data.v_str)
    })
}

const downloadAudio = () =>{
  const a = document.createElement('a');
  a.href = 'data:audio/mp3;base64,'+Link;
  a.download = input.split(' ').slice(0, 3).join(' ');;
  a.click()
}

useEffect(()=>{
  Clicked && HandleButton();
},[Type])

  return (
    
    <div className='flex items-center justify-center h-screen bg-gray-900'>
      
<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={Logo}/>
    <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">TikTok Voice Generator</h1>
      <p class="mb-8 leading-relaxed">a simple TikTok Text To Speach .</p>
      <div class="flex w-full justify-center items-end mb-7">
        <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
          <label for="hero-field" class="leading-7 text-sm text-gray-400">Your message {count}/300 Characters</label>
          
          <textarea value={input} maxLength="300" onChange={(e)=>{
        setInput(e.target.value)
        setCount(e.target.value.length)
        }} id="message" rows="4" class="block p-2.5 w-full text-sm  rounded-lg border  focus:ring-blue-900  bg-gray-700 border-gray-600 placeholder-gray-400 text-white" placeholder="Your message..."></textarea>
        </div>
        
       <button onClick={HandleButton} type="button" class="inline-flex text-white bg-gradient-to-br py-2 px-6 from-pink-700 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg  text-center ">Talk</button>

      </div>
      
        
      

     <SelectOptions Type={Type} setType={setType}/>

      <div class="flex text-gray-300">
      {isLoading ? (
          <h1 className='py-3'>loading...</h1>
      ):(
        Link ? (
          <div>
          <audio  autoPlay controls src={'data:audio/mp3;base64,'+Link}>
        The “audio” tag is not supported by your browser.
      </audio>
       
       
       <button onClick={downloadAudio} type="button" class="mt-3 text-white bg-gradient-to-br from-pink-700 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Download</button>
          
          </div>
          
        ):(
          Clicked && <h1>error</h1>
        )
      )

      }
       
      
      </div>
    </div>
  </div>
</section>

      
    </div>
     
           
   
  );
}

export default App;
