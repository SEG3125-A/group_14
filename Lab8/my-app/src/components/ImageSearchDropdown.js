import Dropdown from 'react-bootstrap/Dropdown';
import styles from './css/ImageSearchDropdown.module.css';
const ImageSearchDropDown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle className={styles.searchBtn}variant="success" id="dropdown-basic">
        Find Your Next Idea
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">
            <div className={styles.searchContainer}>
                Monochrome Palette
                <div className={styles.search1}></div>
            </div>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">
            <div className={styles.searchContainer}>
                Duotone Palette
                <div className={styles.search2}></div>
            </div>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3">
            <div className={styles.searchContainer}>
                Pastel Palette
                <div className={styles.search3}></div>
            </div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ImageSearchDropDown;