import { useEffect, useState } from 'react'

export function useAnimatedNumber(target: number, durationMs = 1000) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let raf = 0
    const t0 = performance.now()
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / durationMs)
      setValue(Math.round(target * p))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, durationMs])

  return value
}

export function useAnimatedDecimal(target: number, durationMs = 1000, decimals = 1) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let raf = 0
    const t0 = performance.now()
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / durationMs)
      setValue(Number((target * p).toFixed(decimals)))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, durationMs, decimals])

  return value
}
