import type { Meta, StoryObj } from '@storybook/react';

import { Alert, AlertDescription, AlertTitle } from './Alert';
import { ExclamationTriangleIcon, InfoCircledIcon, RocketIcon } from '@radix-ui/react-icons';

const meta: Meta<typeof Alert> = {
  component: Alert,
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: () => {
    return (
      <Alert>
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
    );
  },
};

export const Info: Story = {
  render: () => {
    return (
      <Alert variant="info">
        <InfoCircledIcon className="h-4 w-4" />
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
      </Alert>
    );
  },
};

export const Error: Story = {
  render: () => {
    return (
      <Alert variant="error">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
      </Alert>
    );
  },
};
