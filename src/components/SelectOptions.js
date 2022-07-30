import React from 'react'

export default function SelectOptions({Type,setType}) {
  return (
    <select className='bg-gray-50 border border-gray-300 text-gray-900 mb-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
    id="voice" value={Type} onChange={(e) => {setType(e.target.value)}} >
            <option value="en_us_001" >Jessie (American Female)</option>
            <option value="en_us_002">Joey (American Female)</option>
            <option value="en_us_006">Jamie (American Male)</option>
            <option value="en_us_007">Charlie (American Male)</option>
            <option value="en_us_009">Blake (American Male)</option>
            <option value="en_us_010">Eddie (American Male)</option>

            <option value="en_au_001">Mia (Australian Female)</option>
            <option value="en_au_002">Chris (Australian Male)</option>
            <option value="en_uk_001">British Male 1</option>
            <option value="en_uk_003">British Male 2</option>

        <option value="fr_001">French Male 1</option>
            <option value="fr_002">French Male 2</option>
            <option value="de_001">German Female</option>
            <option value="de_002">German Male</option>
            <option value="es_002">Spanish Male</option>

        <option value="es_mx_002">Mexican Spanish Male</option>
            <option value="br_001">Brazilian Portuguese Female 1</option>
            <option value="br_003">Brazilian Portuguese Female 2</option>
            <option value="br_004">Brazilian Portuguese Female 3</option>
            <option value="br_005">Brazilian Portuguese Male</option>

        <option value="id_001">Indonesian Female</option>
            <option value="jp_001">Japanese Female 1</option>
            <option value="jp_003">Japanese Female 2</option>
            <option value="jp_005">Japanese Female 3</option>
            <option value="jp_006">Japanese Male</option>
            <option value="kr_002">Korean Male 1</option>
            <option value="kr_003">Korean Female</option>
            <option value="kr_004">Korean Male 2</option>


            <option value="en_female_f08_salut_damour">Alto (Salut Damour)</option>
            <option value="en_male_m03_lobby">Tenor (Lobby)</option>
            <option value="en_male_m03_sunshine_soon">Sunshine Soon</option>
            <option value="en_female_f08_warmy_breeze">Warmy Breeze</option>
            <option value="en_male_narration">Narrational</option>
            <option value="en_male_funny">Wacky</option>
            <option value="en_female_emotional">Peaceful</option>


            <option value="en_us_ghostface">Disney Ghostface</option>
            <option value="en_us_chewbacca">Disney Chewbacca</option>
            <option value="en_us_c3po">Disney C3PO</option>
            <option value="en_us_stitch">Disney Stitch</option>
            <option value="en_us_stormtrooper">Disney Stormtrooper</option>
            <option value="en_us_rocket">Disney Rocket</option>

            
            
        </select>
  )
}
