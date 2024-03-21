import Dropdown from 'react-bootstrap/Dropdown';
import styles from './css/ImageSearchDropdown.module.css';
import { useTranslation } from 'react-i18next';

const ImageSearchDropDown = ({ onSelectCategory }) => {
  const { t } = useTranslation();

  return (
    <Dropdown>
      <Dropdown.Toggle className={styles.searchBtn} variant="success" id="dropdown-basic">
        {t('components.imageSearchDropdown.findNextIdea')}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => onSelectCategory("Brand New")}>
          <div className={styles.searchContainer}>
            {t('components.imageSearchDropdown.brandNew')}
            <div className={styles.search1}></div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item  onClick={() => onSelectCategory("Highlights")}>
          <div className={styles.searchContainer}>
            {t('components.imageSearchDropdown.highlights')}
            <div className={styles.search2}></div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item  onClick={() => onSelectCategory("Past Winners")}>
          <div className={styles.searchContainer}>
            {t('components.imageSearchDropdown.pastWinners')}
            <div className={styles.search3}></div>
          </div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ImageSearchDropDown;
