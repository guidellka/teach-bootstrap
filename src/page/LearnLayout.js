import React from 'react'

const LearnLayout = () => {
    return (
        <>
            <h1 className='ml-5 my-4' id='pat'>Layout</h1>
            {/*-------------------------- Column 12 --------------------------------*/}
            <div className='container-fluid mb-5' id='bg-metrabyte-id'>
                <h2 className=''>Container-fluid</h2>
                <div className="row bg-info py-2 mb-4">
                    <h5 className='w-100 text-center'>Row</h5>
                    <div className="col-1 bg-warning  h5">Col-1</div>
                    <div className="col-1 bg-warning  h5">Col-1</div>
                    <div className="col-1 bg-warning  h5">Col-1</div>
                    <div className="col-1 bg-warning  h5">Col-1</div>
                    <div className="col-1 bg-warning  h5">Col-1</div>
                    <div className="col-1 bg-warning  h5">Col-1</div>
                    <div className="col-1 bg-warning  h5">Col-1</div>
                    <div className="col-1 bg-warning  h5">Col-1</div>
                    <div className="col-1 bg-warning  h5">Col-1</div>
                    <div className="col-1 bg-warning  h5">Col-1</div>
                    <div className="col-1 bg-warning  h5">Col-1</div>
                    <div className="col-1 bg-warning  h5">Col-1</div>
                    <div className="col-1 bg-warning  h5">Col-1</div>
                    <div className="col-1 bg-warning  h5">Col-1</div>
                </div>
                <div className="row bg-info py-2 mb-4">
                    <h4 className='w-100 text-center'>Row</h4>
                    <div className="col-2"></div>
                    <div className="col-1 bg-warning border h5">Col-1</div>
                    <div className="col-1 bg-warning border h5">Col-1</div>
                    <div className="col-1 bg-warning border h5">Col-1</div>
                    <div className="col-1 bg-warning border h5">Col-1</div>
                    <div className="col-1 bg-warning border h5">Col-1</div>
                    <div className="col-1 bg-warning border h5">Col-1</div>
                    <div className="col-1 bg-warning border h5">Col-1</div>
                    <div className="col-1 bg-warning border h5">Col-1</div>
                </div>
                <div className="row bg-info py-2 ">
                    <h4 className='w-100 text-center'>Row</h4>
                    <div className="col-1 bg-warning border h5">Col-1</div>
                    <div className="col-2 bg-warning border h5">Col-2</div>
                    <div className="col-2 bg-warning border h5">Col-2</div>
                    <div className="col-1 bg-warning border h5">Col-1</div>
                </div>
            </div>
            {/*-------------------------- Column offset --------------------------------*/}
            <div className='container-fluid bg-secondary pt-2 pb-3 mb-5'>
                <h2 className='w-100 text-center'>Container</h2>
                <div className="row bg-info py-2">
                    <h4 className='w-100 text-center'>Row</h4>
                    <div className="offset-1 col-4 bg-warning border h5">offset-1 col-4</div>
                    <div className="offset-2 col-4 bg-warning border h5">offset-2 col-4</div>
                    {/*------------ row ------------*/}
                    <div className="offset-1 col-1 bg-warning border h5">offset-1 col-1</div>
                    <div className="offset-1 col-1 bg-warning border h5">offset-1 col-1</div>
                    <div className="offset-1 col-2 bg-warning border h5">offset-1 col-2</div>
                    <div className="offset-1 col-1 bg-warning border h5">offset-1 col-1</div>
                    <div className="offset-1 col-1 bg-warning border h5">offset-1 col-1</div>
                    {/*------------ row ------------*/}
                    <div className="col-2 bg-warning border h5">col-2</div>
                    <div className="offset-8 col-2 bg-warning border h5">offset-8 col-2</div>
                </div>
            </div>
            {/*-------------------------- End --------------------------------*/}
            <div className='container-fluid pt-2 pb-3 mt-5 mb-5'>
                <div className="row py-2" style={{marginTop: 200, marginBottom: 200}}>
                    <div className="offset-1 col-4 bg-warning border h5">offset-1 col-4</div>
                    <div className="offset-2 col-4 bg-warning border h5">offset-2 col-4</div>
                    {/*------------ row ------------*/}
                    <div className="offset-1 col-1 bg-warning border h5">offset-1 col-1</div>
                    <div className="offset-1 col-1 bg-warning border h5">offset-1 col-1</div>
                    <div className="offset-1 col-2 bg-warning border h5">offset-1 col-2</div>
                    <div className="offset-1 col-1 bg-warning border h5">offset-1 col-1</div>
                    <div className="offset-1 col-1 bg-warning border h5">offset-1 col-1</div>
                    {/*------------ row ------------*/}
                    <div className="col-2 bg-warning border h5">col-2</div>
                    <div className="offset-8 col-2 bg-warning border h5">offset-8 col-2</div>
                </div>
            </div>

            <div style={{height: 500}} className='bg-primary w-100'>
                <div style={{height: 200, width: 200}}
                     className='bg-warning '>
                    <h1>hello</h1>
                </div>
            </div>
        </>
    )
}

export default LearnLayout
