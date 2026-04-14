import { nextTick, onMounted, onUpdated } from 'vue'

declare global {
  interface Window {
    MathJax?: {
      typesetPromise?: (elements?: Element[]) => Promise<void>
    }
  }
}

export function useMathJax() {
  const typeset = () => {
    void nextTick(() => {
      const attempt = () => {
        if (window.MathJax?.typesetPromise) {
          void window.MathJax.typesetPromise()
          return
        }
        window.setTimeout(attempt, 120)
      }

      attempt()
    })
  }

  onMounted(typeset)
  onUpdated(typeset)

  return { typeset }
}
