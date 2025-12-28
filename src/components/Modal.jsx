import Modal from 'react-modal';
import React from 'react';
import './components/Modal.css';
import EditListForm from '~/components/EditListForm.jsx';
import PropTypes from 'prop-types';

export const EditListModal = ({ isOpen, onClose, list }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    ariaHideApp={false}
    shouldCloseOnEsc={true}
  >
    <EditListForm
      list={list}
      onCancel={onClose}
      onDone={onClose}
    />
  </Modal>
);

EditListModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  list: PropTypes.object       // listが必要な場合
};

export default EditListModal;