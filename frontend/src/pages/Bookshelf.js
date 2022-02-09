// Shows bookmarks on saved storys (endpoint needed)
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showStoryCollection } from '../reducers/story';
import styled from 'styled-components';
import StoryButton from '../styledComponents/StoryButton';
// import { story } from '../reducers/story';

const Bookshelf = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const userId = useSelector((store) => store.user.userId);
  const savedStoryList = useSelector((store) => store.story.savedStoryList);
  // const bookshelf = savedStoryList;
  const storyCollection = useSelector((store) => store.story.savedStoryList);

  // const onShowStory = () => {
  //   dispatch(showStory(accessToken, userId, bookshelf));
  // };

  useEffect(() => {
    dispatch(showStoryCollection(accessToken, userId));
  }, [dispatch, accessToken, userId]);

  const onShowStory = (description, character) => {
    console.log('STORY COLLECTION', storyCollection);
    dispatch(
      savedStoryList.actions.setSavedStoryList({ description, character })
    );
  };
  // const onShowStory = (description, character) => {
  //   dispatch(savedStoryList.actions.savedStoryList({ description, character }));
  // };

  console.log('USER ID korrekt', userId);
  console.log('STORYCOLLECTION', savedStoryList);

  return (
    <BookshelfSection>
      <h1>BOKHYLLA... coming soon</h1>
      <StoryButton onClick={onShowStory} text="Visa sagor" />
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
