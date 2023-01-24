import {FC} from 'react'

import {useGeneralContext} from '../../context/Context'
import {Button, Typography} from "antd";

const {Title, Paragraph} = Typography

const SimpleModal: FC = () => {
    const {setIsModalOpen} = useGeneralContext()
    return (
        <>
            <Title level={3}>{'Title'}</Title>

            <div className='btn-block'>
                <Button>{'Simple modal'}</Button>
            </div>
        </>
    )
}
export default SimpleModal
