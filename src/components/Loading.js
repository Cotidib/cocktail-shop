import React from 'react';
import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";

const override = css`
  display: block;
  margin-top:4em;
`;

const Loading = (props) => {
    const {loading} = props;
 return (
  <div className="loader">
       <PulseLoader color='black' loading={loading} css={override} size={15} />
  </div>
 )
}

export default Loading