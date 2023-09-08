const informationRouter = require('express').Router();
const ytdl = require('ytdl-core');

informationRouter.post('/', (req, res, next) => {
  const { url } = req.body;

  if (!url) return res.status(400).json({ error: 'Invalid URL' });

  const videoID = ytdl.getURLVideoID(url);

  const info = ytdl.getInfo(videoID).then((info) => {
    res.json({ info: info.videoDetails });
  });

  info.catch((err) => {
    console.log({errorName: err.name, errorMessage: err.message})
    next(err)
  });
});

module.exports = informationRouter;
