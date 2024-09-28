import { useState } from 'react'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@repo/ui/components/ui/command'
import { Post } from '~/config/types'
import Link from 'next/link'

interface SearchCommandProps {
  open: boolean
  setOpen: (open: boolean) => void
  postList: Post[]
}

function SearchCommand({ open, setOpen, postList }: SearchCommandProps) {
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type title for search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Posts">
          {postList.map((post, index: number) => (
            <Link href={`${post.url}`} key={index}>
              <CommandItem>{post.title}</CommandItem>
            </Link>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}

export default SearchCommand
