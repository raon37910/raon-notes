import { useState } from 'react'
import { m } from 'framer-motion'
import { Post } from '~/config/types'
import SearchCommand from './SearchCommand'

interface SearchProps {
  postList: Post[]
}

function Search({ postList }: SearchProps) {
  const [open, setOpen] = useState(false)
  const handleSearchButtonClick = () => {
    setOpen((prev: boolean) => !prev)
  }

  return (
    <div className="w-full">
      <m.button
        onClick={handleSearchButtonClick}
        className="text-left w-full pl-4 pr-6 py-2 rounded-md text-black/50 hover:text-black/80 hover:border-black/80 border-[0.5px] border-black/20 text-sm transition-all mr-4 dark:text-white/50 dark:bg-black dark:hover:text-white/80 dark:hover:border-white/80 dark:border-white/20"
      >
        Search
      </m.button>
      <SearchCommand open={open} setOpen={setOpen} postList={postList} />
    </div>
  )
}

export default Search
