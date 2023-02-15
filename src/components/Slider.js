import React from 'react'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styles from './Slider.module.scss'
  
import images1 from '../assets/images/BOOK CEUS HAROLD_00001.jpg'
import images2 from '../assets/images/BOOK CEUS HAROLD_00002.jpg'
import images3 from '../assets/images/BOOK CEUS HAROLD_00003.jpg'
import images4 from '../assets/images/BOOK CEUS HAROLD_00004.jpg'
import images5 from '../assets/images/BOOK CEUS HAROLD_00005.jpg'
import images6 from '../assets/images/BOOK CEUS HAROLD_00006.jpg'
import images7 from '../assets/images/BOOK CEUS HAROLD_00007.jpg'
import images8 from '../assets/images/BOOK CEUS HAROLD_00008.jpg'
import images9 from '../assets/images/BOOK CEUS HAROLD_00009.jpg'
import images10 from '../assets/images/BOOK CEUS HAROLD_00010.jpg'
import images11 from '../assets/images/BOOK CEUS HAROLD_00011.jpg'
import images12 from '../assets/images/BOOK CEUS HAROLD_00012.jpg'
import images13 from '../assets/images/BOOK CEUS HAROLD_00013.jpg'
import images14 from '../assets/images/BOOK CEUS HAROLD_00014.jpg'
import images15 from '../assets/images/BOOK CEUS HAROLD_00015.jpg'
import images16 from '../assets/images/BOOK CEUS HAROLD_00016.jpg'
import images17 from '../assets/images/BOOK CEUS HAROLD_00017.jpg'
import images18 from '../assets/images/BOOK CEUS HAROLD_00018.jpg'
import images19 from '../assets/images/BOOK CEUS HAROLD_00019.jpg'
import images20 from '../assets/images/BOOK CEUS HAROLD_00020.jpg'
import images21 from '../assets/images/BOOK CEUS HAROLD_00021.jpg'
import images22 from '../assets/images/BOOK CEUS HAROLD_00022.jpg'
import images23 from '../assets/images/BOOK CEUS HAROLD_00023.jpg'
import images24 from '../assets/images/BOOK CEUS HAROLD_00024.jpg'
import images25 from '../assets/images/BOOK CEUS HAROLD_00025.jpg'
import images26 from '../assets/images/BOOK CEUS HAROLD_00026.jpg'
import images27 from '../assets/images/BOOK CEUS HAROLD_00027.jpg'
import images28 from '../assets/images/BOOK CEUS HAROLD_00028.jpg'
import images29 from '../assets/images/BOOK CEUS HAROLD_00029.jpg'
import images30 from '../assets/images/BOOK CEUS HAROLD_00030.jpg'
import images31 from '../assets/images/BOOK CEUS HAROLD_00031.jpg'
import images32 from '../assets/images/BOOK CEUS HAROLD_00032.jpg'
import images33 from '../assets/images/BOOK CEUS HAROLD_00033.jpg'
import images34 from '../assets/images/BOOK CEUS HAROLD_00034.jpg'
import images35 from '../assets/images/BOOK CEUS HAROLD_00035.jpg'
import images36 from '../assets/images/BOOK CEUS HAROLD_00036.jpg'
import images37 from '../assets/images/BOOK CEUS HAROLD_00037.jpg'
import images38 from '../assets/images/BOOK CEUS HAROLD_00038.jpg'
import images39 from '../assets/images/BOOK CEUS HAROLD_00039.jpg'
import images40 from '../assets/images/BOOK CEUS HAROLD_00040.jpg'
import images41 from '../assets/images/BOOK CEUS HAROLD_00041.jpg'
import images42 from '../assets/images/BOOK CEUS HAROLD_00042.jpg'





const slides=[
  

  {
    id:1,
  image:images1
  
 },
 {
  id:2,
image:images2

},
{
  id:3,
image:images3

},
{
  id:4,
image:images4

},
{
  id:5,
image:images5

},
{
  id:6,
image:images6

},
{
  id:7,
image:images7

},
{
  id:8,
image:images8

},
{
  id:9,
image:images9

},
{
  id:10,
image:images10

},
{
  id:11,
image:images11

},
{
  id:12,
image:images12

},
{
  id:13,
image:images13

},
{
  id:3,
image:images3

},
{
  id:14,
image:images14

},
{
  id:15,
image:images15

},
{
  id:16,
image:images16

},
{
  id:17,
image:images17

},
{
  id:18,
image:images18

},
{
  id:19,
image:images19

},
{
  id:20,
image:images20

},
{
  id:21,
image:images21

},
{
  id:22,
image:images22

},
{
  id:23,
image:images23

},
{
  id:24,
image:images24

},
{
  id:25,
image:images25

},
{
  id:26,
image:images26

},
{
  id:27,
image:images27

},
{
  id:28,
image:images28

},
{
  id:29,
image:images29

},
{
  id:30,
image:images30

},
{
  id:31,
image:images31

},
{
  id:32,
image:images32

},
{
  id:33,
image:images33

},
{
  id:34,
image:images34

},
{
  id:35,
image:images35

},
{
  id:36,
image:images36

},
{
  id:37,
image:images37

},
{
  id:38,
image:images38

},
{
  id:39,
image:images39

},
{
  id:40,
image:images40

},
{
  id:41,
image:images41

},
{
  id:42,
image:images42

},
 ]

 function Slider() {
 
 

return (
     
     <div> 
       <h1>je vous laisse découvrire mon Portfolio</h1>
      <Carousel  autoPlay interval ={6000}  showIndicators ={false} showStatus={false} className={styles.carousel}> 
    
{slides.map(slide => (

<div  key={slide.id}>
<img src={slide.image} alt='ima'/>

</div>
))}
</Carousel>
</div>

)}
        
                      
export default Slider