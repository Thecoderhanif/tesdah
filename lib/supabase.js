import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY
);

export const loginWith3rdParty = async (provider) => {
  const { user, session, error } = await supabase.auth.signIn(
    {
      provider: provider
    },
    {
      redirectTo:
        process.env.NODE_ENV === 'production'
          ? 'https://opakholis.dev/advices/'
          : 'http://localhost:3000/advices/'
    }
  );

  if (error) console.log(error);
};
