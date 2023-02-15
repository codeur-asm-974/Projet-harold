import React from 'react'
import Service from './Service.js'
import Paragraphe from './Paragraphe.js'
import Slider from './Slider.js'

import styles from './Content.module.scss'


 function Content() {
  return (
    <div className=' flex-fill  container p-20'>
      <h1 className='my-30'>Les services que nous vous proposons</h1>
      <div className={`card p-20 ${styles.contentCard}`}>
      <div className={styles.grid}>
        <div>
        <Service>
        <h3>Création d'identité visuel</h3>
        </Service>

        <Paragraphe>Réalisation logo</Paragraphe>
        <Paragraphe>carte de visite</Paragraphe>
        <Paragraphe>Affiche</Paragraphe>
        <Paragraphe>Brochure</Paragraphe>
        <Paragraphe>Réalisation de maquette visuel</Paragraphe>
        </div>
      
       
       
<div>
        <Service>
        <h3>Vidéo</h3>
        </Service>

        <Paragraphe>Prise de vue vidéo</Paragraphe>
        <Paragraphe>Montage video</Paragraphe>
        <Paragraphe>Sauvegarde cassette VHS vers USB</Paragraphe>
      
</div>
      <div>
      <Service>
        <h3>Print(impression)</h3>
        </Service>
        <Paragraphe>Carte de visite</Paragraphe>
        <Paragraphe>Affiche</Paragraphe>
        <Paragraphe>Brochure</Paragraphe>
        <Paragraphe>flyer</Paragraphe>
        <Paragraphe>Photo format A4</Paragraphe>
       
      </div>
        
      <div>
        <Service> 

        <h3>Photographie</h3>
        </Service>
        <Paragraphe>Shooting photo</Paragraphe>
        <Paragraphe>Retouche</Paragraphe>
        <Paragraphe>Réalisation diapo photo avec fond musical</Paragraphe>
        <Paragraphe>Restauration photo ancienne</Paragraphe>
        <Paragraphe>impression et plastification format A4</Paragraphe>
       
</div>
        
        
      </div>
      </div>
      <div>
        <Slider />
      </div>
    </div>
  )
}
export default Content;