import React from "react";

const Formulario =()=>{
    return(
        <>
            <br></br>
            <center>
                <h2>
                    Texto de ejemplo
                </h2>
                <p>
                    Texto de ejemplo Texto de ejemplo Texto de ejemplo Texto de ejemplo
                </p>
            </center>
            <div className="inferior">
                {/* formulario */}
                <div className="formulario w-100">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-11">
                                <label for="inputEmail4">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                            </div>
                            <div className="form-group col-md-11">
                            <label for="inputPassword4">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                            </div>
                        </div>
                        <div className="form-group col-md-11">
                            <label for="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                        </div>
                        <div className="form-group  col-md-11">
                            <label for="inputAddress2">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-11">
                            <label for="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity"/>
                            </div>
                            <div className="form-group col-md-11">
                            <label for="inputState">State</label>
                            <select id="inputState" className="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                            </div>
                            <div className="form-group col-md-2">
                            <label for="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                            <label className="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Formulario