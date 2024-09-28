import Link from 'next/link'

import { HeadingItem } from '~/config/types'
import { cn } from '@repo/ui/lib/utils'

interface Props {
  toc: HeadingItem[]
}

const TableOfContentTop = ({ toc }: Props) => {
  if (toc.length === 0) return null

  return (
    <nav className="xl:hidden">
      <h2 id="table-of-contents-top">On this page</h2>
      <ul>
        {toc.map((item) => (
          <li
            key={item.link}
            className={cn(item.indent === 1 && 'ml-4', 'my-0 py-1 ')}
          >
            <Link
              href={item.link}
              className="underline-offset-4 hover:text-green-600"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
    </nav>
  )
}

export default TableOfContentTop
