import { Modal as Wrapped, ModalProps } from 'antd'
import { FC } from 'react'

import { useGeneralContext } from '../context/Context'
import { SvgIcon } from '../icon'

const Modal: FC<ModalProps> = ({ ...baseProps }) => {
  const { setIsModalOpen } = useGeneralContext()
  const onCancel = () => {
    setIsModalOpen(false)
  }
  return (
    <Wrapped
      footer={false}
      className={'main-modal'}
      // closeIcon={<SvgIcon type={'close-modal'} />}
      onCancel={onCancel}
      {...baseProps}
    />
  )
}

export { Modal }
