import express from 'express';
import { TemsBody, sequelize } from '../../db/models';

const apiRouter = express.Router();

apiRouter.patch('/count/:id', async (req, res) => {
  try {
    // const { id } = req.params;
    // const like = id;
    await TemsBody.update({ count: sequelize.literal('count +1') }, { where: { id: req.params.id } });
    //   req.session[like] = id;
    return res.sendStatus(200);
  } catch (erro) {
    console.log(erro);
    return res.sendStatus(500);
  }
});
apiRouter.patch('/-count/:id', async (req, res) => {
  try {
    await TemsBody.update({ countmin: sequelize.literal('count -1') }, { where: { id: req.params.id } });
    return res.sendStatus(200);
  } catch (erro) {
    console.log(erro);
    return res.sendStatus(500);
  }
});
apiRouter.delete('/del/:id', async (req, res) => {
  try {
    await TemsBody.destroy({ where: { id: req.params.id } });
    return res.sendStatus(200);
  } catch (erro) {
    console.log(erro);
    return res.sendStatus(500);
  }
});
apiRouter.patch('/rename/:id', async (req, res) => {
  try {
    console.log(req.body.newBodyName);
    await TemsBody.update({ post: req.body.newBodyName }, { where: { id: req.params.id } });
    const apdatePost = await TemsBody.findByPk(req.params.id);
    res.json(apdatePost);
  } catch (erro) {
    console.log(erro);
    res.sendStatus(500);
  }
});
export default apiRouter;
