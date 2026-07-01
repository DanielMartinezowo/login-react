import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../components/Header';
import type { IUser } from '../users/IUser';
const meta = {
  title: 'component/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockUser: IUser = {
  name: 'Daniel Martínez',
  email: 'danielmtzcastro202@gmail.com',
  password: '123456',
};
export const UserLog: Story = {
  args: {
    user: mockUser,
    onLogout: () => {
      alert('Sesion cerrada correctamente');
    },
  },
};
