// Shows bookmarks on saved storys (endpoint needed)
import React from 'react';
import styled from 'styled-components';
import StoryButton from '../styledComponents/StoryButton';
// import { story } from '../reducers/story';

const Bookshelf = () => {
  return (
    <BookshelfSection>
      <h1>BOKHYLLA... coming soon</h1>
      <StoryButton onClick={{}} text="Visa sagor" />
    </BookshelfSection>
  );
};

export default Bookshelf;

const BookshelfSection = styled.section`
  padding: 15% 5%;
  width: 80%;
  margin: 0 auto;
  background-color: var(--yellow);

  border-radius: 10px;
  box-shadow: 0 2px 4px 2px rgb(66 66 66 / 16%);
`;
