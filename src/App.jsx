import { useDispatch } from 'react-redux';
import { Router } from './routes/Router';
import React, { useEffect, useState } from 'react';
import { fetchUser } from '~/store/auth/index';
import Modal from 'react-modal';
import './components/Modal.css';

function App() {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    void dispatch(fetchUser());
  }, []);

  return (
    <div className="App">
      <Router />
      <button onClick={() => setModalOpen(true)}>モーダルを開く</button>
      <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
        <h2>編集モーダル</h2>
        <button onClick={() => setModalOpen(false)}>閉じる</button>
      </Modal>
    </div>
  );
}

export default App;
