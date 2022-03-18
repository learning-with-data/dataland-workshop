import React, { useState } from "react";

import Popover from "react-bootstrap/Popover";
import Overlay from "react-bootstrap/Overlay";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "./App.css";

function Popup(props) {
    const Popover_window = props => (
        <Popover id="popover-basic">
          <Popover.Header className = "title" as="h3">{props.title}</Popover.Header>
          <Popover.Body className = "content">{props.content}</Popover.Body>
        </Popover>
      );
    
      
    const Popup_element = () => (
        <OverlayTrigger trigger="hover" placement="right" overlay={Popover_window(props)}>
          <span className="popup-icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="font-popup-on" color = "#4287f5"/>
          </span>
        </OverlayTrigger>
      );

    return (
          <Popup_element />
      );
  }

export default Popup;