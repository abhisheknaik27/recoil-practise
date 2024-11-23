import express from 'express';
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

app.get('/:id', (req, res) => {

    const todos = [
        {
            id: 1,
            title: "todo1",
            desc: "todo1"
        },{
            id: 2,
            title: "todo2",
            desc: "todo2"
        },{
            id: 3,
            title: "todo3",
            desc: "todo3"
        }
    ]
    const idTodo = parseInt(req.params.id);

    const todoItem = todos.find(todo => todo.id === idTodo)

    if(todoItem){
        res.status(200).json(todoItem)
    } else{
        res.status(404).json({ message: 'Todo not found' });
    }
})

app.listen(2000);