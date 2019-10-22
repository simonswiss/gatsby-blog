/** @jsx jsx */
import { jsx } from '@emotion/core'
import tw from 'tailwind.macro'

export const Vimeo = ({ id }) => (
  <div css={[tw`my-8`, styles]}>
    <iframe
      title="vimeo player"
      src={`https://player.vimeo.com/video/${id}`}
      width="640"
      height="360"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)

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
}
