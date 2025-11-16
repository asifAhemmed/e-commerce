import asyncHandler from "express-async-handler"

export const loginUser = async (req, res) => {
    res.send("login user");
};

export const registerUser = asyncHandler(async (req, res) => {
      const bodyProps = req.body ;
      console.log(bodyProps);
      res.send("register user");
});