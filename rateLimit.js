const rateLimit = require("express-rate-limit");

//Ratelimit for specific route
const limiter = rateLimit({
    windowMs: 5 * 60 * 60, //1min Windows duration
    max: 15,  // max 15 req per ip in that window
    message: "You have exceeded your 15 requests per minute limit within 1min duration",
    header: true,  // it will add crucial response http headers like "X-RateLimit-Limit, X-RateLimit-Remaining, Retry-After"
})

module.exports =limiter;