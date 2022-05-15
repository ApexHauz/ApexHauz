const apiresponse = (statusCode, message, data, res) => {
    let status = ""

    if (statusCode >= 200 && statusCode < 300) {
        status = "success"
    } else {
        status = "error"
    }

    // Send Response
    return res.status(statusCode).json({ status, message, data });
}


module.exports = { apiresponse };