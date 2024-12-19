import { Container, Card, Button, Row, Col, Form, FloatingLabel } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";

function Tasks() {
    const [task, setTask] = useState(""); // Za unos novog taska
    const [tasks, setTasks] = useState([]); // Svi taskovi
    const [filter, setFilter] = useState("All"); // Filter statusa
    const [search, setSearch] = useState(""); // Pretraga taskova

    // Učitavanje taskova iz localStorage pri prvom renderovanju
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(storedTasks);
    }, []);

    // Ažuriranje localStorage-a svaki put kada se promeni lista taskova
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    // Dodavanje novog taska
    const onSubmitClick = () => {
        if (!task.trim()) {
            alert("Task ne može biti prazan!");
            return;
        }

        const newTask = {
            id: Date.now(),
            name: task,
            completed: false,
        };

        setTasks([...tasks, newTask]);
        setTask(""); // Resetovanje inputa
    };

    // Brisanje taska
    const handleDelete = (id) => {
        const updatedTasks = tasks.filter((t) => t.id !== id);
        setTasks(updatedTasks);
    };

    // Promena statusa taska (Complete/Uncomplete)
    const handleToggleComplete = (id) => {
        const updatedTasks = tasks.map((t) =>
            t.id === id ? { ...t, completed: !t.completed } : t
        );
        setTasks(updatedTasks);
    };

    // Filtrirani taskovi prema statusu i pretrazi
    const filteredTasks = tasks.filter((t) => {
        const matchesFilter =
            filter === "All" ||
            (filter === "Complete" && t.completed) ||
            (filter === "Uncomplete" && !t.completed);

        const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <Container>
            <Row className="text-center justify-content-center mt-5 ">
                <Col xs={12} xl={8}>
                    <Card>
                        <Card.Body>
                            {/* Unos taska */}
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

                            {/* Filter i pretraga */}
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

                            {/* Lista taskova */}
                            {filteredTasks.map((t) => (
                                <div
                                    key={t.id}
                                    className={`border border-default ${
                                        t.completed ? "bg-light" : ""
                                    }`}
                                >
                                    <Row className="p-2 align-items-center">
                                        <Col className="float-start col">
                                            <p
                                                className={`card-title float-start ${
                                                    t.completed ? "text-decoration-line-through" : ""
                                                }`}
                                            >
                                                {t.name}
                                            </p>
                                        </Col>
                                        <Col className="col-auto">
                                            <Button
                                                className="btn btn-warning me-2"
                                                onClick={() => handleToggleComplete(t.id)}
                                            >
                                                <FaEdit/>
                                            </Button>
                                            <Button
                                                className="btn btn-danger"
                                                onClick={() => handleDelete(t.id)}
                                            >
                                                <FaTrash/>
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                            ))}
                        </Card.Body>
                    </Card>
                    <p className="text-end mt-3">Total: {tasks.length}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Tasks;
