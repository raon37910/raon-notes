import { useEffect } from 'react'

// TODO Copy Button 기능 수정
export default function useWatchTimeout(
  watch: unknown,
  ms: number,
  callback: () => void,
) {
  useEffect(() => {
    let timeOut: any

    if (watch) {
      timeOut = setTimeout(callback, ms)
    }

    return () => {
      timeOut && clearInterval(timeOut)
    }
  }, [callback, ms, watch])
}
