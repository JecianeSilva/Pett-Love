function Loading () {
  return(
    <div className="d-flex vh-100 w-100 align-items-center justify-content-center" style={{backgroundColor: "#506849"}}>
      <div className="spinner-grow spinner-grow-xl m-2 text-white" role="status">
      </div>
      <div className="spinner-grow spinner-grow-md m-2 text-white" role="status">
      </div>
      <div className="spinner-grow spinner-grow-sm m-2 text-white" role="status">
      </div>
    </div>
  );
}

export default Loading;