import {Fragment} from 'react';

const Separator = (props) => {
  return (
    <Fragment>
      <div className={`${props.className} text-center d-flex mx-2`}>
        <hr className="flex-grow-1" />
        <span className="px-5 font-weight-lighter larger align-self-center">{props.text}</span>
        <hr className="flex-grow-1" />
      </div>
    </Fragment>
  );
};

export default Separator;
