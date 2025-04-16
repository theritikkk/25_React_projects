



export default function Modal( { id, header, body, footer, onClose } ) {
    
    return (
        <div id = { id || 'Moadl'} className="modal" >
            
            <div className="modal-content">

                <div className="header">
                    
                    <span onClick={onClose} className="close-modal-icon"> &times; </span>
                        {/* &times; is an HTML entity that represents the multiplication sign (×).
                        So, if you see &times; in HTML code, it will be displayed as: × */}
                    <h2> { header ? header : 'Header' } </h2>

                </div>

                <div className="body">
                    {
                        body ? body : 
                        (
                            <div>
                                <p> This is our modal body. </p>
                            </div>
                        )
                    }
                </div>

                <div className="footer">
                    {
                        footer ? footer : <h2> Footer </h2>
                    }
                </div>

            </div>

        </div>
    );

}