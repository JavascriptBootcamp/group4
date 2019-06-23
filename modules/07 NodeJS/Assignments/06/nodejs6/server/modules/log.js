const log = (request, response, next) => {
    if (request.method === "POST") {
        const arrFiles = request.body.files;
        console.log(arrFiles);
    }
    next();
};

module.exports = log;