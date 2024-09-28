import config from '@repo/ui/tailwind.config'

const blogConfig = {
  ...config,
  plugins: [require('@tailwindcss/typography')],
}

export default blogConfig
