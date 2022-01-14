import { supabase } from '@/lib/supabase';

export const fetchAdvices = async () => {
  let { data, error } = await supabase.from('advices').select('*').order('id', { ascending: true });

  if (error) console.log(`error`, error);
  return data;
};

export const addAdvice = async (message, user) => {
  const { data, error } = await supabase
    .from('advices')
    .insert({ message, user_id: user.id })
    .single();

  if (error) console.log(error);
  console.log(`added`, data);
};

export const deleteAdvice = async (id) => {
  try {
    const user = supabase.auth.user();
    let { body } = await supabase
      .from('advices')
      .delete()
      .match({ id })
      .filter('user_id', 'eq', user.id);

    console.log(`deleted`, body);
  } catch (error) {
    console.log(`error`, error);
  }
};
