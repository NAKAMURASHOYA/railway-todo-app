import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom'; // useHistoryからuseNavigateに変更:React Router v6対応
import { signup } from '~/store/auth';

export const useSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = useCallback(
    async ({ email, password, name }) => {
      await dispatch(
        signup({
          email,
          password,
          name,
        }),
      ).unwrap();
      navigate('/');
    },
    [dispatch, navigate],
  );

  return {
    signup: handleSignup,
  };
};
