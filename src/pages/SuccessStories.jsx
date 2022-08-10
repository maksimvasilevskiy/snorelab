//import React from 'react';
const { createElement, render } = wp.element;
import { SuccessStoriesMain } from '../components/SuccessStoriesMain';
import { SuccessStoriesBottom } from '../components/SuccessStoriesBottom';

export const SuccessStories = () => {
  return (
    <main className="success-stories">
      <SuccessStoriesMain />
      <SuccessStoriesBottom />
    </main>
  );
};
