/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw from 'tailwind.macro';

export const YouTube = ({ id }) => (
  <div css={[tw`my-8`, styles]}>
    <iframe
      title="youtube player"
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

const styles = {
  position: 'relative',
  paddingBottom: '56.25%',
  height: 0,
  overflow: 'hidden',
  maxWidth: '100%',
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
};
