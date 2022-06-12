import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const RedirectUser = (props) => {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(props.url);
  }, [props]);
  return <></>;
};
