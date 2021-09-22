import React from "react";

import Row from "react-bootstrap/Row";
import Gui from "dataland-gui";

import "./Story.css";

function Story() {
  return (
    <>
      <Row>
        <ul>
          <li>Our main character is a penguin (they/them) who has left the arctic islands and now travels the southern coasts of South America. When they return home from time to time, they usually meet with a cousin (he/him) who has stayed around their home island and always warmly welcomes them back.  </li>
    
          <li>However, in the year 2010, this heartful homecoming suddenly came to an end: this time when our main character return, their cousin has gone missing and no penguin on the island knows where he has gone. All those other penguins can tell is that the cousin has been gone for a while before a huge snowstorm.  </li>
    
          <li>With no way to track down a single penguin in the entire arctic world, the main character ran into a hint to where their cousin ended up: from other penguins at their home island, they heard that a group of humans have been tracking the penguin population over the past few years, and one human (she/her) has been following their cousin all around the place.  </li>
    
          <li>Reaching out to the humans, the main character got access to their tracking data and data analysis tool. Thus, our main character starts to search for their missing cousin through the records left behind. </li>
        </ul>

      </Row>
      <Row>
        <div className='editor'>
          <Gui
            initialProjectTitle="Untitled Project 1"
            backend={false}
            microworld="plots"
          />
        </div>
      </Row>

      <Row>
        <h2>Act 1</h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus neque eget ex laoreet malesuada. Curabitur nec tellus vitae enim blandit gravida eu a urna. Donec dictum dolor dui, sed imperdiet nulla volutpat at. Etiam scelerisque rhoncus nulla, ac pharetra metus. Curabitur viverra quis nisl eu pulvinar. Nunc id lorem at enim maximus elementum. Sed ut mauris non nisl porta rhoncus sit amet et metus. Proin nec ante vulputate, fermentum purus ut, sagittis dolor. 
      </Row>

      <Row>
        <div className='editor'>
          <Gui
            initialProjectTitle="Untitled Project 2"
            backend={false}
            microworld="plots"
          />
        </div>
      </Row>
    </>
  );
}


export default Story;