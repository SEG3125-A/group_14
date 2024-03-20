// About.js
import React from 'react';
import styles from './css/About.module.css';


const About = () =>
    <div className={styles.aboutContainer}>
        <h1 className= {styles.numberText}>Our Story</h1>
        
<div className={styles.container}>

<div className={styles.imageContainer}>  

<img src={require("../assets/girlboss_stock1.webp")} alt="womp" />
</div>
<div className={styles.textContainer}>
<p className={styles.description}> In a realm where creativity thrived, a trio of dedicated women photographers, Sarah, Maya, and Lily, shared a common passion for capturing life's essence through their lenses. They yearned for a space where they could freely share their work, support each other, and build lasting connections. </p>
</div>

</div>


  <div className={styles.container}>

      <div className={styles.imageContainer}>  
      <img src={require("../assets/photography_stock3.jpeg")} alt="womp" />
</div>
<div className={styles.textContainer}>
   <p className={styles.description}>
  After months of brainstorming, late-night coding sessions, and heartfelt discussions, their vision came to life: WanderLens. 
  This comprehensive web platform was more than just a gallery for showcasing photos; it was a vibrant community where photographers could come together to find inspiration, seek guidance, and celebrate their shared love for the craft.
    </p>
    </div>
 
  </div>
 


  <div className={styles.container}>

      <div className={styles.imageContainer}>  
      <img src={require("../assets/photography_stock_img2.jpeg")} alt="womp" />
</div>
<div className={styles.textContainer}>
<div className={styles.description}>
  From its humble beginnings, WanderLens quickly gained traction, attracting photographers from around the globe who were drawn to its promise of creativity, education, and professional collaboration. As the community grew, so too did the platform's offerings, evolving to meet the needs of its diverse and passionate members. With each click of the shutter and every post shared, Wander Lens became not just a website, but a home for photographers—a place where they could find camaraderie, support, and endless opportunities to explore and expand their skills.
  </div>
    </div>
 
  </div>
 


    </div>

export default About;
