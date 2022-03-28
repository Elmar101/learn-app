import React from 'react';
const PasswordResetView = ()=> (
    <div>
        <form className="form-inline">
            <div className="form-group">
                <input style={{ width: "366px", marginRight: "10px"}} type="text" className="form-control" placeholder="E-Posta" />
            </div>
            <button type="submit" className="btn btn-primary">Şifrəmi Resetle!</button>
        </form>

        <p>
           Login Olmaq Üçün <b><u><a style={{fontSize : "18px"}} href="#" onClick={e => {
                e.preventDefault();
            }}>Kilik ediniz.</a></u></b>
        </p>
    </div>
)

export default PasswordResetView;