import Countdown from 'react-countdown'
import { Cell} from '../grid/Cell'
import { GameStats } from '../../lib/localStorage'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
  guesses: string[]
  gameStats: GameStats
  isGameLost: boolean
  isGameWon: boolean
  handleShare: () => void
  isHardMode: boolean
  isRevealing?: boolean
}

export const ProposalModal = ({
  isOpen,
  handleClose,
  guesses,
  gameStats,
  isGameLost,
  isGameWon,
  handleShare,
  isHardMode,
  isRevealing
}: Props) => {
  return (
    <BaseModal
      title={'Sneak Attack'}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <div className="flex justify-center mb-1">
        {'MARRY'.split('').map((letter, i) => (
          <Cell
            key={i}
            value={letter}
            status={'correct'}
            position={i}
            isRevealing={isRevealing}
            isCompleted
          />
        ))}
      </div>
      <div className="flex justify-center mb-1">
        {'ME'.split('').map((letter, i) => (
          <Cell
            key={i}
            value={letter}
            status={'present'}
            position={i}
            isRevealing={isRevealing}
            isCompleted
          />
        ))}
      </div>
      {(isGameLost || isGameWon) && (
        <div className="mt-5 sm:mt-6 columns-2 dark:text-white">
          <div>
            <h5>{'Marriage proposal in'}</h5>
            <Countdown 
              className="text-lg font-medium text-gray-900 dark:text-gray-100"
              date={new Date(Date.now() + 10000)}
              daysInHours={true}
            />
          </div>
          <button
            type="button"
            className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
          >
            {'Accept'}
          </button>
        </div>
      )}
    </BaseModal>
  )
}
