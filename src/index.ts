import express, { Application, Request, Response} from 'express';
import morgan from 'morgan';

const PORT = process.env.PORT || 3000;
const app: Application = express();
app.use(morgan('tiny'));
app.use

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

