export default function Modal({ id, header, body, footer, onClose }) {
  return (
    <div id={id || 'Modal'} className="modal">
      
      <div className="modal-content">

        {/* Header section */}
        <div className="header">
          <span onClick={onClose} className="close-modal-icon">
            &times;
          </span>
          {/* &times; is an HTML entity that represents the multiplication sign (×).
              So, if you see &times; in HTML code, it will be displayed as: × */}
          
          {header || <h2>Header</h2>}
        </div>

        {/* Body section */}
        <div className="body">
          {body ? body : (
            <div>
              <p>This is our modal body.</p>
            </div>
          )}
        </div>

        {/* Footer section */}
        <div className="footer">
          {footer ? footer : <h2>Footer</h2>}
        </div>

      </div> {/* End of modal-content */}

    </div> /* End of modal */
  );
}
