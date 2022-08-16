const router = require("express").Router();
const multer = require("multer");

// 画像アップロード
const upload = multer();
router.post("/", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("画像アップロードに成功しました！");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
