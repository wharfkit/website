const icon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`
const iconSuccess = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>`

export default function copyButton(
  selector = "pre",
  childSelector = "code",
  btnText = icon,
  btnTextSuccess = iconSuccess,
  activeClass = "copy-button"
) {
  document.querySelectorAll(`${selector}:not(.${activeClass})`).forEach((node) => {
    let copyBtn = document.createElement("button")
    copyBtn.innerHTML = btnText
    // activeClass acts as flag so we don't add another copy button by mistake
    copyBtn.classList.add(activeClass)
    node.appendChild(copyBtn)
    copyBtn.addEventListener("click", async () => {
      if (navigator.clipboard) {
        let text = node.querySelector(childSelector)?.innerText
        await navigator.clipboard.writeText(text)
      }
      copyBtn.innerHTML = btnTextSuccess
      setTimeout(() => (copyBtn.innerHTML = btnText), 2000)
    })
  })
}
