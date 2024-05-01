import { fromEvent, useSubscription } from '@vueuse/rxjs'
import { type Directive } from 'vue'
const vNumberFormat: Directive<
  HTMLInputElement & {
    originalValue?: number
  },
  (v?: number) => string
> = {
  async mounted(el, { value: formatter }) {
    await Promise.resolve()

    el.originalValue = coearceVal(el.value)
    el.value = formatter(el.originalValue)

    useSubscription(
      fromEvent(el, 'focus').subscribe(() => {
        el.value = el.originalValue?.toString() ?? ''
      }),
    )

    useSubscription(
      fromEvent(el, 'blur').subscribe(() => {
        el.originalValue = coearceVal(el.value)

        const { isValid, closestVal } = validateNumber(
          el.originalValue,
          el.min,
          el.max,
        )

        if (isValid) return (el.value = formatter(el.originalValue))

        el.originalValue = closestVal
        el.value = formatter(el.originalValue)
        el.dispatchEvent(new Event('input'))
      }),
    )
  },

  updated(el, { value: formatter }) {
    if (document.activeElement !== el) {
      el.originalValue = coearceVal(el.value)
      el.value = formatter(el.originalValue)
    }
  },
}
const coearceVal = (val: string) => (!val ? undefined : +val)

const validateNumber = (original?: number, min?: string, max?: string) => {
  if (!original) {
    return {
      isValid: false,
      closestVal: undefined,
    }
  }

  let num = original

  if (min) {
    num = Math.max(+min, num)
  }

  if (max) {
    num = Math.min(+max, num)
  }

  return {
    isValid: num === original,
    closestVal: num,
  }
}
export default vNumberFormat
