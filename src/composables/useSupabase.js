import { createClient } from '@supabase/supabase-js'
// import { UserModel } from '@/models/UserModel'
// import useAuthUser from './useAuthUser'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

// supabase.auth.onAuthStateChange((event, session) => {
//   const { user } = useAuthUser()

//   user.value = new UserModel(session?.user) || null
// })

export default function useSupabase() {
  return { supabase }
}
