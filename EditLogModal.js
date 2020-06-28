import React, { useSate } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'


const EditLogModal = () => {
    const [message, setMessage] = useState("");
    const [attention, setAttention] = useState(false);
    const [technician, setTechnician] = useState("");
  
    const onsubmit = () => {
      if (message === " " || technician === " ") {
        M.toast({ html: "Please enter a message and technician" });
      } else {
        console.log(message, technician, attention);

        // celar fieds
        setMessage('');
        setTechnician('');
        setAttention(false)
      }
    };
  
    return (
      <div id="add-log-modal" className="modal" style={modalStyle}>
        <div className="modal-content">
          <h4>Enter System Log</h4>
          <div className="row">
            <div className="input-field">
              <input
                type="text"
                name="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
              <label htmlFor="message" className="active">
                Log message
              </label>
            </div>
          </div>
  
          <div className="row">
            <div className="input-field">
              <select
                name="tech"
                value={technician}
                className="browser-default"
                onChange={e => setTechnician(e.target.value)}
              >
                <option value="" disabled>
                  Select technition
                </option>
                <option value="John Doe">John Doe</option>
                <option value="Sam Smith">Sam Smith</option>
                <option value="Sara Willson">Sara Willson</option>
              </select>
            </div>
          </div>
  
          <div className="row">
            <div className="input-field">
              <p>
                <label>
                  <input
                    type="checkbox"
                    className="filled-in"
                    checked={attention}
                    value={attention}
                    onChange={e => setAttention(!attention)}
                  ></input>
                  <span>Needs Attention</span>
                </label>
              </p>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            onClick={onsubmit}
            className="modal-close wave-effect blue waves-light btn"
          >
            Enter
          </a>
        </div>
      </div>
    );
  };
  
  const modalStyle = {
    width: "75%",
    height: "75%"
  };
  
  export default AddLogModal;