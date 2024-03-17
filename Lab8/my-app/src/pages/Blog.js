// Blog.js
import React from 'react';
import styles from './css/Blog.module.css';

const imageData = [
    { src: require('../assets/blog_1.webp'), title: 'Concert', description: 'Metadata Extracted: Sony A7III, 35mm, f/1.8, 1/250 sec, ISO 3200, taken at a local music club in Austin, Texas, on June 9th, 2023. Automatic Tagging: "indie band," "live concert," "intimate venue," "musical ." Descriptive Caption: "this photograph captures the raw energy and connection of a live indie band performance. their passion with a captivated audience mere feet away. The intimacy of the venue adds to the immediacy of the moment, creating a shared experience that is the hallmark of the music scene. This shot, with its vivid colors and dynamic composition, showcases the vibrant spirit of live music and the communal joy it brings."' },
    { src: require('../assets/blog_2.jpg'), title: 'New Years Eve', description: 'Metadata Extracted: Nikon D750, 50mm, f/1.4, 1/125 sec, ISO 800, taken on December 31st, 2022. Automatic Tagging: "New Years Eve Party," "indoor celebration," "festivities," "joy." Descriptive Caption: "Inside the vibrant warmth of a New Years Eve celebration, where laughter and joy light up the room as brightly as the glittering decorations. This photograph captures an intimate moment of jubilation among friends, as they count down to midnight. The candid expressions, festive attire, and clinking glasses encapsulate the essence of welcoming the New Year with hope and camaraderie."' },
    { src: require('../assets/blog_3.jpeg'), title: 'Sol duc falls', description: 'Metadata Extracted: Canon EOS 5DS R, 70mm, f/11, 1/4 sec, ISO 100, taken in Olympic National Park, Washington, on May 15th, 2022. Automatic Tagging: "Sol Duc Falls," "Olympic National Park," "Washington," "waterfall," "natural beauty." Descriptive Caption: "Nestled in the heart of Olympic National Park, the Sol Duc Falls cascade with a grace and majesty. This photograph invites a moment of tranquility amidst the powerful rush of water, framed by lush, verdant forestry. The play of light and shadow, combined with the steady flow of the falls, conveys a sense of timeless beauty and the enduring spirit of nature in Washingtons wilderness."' },
    { src: require('../assets/blog_4.jpg'), title: 'Paris findings', description: 'Metadata Extracted: Canon EOS 5D Mark IV, 50mm, f/8, 1/250 sec, ISO 200, taken on April 15th, 2023. Automatic Tagging: "paris look," "architecture," "Gothic style,". Descriptive Caption: "The mesmerizing details of paris’ Gothic architecture, captured in the soft light of a spring morning, highlight the timeless beauty and historical significance of this Parisian look."' },
    { src: require('../assets/blog_5.jpg'), title: 'Swan Lake', description: 'Metadata Extracted: Canon EOS 5D Mark IV, 50mm, f/8, 1/250 sec, ISO 200, taken on April 15th, 2023. Automatic Tagging: "Swan Lake," "ballet performance," "elegance," "graceful movement." Descriptive Caption: "A captivating moment from Swan Lake, immortalized under the luminous glow of stage lights, showcasing the epitome of balletic grace and elegance. " ' },
  ];
  
  

// In your Blog.js  <div className={styles.semiCircle}></div> 
const Blog = () => (
    <div className={styles.blogContainer}>
        <div className={styles.titleWrapper}>
            <h1  className={styles.title}>Our Photo Memoir In </h1>
            
            <h1 className={styles.numberText}> 2023</h1>
        </div>
        <div className={styles.bMainWrapper}>
            <div className={styles.gallery}>
                {imageData.map((item, index) => (
                    <div key={index} className={styles.galleryItem}>
                    <img src={item.src} alt={`Gallery item ${index + 1}`} className={styles.galleryImage} />
                    <h3 className={styles.galleryTitle}>{item.title}</h3>
                    <p className={styles.galleryDescription}>{item.description}</p>
                    </div>
                ))}
            </div>

        
        </div>

    </div>  
);

export default Blog;
