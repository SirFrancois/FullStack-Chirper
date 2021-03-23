import * as express from 'express';
import db from './DB'

const router = express.Router();

router.get('/chirps/:id?', async (req, res) => {
    let id: number = Number(req.params.id)
    if (id) {
        try {
            const [chirp] =await db.chirps.one(id)
            res.json(chirp)
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    } else {
        try {
            const chirps = await db.chirps.all()
            res.json(chirps)
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }

    }

});



export default router;