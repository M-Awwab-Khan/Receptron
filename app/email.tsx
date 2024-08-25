import * as React from 'react'
import { Html, Button, Text, Container, Heading } from '@react-email/components'


export default function ServiceAppointmentEmail({ customer, vehicle, service, appointment, notes }) {
    return (
        <Html>
            <Container style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.5, color: '#333' }}>
                <Heading as='h1'>Service Appointment Confirmation</Heading>
                <Text>Dear {customer.name},</Text>
                <Text>Thank you for scheduling your vehicle service with us. Here are the details of your appointment:</Text>

                <Heading as='h2'>Customer Details:</Heading>
                <Text><Text style={{ fontWeight: 'bold' }}>Name:</Text> {customer.name}</Text>
                <Text><Text style={{ fontWeight: 'bold' }}>Phone Number:</Text> {customer.phone_number}</Text>
                <Text><Text style={{ fontWeight: 'bold' }}>Email:</Text> {customer.email}</Text>

                <Heading as='h2'>Vehicle Details:</Heading>
                <Text><Text style={{ fontWeight: 'bold' }}>Make:</Text> {vehicle.make}</Text>
                <Text><Text style={{ fontWeight: 'bold' }}>Model:</Text> {vehicle.model}</Text>
                <Text><Text style={{ fontWeight: 'bold' }}>Year:</Text> {vehicle.year}</Text>
                <Text><Text style={{ fontWeight: 'bold' }}>Mileage:</Text> {vehicle.mileage}</Text>

                <Heading as='h2'>Scheduled Services:</Heading>
                {service.map((item, index) => (
                    <Text key={index}>{item}</Text>
                ))}

                <Heading as='h2'>Appointment Details:</Heading>
                <Text><Text style={{ fontWeight: 'bold' }}>Date:</Text> {appointment.date}</Text>
                <Text><Text style={{ fontWeight: 'bold' }}>Time:</Text> {appointment.time}</Text>
                <Text><Text style={{ fontWeight: 'bold' }}>Wait or Leave:</Text> {appointment.wait_or_leave}</Text>

                <Heading as='h2'>Additional Notes:</Heading>
                <Text>{notes}</Text>

                <Text>We will contact you once the service is completed and your vehicle is ready for pickup.</Text>

                <Text>Thank you,</Text>
                <Text>Your Service Team</Text>
            </Container>
        </Html>
    );
}
