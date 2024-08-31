// Define a higher-order function named asyncHandler
const asyncHandler = () => {
  // Return a new middleware function that takes req, res, and next as parameters
  return (req, res, next) => {
    // Wrap the requestHandler function call in a Promise to handle asynchronous operations
    Promise.resolve(requestHandler(req, res, next))
      // Handle any errors that occur during the execution of requestHandler
      .catch((err) => next(err)); // Pass the error to the next middleware (typically error-handling middleware)
  };
};

// Export the asyncHandler function so it can be used in other modules
export { asyncHandler };

//const asyncHandler = () => {}
//const asyncHandler = (func) => () = {}
//const asyncHandler = (func) => async() = {}

// const asyncHandler = (func) => async (req, res, next) => {
//     try {
//         await func(req, res, next)
//     } catch (error) {
//        res.status(err.code || 500).json({
//         sucess: false,
//         message : err.message
//        })
//     }
// }
