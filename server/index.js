const express = require('express');
const cors = require('cors');
const ExcelJS = require('exceljs');
const DBConnection = require('./database/db');
const Appointment = require('./models/appointment');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

DBConnection();

app.post('/appointments', async (req, res) => {
    try {
        const appointment = new Appointment(req.body);
        const savedAppointment = await appointment.save();
        await updateExcelSheet();
        res.status(201).json({ message: "Appointment booked successfully", appointment: savedAppointment });
    } catch (error) {
        console.error("Error booking appointment:", error);
        res.status(500).json({ error: "Failed to book appointment", details: error.message });
    }
});

app.get('/appointments', async (req, res) => {
    try {
        const appointments = await Appointment.find({});
        res.status(200).json(appointments);
    } catch (error) {
        console.error("Error fetching appointments:", error);
        res.status(500).json({ error: "Failed to fetch appointments", details: error.message });
    }
});

app.get('/download/appointments.xlsx', async (req, res) => {
    try {
        let sheet = await updateExcelSheet();
        res.setHeader('Content-Type', sheet.contentType);
        res.setHeader('Content-Disposition', sheet.contentDisposition);
        res.send(sheet.body);
    } catch (error) {
        console.error("Error downloading Excel sheet:", error);
        res.status(500).json({ error: "Failed to download Excel sheet", details: error.message });
    }
});

app.get('/', (req, res) => {
    res.send('Server is up and running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

async function updateExcelSheet() {
    const appointments = await Appointment.find({});
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Appointments');

    worksheet.columns = [
        { header: 'Name', key: 'name', width: 30 },
        { header: 'Phone', key: 'phone', width: 20 },
        { header: 'Location', key: 'location', width: 30 },
    ];

    appointments.forEach(appointment => {
        worksheet.addRow({
            name: appointment.name,
            phone: appointment.phone,
            location: appointment.location,
        });
    });

    const buffer = await workbook.xlsx.writeBuffer();
    return {
        contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        contentDisposition: `attachment; filename="appointments.xlsx"`,
        body: buffer,
    };
}
