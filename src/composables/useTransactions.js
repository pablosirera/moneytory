// import useAuthUser from './useAuthUser'
import useSupabase from './useSupabase'

export default function useTransactions() {
  const { supabase } = useSupabase()
  // const { user } = useAuthUser()

  const listTransactions = async () => {
    const { data, error } = await supabase
      .from('transactions')
      .select('*')
      .order('id', { ascending: false })
    // .eq('user', user.value.id)
    if (error) throw error

    // TODO: transform data

    return data
  }

  const createTransaction = async transaction => {
    const { data, error } = await supabase
      .from('transactions')
      .insert([{ ...transaction }])
    if (error) throw error

    return data
  }

  return {
    listTransactions,
    createTransaction,
  }
}
