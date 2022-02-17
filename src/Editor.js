import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Spinner from "react-bootstrap/Spinner";

import { Gui } from "dataland-gui";

import apiClient from "./api";

const blocklyInjectionOptions = {
  zoom: {
    controls: true,
    wheel: false,
    startScale: 0.85,
    maxScale: 4,
    minScale: 0.25,
    scaleSpeed: 1.1,
  },
};

function Editor(props) {
  const projectsService = apiClient.service("projects");
  const [initialProject, setInitialProject] = useState(null);
  const [lastSaved, setLastSaved] = useState(Date.now());

  useEffect(() => {
    const getProject = async () => {
      const result = await projectsService.get(props.projectId);
      setInitialProject(result);
      setLastSaved(Date.now());
    };
    getProject();
  }, []);

  if (initialProject === null) {
    return (
      <div className="editor">
        <Spinner animation="border" role="status" />
        Loading…
      </div>
    );
  } else {
    return (
      <div className="editor">
        <Gui
          initialProjectTitle={initialProject.title}
          backend={true}
          initialProject={new Uint8Array(initialProject.projectBlob)}
          microworld="plots"
          backendCodeSaveHandler={(c) => {
            projectsService.patch(props.projectId, {
              projectBlob: c,
            });
            setLastSaved(Date.now());
          }}
          backendCodeSaveInterval={
            process.env.DATALAND_AUTOSAVE_INTERVAL * 1000
          }
          backendCodeSaveTimestamp={lastSaved}
          backendMetaDataSaveHandler={(p) => {
            projectsService.patch(props.projectId, p);
          }}
          blocklyInjectionOptions={blocklyInjectionOptions}
        />
      </div>
    );
  }
}

Editor.propTypes = {
  projectId: PropTypes.number.isRequired,
};

export default Editor;
