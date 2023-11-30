

export const Modal = () => {


    return(

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content py-4">
                <div className="text-center m-4">
                </div>
                <div className="modal-body text-center">
                    <h1>Something went wrong</h1>
                    <p>The transaction is not completed. <br />Wallet not qualified</p>
                </div>
                <div className="modal-footer border-0 justify-content-around">
                </div>
            </div>
        </div>
    </div>
    )
}