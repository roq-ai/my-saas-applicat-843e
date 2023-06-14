import React from 'react';
import {
  Box,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';
import { useSession } from '@roq/nextjs';

export const HelpBox: React.FC = () => {
  const ownerRoles = ['Fleet Owner'];
  const roles = ['Fleet Owner', 'Rental Provider', 'Fleet Manager', 'Customer Support'];
  const applicationName = 'My SaaS application';
  const tenantName = 'Organization';
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
  const userStories = `Title: Fleet Owner creates an Organization
As a Fleet Owner,
I want to create an Organization,
So that I can manage my fleet of rental cars.

Title: Fleet Owner invites Rental Provider
As a Fleet Owner,
I want to invite Rental Providers to join my Organization,
So that they can add and manage their rental cars.

Title: Fleet Owner invites Fleet Manager
As a Fleet Owner,
I want to invite Fleet Managers to join my Organization,
So that they can manage the fleet of rental cars.

Title: Fleet Owner invites Customer Support
As a Fleet Owner,
I want to invite Customer Support to join my Organization,
So that they can assist customers with their rental needs.

Title: Rental Provider adds rental cars
As a Rental Provider,
I want to add rental cars to the Organization's fleet,
So that customers can rent them.

Title: Rental Provider updates rental car information
As a Rental Provider,
I want to update the information of my rental cars,
So that customers have accurate information when renting a car.

Title: Fleet Manager assigns rental cars to Rental Providers
As a Fleet Manager,
I want to assign rental cars to Rental Providers,
So that the rental cars are managed by the appropriate providers.

Title: Fleet Manager updates rental car availability
As a Fleet Manager,
I want to update the availability of rental cars,
So that customers can rent available cars.

Title: Customer Support assists customers with rental issues
As a Customer Support,
I want to assist customers with their rental issues,
So that they have a positive rental experience.`;

  const { session } = useSession();
  if (!process.env.NEXT_PUBLIC_SHOW_BRIEFING || process.env.NEXT_PUBLIC_SHOW_BRIEFING === 'false') {
    return null;
  }
  return (
    <Box width={1} position="fixed" left="30px" bottom="20px" zIndex={3}>
      <Popover placement="top-end">
        <PopoverTrigger>
          <IconButton
            aria-label="Help Info"
            icon={<FiInfo />}
            bg="blue.800"
            color="white"
            _hover={{ bg: 'blue.800' }}
            _active={{ bg: 'blue.800' }}
            _focus={{ bg: 'blue.800' }}
          />
        </PopoverTrigger>
        <PopoverContent w="50vw" h="70vh">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>App Briefing</PopoverHeader>
          <PopoverBody overflowY="auto">
            <Text mb="2">Hi there!</Text>
            <Text mb="2">
              Welcome to {applicationName}, your freshly generated B2B SaaS application. This in-app briefing will guide
              you through your application.
            </Text>
            <Text mb="2">You can use {applicationName} with one of these roles:</Text>
            <UnorderedList mb="2">
              {roles.map((role) => (
                <ListItem key={role}>{role}</ListItem>
              ))}
            </UnorderedList>
            {session?.roqUserId ? (
              <Text mb="2">You are currently logged in as a {session?.user?.roles?.join(', ')}.</Text>
            ) : (
              <Text mb="2">
                Right now, you are not logged in. The best way to start your journey is by signing up as{' '}
                {ownerRoles.join(', ')} and to create your first {tenantName}.
              </Text>
            )}
            <Text mb="2">
              {applicationName} was generated based on these user stories. Feel free to try them out yourself!
            </Text>
            <Box mb="2" whiteSpace="pre-wrap">
              {userStories}
            </Box>
            <Text mb="2">
              If you are happy with the results, then you can get the entire source code here:{' '}
              <Link href={githubUrl} color="cyan.500" isExternal>
                {githubUrl}
              </Link>
            </Text>
            <Text mb="2">
              Console Dashboard: For configuration and customization options, access our console dashboard. Your project
              has already been created and is waiting for your input. Check your emails for the invite.
            </Text>
            <Text mb="2">
              <Link href="https://console.roq.tech" color="cyan.500" isExternal>
                ROQ Console
              </Link>
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
