import {useGeneralContext} from '../context/Context'
import SimpleModal from './modal-content/SimpleModal'
import './Modal.scss'

const ModalContent = () => {
    const {modalType} = useGeneralContext()

    const modalContent = () => {
        switch (modalType) {
            case 'simple':
                return <SimpleModal/>

            default:
                return <SimpleModal/>
        }
    }
    return <div>{modalContent()}</div>
}

export default ModalContent
