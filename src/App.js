
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
  <div class="container mx-auto flex flex-col px-5 py-20 justify-center items-center">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={Logo}/>
    <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">TikTok Voice Generator</h1>
      <p class="mb-8 leading-relaxed">a simple TikTok Text To Speach .</p>
      <div class="flex w-full justify-center items-end mb-7">
        <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
          <label for="hero-field" class="leading-7 text-sm text-gray-400">Your message {count}/300 Characters</label>
          
          <textarea value={input} maxLength="300"  onChange={(e)=>{
        setInput(e.target.value)
        setCount(e.target.value.length)
        }} id="message" rows="4" class="block p-2.5 w-full text-sm  rounded-lg border  focus:ring-blue-900  bg-gray-700 border-gray-600 placeholder-gray-400 text-white" placeholder="Your message..."></textarea>
        </div>
        
       <button onClick={HandleButton} type="button" class="inline-flex text-white bg-gradient-to-br py-2 px-6 from-pink-700 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg  text-center ">Talk</button>

      </div>
      
        
      

     <SelectOptions Type={Type} setType={setType}/>

      <div class="flex text-gray-300">
      {isLoading ? (
          <div role="status">
    <svg aria-hidden="true" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
      ):(
        Link ? (
          <div>
          <audio  autoPlay controls src={'data:audio/mp3;base64,'+Link}>
        The “audio” tag is not supported by your browser.
      </audio>
       
       
       <button onClick={downloadAudio} type="button" class="mt-3 text-white bg-gradient-to-br from-pink-700 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Download</button>
          
          </div>
          
        ):(
          Clicked && <div class="p-3 mb-4 text-sm text-red-800 bg-red-200 rounded-lg " role="alert">
          <span class="font-medium">Error . Invalid Input!</span> 
        </div>
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
