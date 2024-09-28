import { Callout } from './Callout'
import { Image } from './Image'
import { ExternalLink } from './Link'
import { MDXComponents } from 'mdx/types'

export const MdxComponents: MDXComponents = {
  a: ExternalLink as any,
  img: Image as any,
  blockquote: Callout,
  Callout,
  h1: (props) => <h1 {...props} className="text-green-600" />,
  h2: (props) => <h2 {...props} className="text-green-600" />,
  h3: (props) => <h3 {...props} className="text-green-600" />,
  h4: (props) => <h4 {...props} className="text-green-600" />,
  h5: (props) => <h5 {...props} className="text-green-600" />,
  h6: (props) => <h6 {...props} className="text-green-600" />,
  code: (props) => (
    <code
      {...props}
      className="font-mono text-green-600 bg-[rgba(135,131,120,0.15)] mx-[2px] py-[2px] px-[5px] rounded-[3px] border border-[#e0e0e0]"
    />
  ),
}
