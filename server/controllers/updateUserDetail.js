import getUserDetailFromToken from "../helpers/getUserDetailFromToken.js";
import User from "../models/User.js";

async function updateUserDetail(req, res) {
  try {
    const token = req.cookies.token || "";

    const user = await getUserDetailFromToken(token);

    const { name, profile_pic } = req.body;

    const updateUser = await User.updateOne(
      { _id: user._id },
      {
        name,
        profile_pic,
      }
    );

    const userInfomation = await User.findById(user._id).select("-password");

    return res.json({
      message: "user update successfully",
      data: userInfomation,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

export default updateUserDetail;
