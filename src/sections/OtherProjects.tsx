import React from "react";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";

function OtherProjects() {
  return <div className="op" >
    <h2 className="op-heading" >Other Projects</h2>

    <div className="op-card" >
      <div className="op-card-inner" >
        <div className="op-card-top" >
          <div className="op-card-icon-1" ><FiFolder/></div>
          <div className="op-card-icon-2" ><FiGithub/></div>
        </div>
        <h2 className="op-card-heading" >
          Lorem, ipsum dolor.
        </h2>
        <p className="op-card-description" >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda inventore pariatur ipsum? Fuga deserunt eius, sint blanditiis consectetur, rem adipisci fugiat, voluptate quibusdam ut culpa vel voluptatum rerum! Eos, tenetur illo.
        </p>
        <div className="op-card-footer" >
          <p>React</p>
        </div>
      </div>
    </div>

  </div >;

}

export default OtherProjects;
