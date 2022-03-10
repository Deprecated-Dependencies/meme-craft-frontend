import React from "react";

import Meme from "./Meme";
import Masonry from 'react-masonry-css';

class ImageGallery extends React.Component {

  componentDidMount() {
    this.props.getMemes();
  }

  render() {
    let memes = this.props.memes.map((meme) => (
      meme.hasOwnProperty('template') ? 
      <Meme 
        key={meme._id} 
        url={meme.url} 
        name={meme.template.name} 
        template={meme.template} 
        userMeme={meme}
      /> :
      <Meme 
        key={meme.id} 
        url={meme.url}
        name={meme.name}
        template={meme}
      />
    ));

    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1
    };

    return (
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {memes}
      </Masonry>
    );
  }
}

export default ImageGallery;
