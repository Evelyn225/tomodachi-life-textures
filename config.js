var SUPABASE_URL = 'https://utqiyrpmohnribkkirht.supabase.co'
var SUPABASE_ANON_KEY = 'sb_publishable_ifAoOWAhwKm-eBHcdkwv5A_MSWlIyFh'
if (!window.supabase) throw new Error('Supabase CDN must be loaded before config.js')
var db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
