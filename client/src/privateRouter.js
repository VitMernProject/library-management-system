import React from 'react'
import { Navigate} from 'react-router-dom';

const PrivateRouter = (props) => {
  return (
    (props.type === 1)?(localStorage.getItem('uid') === null? <props.Component/> : <Navigate to="/home" replace={true}/> )
    :(localStorage.getItem('uid') === null ?  <Navigate to="/login" replace={true}/>: <props.Component/> )
  );
}

export default PrivateRouter;