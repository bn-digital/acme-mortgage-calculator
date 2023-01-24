import { createContext, Dispatch, SetStateAction, useContext } from 'react'

type ModalTypes =
  | 'simple'

type SimpleModalSettings = {
  buttonLink?: string
  buttonText?: string
  content: string
  title: string
}
type ContextProps = {
  isModalOpen: boolean
  setIsModalOpen: Dispatch<SetStateAction<boolean>>,
  modalType: ModalTypes
  setModalType: Dispatch<SetStateAction<ModalTypes>>,
  documentInfo: Record<string, string>
  setDocumentInfo: Dispatch<SetStateAction<Record<string, string>>>
}
export const defaultValues: ContextProps = {
  modalType: 'simple',
  setModalType: () => null,
  isModalOpen: false,
  setIsModalOpen: () => null,
  documentInfo: {},
  setDocumentInfo: () => null,
}
const Context = createContext(defaultValues)
const useGeneralContext = () => useContext(Context)

export { Context, useGeneralContext }
