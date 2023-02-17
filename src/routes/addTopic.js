import express from 'express';
import { TemsBody, Tems } from '../../db/models';

const addTopic = express.Router();

addTopic.get('/', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

addTopic.post('/', async (req, res) => {
  try {
    const newId = await Tems.create({ init_id: req.body.level, temsName: req.body.temsName });
    const { bodyName, post } = req.body;
    await TemsBody.create({
      bodyName, post, tems_id: newId.id, user_id: 1, countmin: 0, count: 0,
    });
    res.sendStatus(200);
  } catch (erro) {
    console.log(erro);
    res.sendStatus(500);
  }
});
export default addTopic;
