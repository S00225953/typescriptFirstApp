import express, { Application, Request, Response} from 'express';
import morgan from 'morgan';
import userRoutes from './routes/route';

const PORT = process.env.PORT || 3000;
const app: Application = express();
app.use(express.json());
app.use(morgan('tiny'));
app.use('/api/v1/users', userRoutes);

app.get('/ping', async (_req:Request, res: Response) => {
    res.send({
        message: 'hello from Ronan'
    });
});

app.listen(PORT, () => {
    console.log('Server is running on port --', PORT);
})

app.get('/fish', async (_req:Request, res:Response) => {
    res.send(`<img src="https://i.pinimg.com/originals/78/ba/a2/78baa2e81a730433b691204ae40ccc83.gif">`);
});

app.post('/')