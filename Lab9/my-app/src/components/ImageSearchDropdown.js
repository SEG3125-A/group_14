import Dropdown from 'react-bootstrap/Dropdown';
import styles from './css/ImageSearchDropdown.module.css';
import { useTranslation } from 'react-i18next';

const ImageSearchDropDown = () => {
  const { t } = useTranslation();

  return (
    <Dropdown>
      <Dropdown.Toggle className={styles.searchBtn} variant="success" id="dropdown-basic">
        {t('components.imageSearchDropdown.findNextIdea')}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">
          <div className={styles.searchContainer}>
            {t('components.imageSearchDropdown.monochromePalette')}
            <div className={styles.search1}></div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">
          <div className={styles.searchContainer}>
            {t('components.imageSearchDropdown.duotonePalette')}
            <div className={styles.search2}></div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3">
          <div className={styles.searchContainer}>
            {t('components.imageSearchDropdown.pastelPalette')}
            <div className={styles.search3}></div>
          </div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ImageSearchDropDown;
