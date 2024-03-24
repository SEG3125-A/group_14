import React, { useRef, useEffect, useState } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import styles from './css/Events.module.css';
import { useTranslation } from 'react-i18next';
import weddingImage from '../assets/wedding.jpg';
import galaImage from '../assets/gala.jpg';
import portraitImage from '../assets/portrait.jpg';
import wildlifeImage from '../assets/wildlife.jpg';
import sportImage from '../assets/sport.jpg';
import natureImage from '../assets/nature.jpg';
import engagementImage from '../assets/engagement.jpg';
import shootsImage from '../assets/shoots.jpg';
import { Link } from 'react-router-dom';

function Events() {
  const flickityRef = useRef(null);
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    flickityRef.current = new Flickity('.gallery', {
      wrapAround: true,
      
    });

    return () => flickityRef.current.destroy();
  }, []);

  

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <Link to="/home">
          <button className={styles.backLink}>{t('pages.events.backHome')}</button>
        </Link>
      </div>
      <h1 className={styles.title}>{t('pages.events.title')}</h1>
      <div className="gallery">
        <div className={`gallery-cell ${styles.service}`}>
          <h3 className={styles.serviceLink}>{t('pages.events.services.wedding.link')}</h3>
          <div className={styles.imageWrapper}>
            <img src={weddingImage} alt="Wedding" className={styles.serviceImage} />
            <div className={styles.overlay}>
              <div>
              <p className={styles.overlayText}>Learn More</p>
              <p className={styles.overlayText2}>We specialize in providing tailored wedding photography services that capture the essence and emotion of your special day. 
              Our goal is to create timeless images that tell the story of your love and commitment.</p>
                <div>  
                  <button className={styles.LearnMore} onClick={() => setIsOpen(true)}>
                    Style Options
                  </button>
                  {isOpen && (
                  <div>
                    <div>
                    Traditional, Rustic, Sophisticated, Vintage, Glamorous
                    </div>
                    <Link to="/collections">
                    <button className={styles.LearnMore} onClick={() => setIsOpen(false)}>
                      Browse Other Style
                    </button>
                    </Link>
                  </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <p className={styles.serviceDescription}>{t('pages.events.services.wedding.description')}</p>
        </div>
        <div className={`gallery-cell ${styles.service}`}>
          <h3 className={styles.serviceLink}>{t('pages.events.services.gala.link')}</h3>
          <div className={styles.imageWrapper}>
            <img src={galaImage} alt="Gala" className={styles.serviceImage} />
            <div className={styles.overlay}>
              <div>
              <p className={styles.overlayText}>Learn More</p>
              <p className={styles.overlayText2}>We offer comprehensive red carpet coverage, capturing the arrivals of VIP guests, celebrities, and attendees. 
              Our photographers are skilled at capturing the glitz and glamour of the red carpet, creating memorable images that reflect the prestige of your event.</p>
              <div>  
                  <button className={styles.LearnMore} onClick={() => setIsOpen(true)}>
                    Style Options
                  </button>
                  {isOpen && (
                  <div>
                    <div>
                    Moody, Elegant, Contemporary, Classic, Artistic
                    </div>
                    <Link to="/collections">
                    <button className={styles.LearnMore} onClick={() => setIsOpen(false)}>
                      Browse Other Style
                    </button>
                    </Link>
                  </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <p className={styles.serviceDescription}>{t('pages.events.services.gala.description')}</p>
        </div>
        <div className={`gallery-cell ${styles.service}`}>
          <h3 className={styles.serviceLink}>{t('pages.events.services.portrait.link')}</h3>
          <div className={styles.imageWrapper}>
            <img src={portraitImage} alt="Portrait" className={styles.serviceImage} />
            <div className={styles.overlay}>
              <div>
              <p className={styles.overlayText}>Learn More</p>
              <p className={styles.overlayText2}>From the moment you book your portrait session with us, we provide a personalized and attentive experience. 
              We take the time to understand your preferences and goals, ensuring that every aspect of the session reflects your vision.</p>
              <div>  
                  <button className={styles.LearnMore} onClick={() => setIsOpen(true)}>
                    Style Options
                  </button>
                  {isOpen && (
                  <div>
                    <div>
                    Classic, Candid, Fine Art, Environmental, Lifestyle
                    </div>
                    <Link to="/collections">
                    <button className={styles.LearnMore} onClick={() => setIsOpen(false)}>
                      Browse Other Style
                    </button>
                    </Link>
                  </div>
                  )}
                </div>
              </div>
            
            </div>
          </div>
          <p className={styles.serviceDescription}>{t('pages.events.services.portrait.description')}</p>
        </div>
        <div className={`gallery-cell ${styles.service}`}>
          <h3 className={styles.serviceLink}>{t('shoots')}</h3>
          <div className={styles.imageWrapper}>
            <img src={shootsImage} alt="Shoots" className={styles.serviceImage} />
            <div className={styles.overlay}>
              <div>
              <p className={styles.overlayText}>Learn More</p>
            <p className={styles.overlayText2}>We pride ourselves on delivering high-quality images that exceed your expectations. Using top-of-the-line equipment and editing techniques, 
            we ensure that every photo is crisp, clear, and professionally polished.</p>
            <div>  
                  <button className={styles.LearnMore} onClick={() => setIsOpen(true)}>
                    Style Options
                  </button>
                  {isOpen && (
                  <div>
                    <div>
                      Fashion, Product, Event, Product, Solo
                    </div>
                    <Link to="/collections">
                    <button className={styles.LearnMore} onClick={() => setIsOpen(false)}>
                      Browse Other Style
                    </button>
                    </Link>
                  </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <p className={styles.serviceDescription}>{t('Creative Captures, Candid Moments.')}</p>
        </div>
        <div className={`gallery-cell ${styles.service}`}>
          <h3 className={styles.serviceLink}>{t('wildlife')}</h3>
          <div className={styles.imageWrapper}>
            <img src={wildlifeImage} alt="Wildlife" className={styles.serviceImage} />
            <div className={styles.overlay}>
              <div>
              <p className={styles.overlayText}>Learn More</p>
                <p className={styles.overlayText2}>With our team of experienced wildlife guides, we lead you to the best locations for capturing stunning images of wildlife. Our guides have in-depth knowledge of local ecosystems and animal behavior, 
                ensuring that you have the best possible opportunities for photography.</p>
                <div>  
                  <button className={styles.LearnMore} onClick={() => setIsOpen(true)}>
                    Style Options
                  </button>
                  {isOpen && (
                  <div>
                    <div>
                      Documentary, Macro, Behavioural, Conservation, Artistic
                    </div>
                    <Link to="/collections">
                    <button className={styles.LearnMore} onClick={() => setIsOpen(false)}>
                      Browse Other Style
                    </button>
                    </Link>
                  </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <p className={styles.serviceDescription}>{t('Authentic Encounters, Serene Serenades.')}</p>
        </div>
        <div className={`gallery-cell ${styles.service}`}>
          <h3 className={styles.serviceLink}>{t('sports')}</h3>
          <div className={styles.imageWrapper}>
            <img src={sportImage} alt="Sport" className={styles.serviceImage} />
            <div className={styles.overlay}>
              <div>
              <p className={styles.overlayText}>Learn More</p>
                <p className={styles.overlayText2}>We understand the importance of timely delivery when it comes to sports photography. That's why we prioritize quick turnaround times, 
                ensuring that you receive your photos promptly so you can share them with fans, sponsors, and supporters..</p>
                <div>  
                  <button className={styles.LearnMore} onClick={() => setIsOpen(true)}>
                    Style Options
                  </button>
                  {isOpen && (
                  <div>
                    <div>
                      Action, Technical, Behind the Scenes, Narrative, Motion Blur
                    </div>
                    <Link to="/collections">
                    <button className={styles.LearnMore} onClick={() => setIsOpen(false)}>
                      Browse Other Style
                    </button>
                    </Link>
                  </div>
                  )}
                </div>
              </div>
            
            </div>
          </div>
          <p className={styles.serviceDescription}>{t('Passionate Performance, Competitive Spirit')}</p>
        </div>
        <div className={`gallery-cell ${styles.service}`}>
          <h3 className={styles.serviceLink}>{t('engagement')}</h3>
          <div className={styles.imageWrapper}>
            <img src={engagementImage} alt="Engagement" className={styles.serviceImage} />
            <div className={styles.overlay}>
            <div>
                <p className={styles.overlayText}>Learn More</p>
                <p className={styles.overlayText2}>Let us guide you to the perfect locations for your engagement shoot. Whether it's a picturesque park, a charming urban setting, or a breathtaking natural landscape,
               we'll help you find the ideal backdrop to complement your love story.</p>
               <div>  
                  <button className={styles.LearnMore} onClick={() => setIsOpen(true)}>
                    Style Options
                  </button>
                  {isOpen && (
                  <div>
                    <div>
                      Natural, Classic, City, Personal, Timeless
                    </div>
                    <Link to="/collections">
                    <button className={styles.LearnMore} onClick={() => setIsOpen(false)}>
                      Browse Other Style
                    </button>
                    </Link>
                  </div>
                  )}
                </div>
              </div>
            </div>

            
          </div>
          <p className={styles.serviceDescription}>{t('Enchanted Union, Heartfelt Embrace.')}</p>
        </div>
        <div className={`gallery-cell ${styles.service}`}>
          <h3 className={styles.serviceLink}>{t('nature')}</h3>
          <div className={styles.imageWrapper}>
            <img src={natureImage} alt="Nature" className={styles.serviceImage} />
            <div className={styles.overlay}>
              <div>
                <p className={styles.overlayText}>Learn More</p>
                <p className={styles.overlayText2}>With our team of experienced photographers, we capture the unique moments and emotions of weddings with expertise and care. 
                Trust us to bring your special day to life through our talented lens.</p>
                <Link to="/collections">
                <button className={styles.LearnMore}>{t('Browse Style')}</button>
              </Link>
              </div>
            </div>
          </div>
          <p className={styles.serviceDescription}>{t('Majestic Horizons, Verdant Forests.')}</p>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerText}>
        <p>{t('pages.events.contactInfo.phone')}</p>
        <p>{t('pages.events.contactInfo.fax')}</p>
        <p>{t('pages.events.contactInfo.email')}</p>
        </div>
        <div className={styles.footerButton}>
          <Link to="/contact">
            <button className={styles.contactLink}>{t('Contact Us!')}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Events;
