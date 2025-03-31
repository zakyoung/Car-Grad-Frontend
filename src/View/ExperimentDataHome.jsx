import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  VStack,
  Flex,
  Spinner,
  Text,
  Heading
} from '@chakra-ui/react';
import ExperimentEntryCard from './ExperimentEntryCard';
import ExperimentHelper from '../ViewModel/ExperimentHelper';

export default function ExperimentDataHome() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadEntries = async () => {
    setLoading(true);
    const helper = new ExperimentHelper();
    const data = await helper.fetchEntries();
    setEntries(data);
    setLoading(false);
  };

  useEffect(() => {
    loadEntries();
  }, []);

  return (
    <Box p={6}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Text fontSize="2xl" fontWeight="bold">Experiment Entries</Text>
        <Button colorScheme="teal" onClick={loadEntries}>Refresh</Button>
      </Flex>

      {loading ? (
        <Flex justify="center" mt={8}>
          <Spinner size="xl" />
        </Flex>
      ) : (
        <VStack spacing={6}>
          {entries.length > 0 ? (
            entries.map((entry, index) => (
              <ExperimentEntryCard key={index} entry={entry} />
            ))
          ) : (
            <Text>No entries found.</Text>
          )}
        </VStack>
      )}
    </Box>
  );
}
