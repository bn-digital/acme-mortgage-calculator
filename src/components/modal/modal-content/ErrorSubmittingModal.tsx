import {FC} from 'react'

import {useGeneralContext} from '../../context/Context'
import {Button, Typography} from "antd";

const {Title, Paragraph} = Typography

const ErrorSubmittingModal: FC = () => {
    const {setIsModalOpen} = useGeneralContext()
    const onClick = () => {
      setIsModalOpen(false)
    }
    return (
        <>
            <Title level={3}>{'Submitting error'}</Title>
            <Paragraph>{'Please, check all form steps. All form steps should be filled.'}</Paragraph>

            <div className='btn-block'>
                <Button onClick={onClick} type={'primary'} style={{width: 100}}>{'Ok'}</Button>
            </div>
        </>
    )
}
export default ErrorSubmittingModal
