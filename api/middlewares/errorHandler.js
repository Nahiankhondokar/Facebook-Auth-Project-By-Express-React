
// error handler 
const errorHandler = (error, req, res, next) => {

    const errorStatus = error.status || 500;
    const errorMsg = error.message || "Unknown Error";

    return res.status(404).json({
        status : errorStatus,
        message : errorMsg,
        stack : error.stack
    });

}

export default errorHandler;

