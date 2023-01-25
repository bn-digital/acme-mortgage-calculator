import {useGeneralContext} from '../context/Context'
import SimpleModal from './modal-content/SimpleModal'
import ErrorSubmittingModal from "./modal-content/ErrorSubmittingModal";
import './Modal.scss'

const ModalContent = () => {
    const {modalType} = useGeneralContext()

    const modalContent = () => {
        switch (modalType) {
            case 'simple':
                return <SimpleModal/>
            case 'errorSubmitting':
                return <ErrorSubmittingModal/>
            default:
                return <SimpleModal/>
        }
    }
    return <div>{modalContent()}</div>
}

export default ModalContent
