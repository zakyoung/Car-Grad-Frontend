import React from 'react';
import { Box, Text, Heading, Stack, Tag, Divider } from '@chakra-ui/react';

const ExperimentEntryCard = ({ entry }) => {
  return (
    <Box
      width="70%"
      margin="20px auto"
      padding="6"
      borderWidth="1px"
      borderRadius="2xl"
      boxShadow="md"
      bg="white"
    >
      <Stack spacing={3}>
        <Heading size="md">{entry.user_name}</Heading>
        <Text fontSize="sm" color="gray.500">
          {new Date(entry.experiment_time).toLocaleString()}
        </Text>
        <Divider />

        <Text>
          <strong>Final Distance:</strong> {entry.final_distance.toFixed(2)} meters
        </Text>

        <Text>
          <strong>Initial Speed:</strong> {entry.initial_speed} mph
        </Text>

        <Text>
          <strong>Braking Time (Front Car):</strong> {entry.deceleration_of_front_car_stop_time} sec
        </Text>

        <Text>
          <strong>Initial Distance:</strong> {entry.initial_distance} meters
        </Text>

        <Box>
          <Tag colorScheme={entry.experiment_type ? 'teal' : 'red'}>
            {entry.experiment_type ? 'Modified Lights' : 'Default Lights'}
          </Tag>
        </Box>
      </Stack>
    </Box>
  );
};

export default ExperimentEntryCard;
