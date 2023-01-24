import {FC, SVGProps} from 'react'
import {ReactComponent as CloseModal} from './images/close-modal.svg'

export type IconTypes =
  | 'close-modal'

const icons: { [key: string]: FC<SVGProps<SVGSVGElement>> } = {
  'close-modal': CloseModal,
} as const

type SvgIconProps = SVGProps<SVGSVGElement> & { type: IconTypes }

const SvgIcon: FC<SvgIconProps> = ({ type, ...svgProps }) => {
  const Icon = icons[type] ?? null
  return Icon && <Icon {...svgProps} />
}

export { SvgIcon }
