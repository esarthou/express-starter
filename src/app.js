import express from 'express';
import cors from 'cors';

const app = express();
const router = express.Router();
const corsOptions = {
    origin: true,
    methods: ['POST', 'OPTIONS', 'GET'],
    allowHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'x-api-key'],
};

router.use(cors(corsOptions));
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
// router.use(eventContext());

router.get('/', (req, res) => {
    res.status(200).send('Works');
});

app.use('/', router);

export default app;
