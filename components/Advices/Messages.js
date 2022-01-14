/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { Box, Flex, IconButton, Text } from '@chakra-ui/react';

import { Trash } from '@/styles/icons';
import { supabase } from '@/lib/supabase';
import { deleteAdvice, fetchAdvices } from '@/lib/advices';

export default function AdviceMessage() {
  const [data, setData] = useState([]);
  const [newData, handleNewData] = useState(null);
  const [deletedData, handleDeletedData] = useState(null);

  const user = supabase.auth.user();

  const getData = async () => {
    const data = await fetchAdvices();
    setData(data);
  };

  const getChange = async () => {
    const mySubscription = supabase
      .from('advices')
      .on('INSERT', (payload) => {
        handleNewData(payload.new);
      })
      .on('DELETE', (payload) => {
        handleDeletedData(payload.old);
      })
      .subscribe();

    return mySubscription;
  };

  useEffect(() => {
    getData();
    const mySubscription = getChange();

    return () => {
      supabase.removeSubscription(mySubscription);
    };
  }, []);

  useEffect(() => {
    if (newData) {
      setData([...data, newData]);
      handleNewData(null);
    }
  }, [newData]);

  useEffect(() => {
    if (deletedData) {
      setData(data.filter((data) => data.id !== deletedData.id));
    }
  }, [deletedData]);

  return data.map(({ id, message, inserted_at, user_id }) => (
    <Box key={id} py={2}>
      <Flex justify="space-between" alignItems="center">
        <Text my={1}>{message}</Text>
        {user?.id == user_id && (
          <IconButton
            size="sm"
            aria-label="Delete advice"
            onClick={() => deleteAdvice(id)}
            icon={<Trash boxSize={4} />}
          />
        )}
      </Flex>
      <Text fontSize="small" color="gray.400">
        {format(parseISO(inserted_at), 'PP • p')}
      </Text>
    </Box>
  ));
}
