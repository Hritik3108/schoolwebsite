import './index.scss'

const AcademyPopup = ({ isOpen, onClose }) => {
    return (
        isOpen && (
          <div className="popup">
            <div className="popup-content">
              <p>This is a popup!</p>
              <button onClick={onClose}>Close</button>
            </div>
          </div>
        )
      );
}

export default AcademyPopup;