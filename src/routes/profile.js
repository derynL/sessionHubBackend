import express from 'express';

import Profile from '../models/profile.model.js';

const router = express.Router();

router
  .route(`/:id`)

  .get((req, res) => {
    const userId = req.params.id;
    console.log(userId);
    Profile.findOne({ userId }, (err, user) => {
      if (user) {
        res.send(user);
      } else {
        res.status(404).send(`Profile not found`);
      }
    });
  });

export { router as profile };
