import { Fragment } from "react";
function AppLayout(props) {
  return (
    <Fragment>
      {props.children}
    </Fragment>
  );
}

export default AppLayout;
