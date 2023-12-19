import React from 'react';
import { ArcContainer } from './arc.styles';
import ArcImage from "../../assets/semi-circle.svg";

const Arc = () => (
	<ArcContainer>
		<div className="arc-img">
      <img className="arc" src={ArcImage} alt="" />
      </div>
	</ArcContainer>
);

export default Arc;
