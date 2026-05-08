var SUPABASE_URL = 'https://utqiyrpmohnribkkirht.supabase.co'
var SUPABASE_ANON_KEY = 'sb_publishable_ifAoOWAhwKm-eBHcdkwv5A_MSWlIyFh'
if (!window.supabase) throw new Error('Supabase CDN must be loaded before config.js')
var db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Wrap brand title letters for shake animation
document.querySelectorAll('.brand').forEach(el => {
  el.innerHTML = el.textContent.split('').map(c =>
    c === ' ' ? ' ' : `<span class="bl">${c}</span>`
  ).join('')

  let _jiggle = null
  const letters = () => el.querySelectorAll('.bl')
  const rnd = (mag) => ((Math.random() * 2 - 1) * mag).toFixed(2)

  el.addEventListener('mouseenter', () => {
    _jiggle = setInterval(() => {
      letters().forEach(s => {
        s.style.top  = `${rnd(0.7)}px`
        s.style.left = `${rnd(0.7)}px`
      })
    }, 80)
  })
  el.addEventListener('mouseleave', () => {
    clearInterval(_jiggle)
    letters().forEach(s => { s.style.top = ''; s.style.left = '' })
  })
})
