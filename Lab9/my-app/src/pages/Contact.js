// Contact.js
import React from 'react';
import styles from './css/Contact.module.css';
// import Button from 'react-bootstrap/Button';


const Contact = () =>(

    <div className={styles.contactContainer}>
        <h3 className={styles.bigTitle}> Contact Us</h3>
    
        <div className={styles.container}>
  <div className={styles.imageContainer}>
    <img src={require("../assets/contact-us.jpeg")} alt="here" />
  </div>
  <div className={styles.formContainer}>
    {/* Your form component goes here */}
    <h3 className={styles.galleryDescription}> Complete the form and we'll get back to you soon.</h3>
    <form>
    <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlSelect1">Example select</label>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
    <select multiple className="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
    </form>
    <button type="submit" className="=submitButton mt-3">Submit</button>


  </div>
</div>





        
    </div>
);

export default Contact;
