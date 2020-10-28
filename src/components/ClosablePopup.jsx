import React from 'react';

function ClosablePopup(props) {
  const {children, ...rest} = props;

  React.useEffect(() => {
    function closeModalWithEsc(e) {
      if (e.key === "Escape") {
        children.props.onClose();
      }
    };

    function closeModalWithClick(e) {
      if (e.target.classList.contains('modal')) {
        children.props.onClose();
      }
    };

    document.addEventListener('mousedown', closeModalWithClick);
    document.addEventListener('keydown', closeModalWithEsc);

    return () => {
      document.removeEventListener('mousedown', closeModalWithClick);
      document.removeEventListener('keydown', closeModalWithEsc);
    };
  }, [children]);

  return (
    <>
    {React.cloneElement(children, {...rest})}
    </>
  );
}

export default ClosablePopup;
