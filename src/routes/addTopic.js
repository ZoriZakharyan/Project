import express from 'express';

const addTopic = express.Router();

addTopic.get('/', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

export default addTopic;
