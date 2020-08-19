import express from 'express';
import { taskModel } from '../database/database.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const {
    theme,
    classNumber,
    fourth,
    question,
    answerOptions,
    answerTrue,
    creator,
  } = req.body;
  console.log(req.body);
  try {
    const newTask = await new taskModel({
      theme,
      classNumber,
      fourth,
      question,
      answerOptions,
      answerTrue,
      creator,
    });
    await newTask.save();
    console.log(newTask);
    const message = 'success';
    res.json(message);
  } catch (err) {
    // const message = 'произошла ошибка, попробуйте снова';
    res.json({ err });
  }
});

export default router;
