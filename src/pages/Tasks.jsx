import { Container, Card, Button, Row, Col, Form, FloatingLabel } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import tasksService from '../services/tasks.js';

function Tasks() {
    const [task, setTask] = useState("");
    const [filter, setFilter] = useState("All");
    const [search, setSearch] = useState("");
    const [tasks, setTasks] = useState([]) ;

    const mapTasks = () => {
        return tasks.map(t => {
            return (
                <div key={t.id} className={t.completed ? 'border border-default bg-light mb-2' : ''}>
                    <div className="row p-2 ">
                        <div className="col align-items-center">
                            <p
                            className={t.completed ? 'text-decoration-line-through float-start' : 'float-start border border-light'}
                               style={{cursor: 'pointer'}} onClick={() => onTaskClick(t.id)}>
                                {t.todo}
                            </p>
                        </div>
                        <div className="col-auto">
                            <button type="button" className="btn btn-warning">
                                <FaEdit />
                            </button>
                            <button type="button" className="btn btn-danger" onClick={() => onDeleteClick(t.id)}>
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                </div>
            )
        })
    };

    useEffect( () => {
        (async () => {
            const response = await tasksService.list();
            setTasks(response.todos)
        })()
    }, []);

    const onSubmitClick = () => {
        if (!task.trim()) {
            alert("Task ne može biti prazan!");
            return;
        }

        const newTask = {
            id: Date.now(),
            todo: task,
            completed: false,
        };

        setTasks([...tasks, newTask]);
        setTask("");
    };

    const onDeleteClick = (id) => {
        const updatedTasks = tasks.filter((t) => t.id !== id);
        setTasks(updatedTasks);
    };

    const onTaskClick = (id) => {
        const updatedTasks = tasks.map((t) =>
            t.id === id ? { ...t, completed: !t.completed } : t

        );
        setTasks(updatedTasks);
    };

    const filteredTasks = tasks.filter((t) => {
        const matchesFilter =
            filter === "All" ||
            (filter === "Complete" && t.completed) ||
            (filter === "Uncomplete" && !t.completed);

         const matchesSearch = t.todo.toLowerCase().includes(search.toLowerCase());
        return matchesFilter ;
    });

    return (
        <Container>
            <Row className="text-center justify-content-center mt-5 ">
                <Col xs={12} xl={8}>
                    <Card>
                        <Card.Body>
                            <Row className="mb-3">
                                <Col>
                                    <FloatingLabel controlId="floatingTask" label="Insert Task">
                                        <Form.Control
                                            type="text"
                                            placeholder="Add Task"
                                            name="task"
                                            value={task}
                                            onChange={(e) => setTask(e.target.value)}
                                        />
                                    </FloatingLabel>
                                </Col>
                                <Col className="col-auto">
                                    <Button
                                        className="btn btn-primary h-100"
                                        onClick={onSubmitClick}
                                    >
                                        Add
                                    </Button>
                                </Col>
                            </Row>

                            <Row className="mb-5">
                                <Col>
                                    <FloatingLabel controlId="floatingInput" label="Search Input">
                                        <Form.Control
                                            type="text"
                                            placeholder="Search Input"
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                        />
                                    </FloatingLabel>
                                </Col>
                                <Col>
                                    <Form.Select
                                        aria-label="Default select"
                                        className="h-100"
                                        value={filter}
                                        onChange={(e) => setFilter(e.target.value)}
                                    >
                                        <option value="All">Status: All</option>
                                        <option value="Complete">Complete</option>
                                        <option value="Uncomplete">Uncomplete</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                            <div id='response'>
                                {mapTasks()}
                            </div>
                        </Card.Body>
                    </Card>
                    <p className="text-end mt-3">Total: {tasks.length}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Tasks;
