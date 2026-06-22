import express from 'express';

const app = express();
const PORT = 8000;


app.use(express.json());

// --- HARDCODED DATA BASED ON AN ARRAY ---

let students = [
  {
    id: 1,
    firstName: "Juan",
    lastName: "Pérez",
    age: 20,
    email: "juan.perez@email.com",
    phone: "+503 7000 0000",
    address: {
      country: "El Salvador",
      city: "San Salvador"
    },
    isActive: true,
    courses: ["Mathematics", "Programming", "Database"]
  }
];

// --- ENDPOINTS ---

// 1. GET ALL: Get all students
app.get('/students', (req, res) => {
  res.status(200).json(students);
});

// 2. GET BY ID: Get a specific student
app.get('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.status(200).json(student);
});

// 3. POST: Add a new student
app.post('/students', (req, res) => {
  const { firstName, lastName, age, email, phone, address, isActive, courses } = req.body;

  // Basic validation
  if (!firstName || !lastName || !email) {
    return res.status(400).json({ message: "The fields firstName, lastName and email are required" });
  }

  // Simulated auto-incrementing ID
  const newId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;

  const newStudent = {
    id: newId,
    firstName,
    lastName,
    age: age || 18,
    email,
    phone: phone || "",
    address: address || { country: "", city: "" },
    isActive: isActive !== undefined ? isActive : true,
    courses: courses || []
  };

  students.push(newStudent);
  res.status(201).json({ message: "Student created successfully", student: newStudent });
});

// 4. PUT: Update an existing student completely
app.put('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const studentIndex = students.findIndex(s => s.id === id);

  if (studentIndex === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  // We replace the data while maintaining the same ID
  students[studentIndex] = {
    id,
    ...req.body
  };

  res.status(200).json({ message: "Student updated successfully", student: students[studentIndex] });
});

// 5. DELETE: Delete a student
app.delete('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const studentExists = students.some(s => s.id === id);

  if (!studentExists) {
    return res.status(404).json({ message: "Student not found" });
  }

  // We filter the array to remove the selected ID
  students = students.filter(s => s.id !== id);

  res.status(200).json({ message: `Student with ID ${id} deleted successfully` });
});

// --- SERVER INITIALIZATION ---
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});