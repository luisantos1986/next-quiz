import modalStyles from '../styles/Modal.module.css'

const Modal = ({displayed, onModalResponse}) => {

  // return isShown ? <h3>Modal content</h3> : null;
  return displayed ? (
        <div class={modalStyles.modal}>
            <div class={modalStyles.modalContent}>
                <span class={modalStyles.modalClose}  onClick={() => {onModalResponse(false)}}>&times;</span>
                <p>Pregunta Agregada</p>
            </div>
        </div>
        ) : null;
};

export default Modal;