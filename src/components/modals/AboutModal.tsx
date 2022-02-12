import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <div className="flex w-80 mx-auto items-center mb-8 mt-20">
        <img alt='profile' style={{ width: 100 }} src={String(require('../../profile-pic.jpeg'))} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is alove letter from a Churro to a Peligrosa, forked from an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
