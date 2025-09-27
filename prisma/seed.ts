import { PrismaClient, UserSex, AppointmentStatus, AppointmentType, PaymentStatus, ReferralUrgency, AdminRole, UserType } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // ADMIN
  await prisma.admin.create({
    data: {
      id: "admin1",
      username: "admin1",
      email: "admin@psyencia.com",
      password: "hashedpassword123", // In real app, hash this
      name: "John Admin",
      role: AdminRole.SUPER_ADMIN,
    },
  });
  
  await prisma.admin.create({
    data: {
      id: "admin2",
      username: "admin2",
      email: "moderator@psyencia.com",
      password: "hashedpassword123",
      name: "Jane Moderator",
      role: AdminRole.MODERATOR,
    },
  });

  // DOCTORS/SPECIALISTS
  const specializations = [
    ["Clinical Psychology", "Anxiety Disorders"],
    ["Psychiatry", "Depression Treatment"],
    ["Child Psychology", "ADHD Treatment"],
    ["Cognitive Behavioral Therapy", "Trauma Recovery"],
    ["Marriage & Family Therapy", "Relationship Counseling"],
    ["Addiction Counseling", "Substance Abuse"],
    ["Eating Disorder Specialist", "Body Image Therapy"],
    ["Neuropsychology", "Memory Disorders"],
    ["Geriatric Psychology", "Dementia Care"],
    ["Crisis Intervention", "Suicide Prevention"],
  ];

  for (let i = 1; i <= 10; i++) {
    await prisma.doctor.create({
      data: {
        id: `doctor${i}`,
        username: `doctor${i}`,
        name: `Dr. Name${i}`,
        surname: `Surname${i}`,
        email: `doctor${i}@psyencia.com`,
        password: "hashedpassword123",
        phone: `555-000-${1000 + i}`,
        address: `${i} Medical Plaza, Mental Health District`,
        sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
        licenseNumber: `PSY${10000 + i}`,
        specialization: specializations[(i - 1) % specializations.length],
        education: `PhD in Psychology from University ${i}`,
        experience: `${5 + (i % 10)} years of clinical experience`,
        credentials: `Licensed Clinical Psychologist, Board Certified`,
        introVideoUrl: `https://videos.psyencia.com/doctor${i}/intro.mp4`,
        biography: `Experienced mental health professional specializing in ${specializations[(i - 1) % specializations.length][0]}. Passionate about helping patients achieve mental wellness.`,
        consultationFee: 150.0 + (i * 25),
        isAvailable: true,
        dateOfBirth: new Date(1970 + (i % 20), (i % 12), (i % 28) + 1),
      },
    });
  }

  // PATIENTS
  for (let i = 1; i <= 25; i++) {
    await prisma.patient.create({
      data: {
        id: `patient${i}`,
        username: `patient${i}`,
        name: `Patient${i}`,
        surname: `LastName${i}`,
        email: `patient${i}@example.com`,
        password: "hashedpassword123",
        phone: `555-111-${2000 + i}`,
        address: `${i} Patient Street, City`,
        sex: i % 3 === 0 ? UserSex.FEMALE : i % 3 === 1 ? UserSex.MALE : UserSex.OTHER,
        bloodType: ["A+", "B+", "O+", "AB+", "A-", "B-", "O-", "AB-"][i % 8],
        dateOfBirth: new Date(1980 + (i % 25), (i % 12), (i % 28) + 1),
        emergencyContact: `Emergency Contact ${i}: 555-999-${3000 + i}`,
        medicalHistory: i % 3 === 0 ? "History of anxiety and depression" : "No significant medical history",
        currentMedications: i % 4 === 0 ? "Sertraline 50mg daily" : "None",
        allergies: i % 5 === 0 ? "Penicillin" : "No known allergies",
      },
    });
  }

  // REFERRALS
  for (let i = 1; i <= 15; i++) {
    await prisma.referral.create({
      data: {
        referringDoctor: `Dr. Primary Care ${i}`,
        reason: i % 3 === 0 ? "Anxiety management" : i % 3 === 1 ? "Depression treatment" : "General mental health evaluation",
        medicalHistory: "Patient has been experiencing symptoms for 3 months",
        urgency: i % 4 === 0 ? ReferralUrgency.URGENT : ReferralUrgency.ROUTINE,
        notes: "Patient is motivated for treatment and seeking professional help",
        patientId: `patient${i}`,
      },
    });
  }

  // AVAILABILITY SLOTS
  const today = new Date();
  for (let i = 1; i <= 10; i++) { // For each doctor
    for (let day = 0; day < 14; day++) { // Next 14 days
      for (let hour = 9; hour <= 16; hour++) { // 9 AM to 4 PM
        const slotDate = new Date(today);
        slotDate.setDate(today.getDate() + day);
        slotDate.setHours(hour, 0, 0, 0);
        
        const endTime = new Date(slotDate);
        endTime.setHours(hour + 1, 0, 0, 0);
        
        await prisma.availability.create({
          data: {
            date: slotDate,
            startTime: slotDate,
            endTime: endTime,
            isBooked: Math.random() > 0.7, // 30% chance of being booked
            doctorId: `doctor${i}`,
          },
        });
      }
    }
  }

  // APPOINTMENTS
  for (let i = 1; i <= 20; i++) {
    const appointmentDate = new Date();
    appointmentDate.setDate(today.getDate() + (i % 10));
    appointmentDate.setHours(10 + (i % 6), 0, 0, 0);
    
    const endTime = new Date(appointmentDate);
    endTime.setHours(appointmentDate.getHours() + 1);
    
    await prisma.appointment.create({
      data: {
        date: appointmentDate,
        startTime: appointmentDate,
        endTime: endTime,
        duration: 60,
        status: [AppointmentStatus.SCHEDULED, AppointmentStatus.CONFIRMED, AppointmentStatus.COMPLETED][i % 3],
        type: i % 4 === 0 ? AppointmentType.SECOND_OPINION : AppointmentType.CONSULTATION,
        notes: `Initial consultation for ${i % 3 === 0 ? "anxiety" : "depression"} treatment`,
        isFirstVisit: i % 3 === 0,
        referralRequired: true,
        patientId: `patient${(i % 25) + 1}`,
        doctorId: `doctor${(i % 10) + 1}`,
        referralId: i <= 15 ? i : null,
      },
    });
  }

  // PAYMENTS
  for (let i = 1; i <= 15; i++) {
    const amount = 150 + (i * 25);
    const platformFee = amount * 0.1; // 10% platform fee
    const doctorPayout = amount - platformFee;
    
    await prisma.payment.create({
      data: {
        amount: amount,
        currency: "USD",
        status: i % 4 === 0 ? PaymentStatus.PENDING : PaymentStatus.COMPLETED,
        paymentMethod: "Credit Card",
        transactionId: `txn_${Date.now()}_${i}`,
        platformFee: platformFee,
        doctorPayout: doctorPayout,
        patientId: `patient${(i % 25) + 1}`,
        doctorId: `doctor${(i % 10) + 1}`,
        appointmentId: i,
      },
    });
  }

  // MESSAGES
  const messageTypes = [
    { senderType: UserType.PATIENT, receiverType: UserType.ADMIN },
    { senderType: UserType.ADMIN, receiverType: UserType.PATIENT },
    { senderType: UserType.PATIENT, receiverType: UserType.DOCTOR },
    { senderType: UserType.DOCTOR, receiverType: UserType.PATIENT },
    { senderType: UserType.ADMIN, receiverType: UserType.DOCTOR },
  ];
  
  const messageContents = [
    "Hello, I have a question about my upcoming appointment.",
    "Thank you for your inquiry. I'll get back to you shortly.",
    "Could you please confirm the appointment time?",
    "Your appointment is confirmed for tomorrow at 2 PM.",
    "Please remember to fill out the intake form before your visit.",
    "I'm experiencing some side effects from the medication.",
    "Let's discuss this during our next session.",
    "The referral has been processed successfully.",
  ];

  for (let i = 1; i <= 30; i++) {
    const messageType = messageTypes[i % messageTypes.length];
    let senderData = {};
    let receiverData = {};
    
    // Set sender
    if (messageType.senderType === UserType.PATIENT) {
      senderData.patientSenderId = `patient${(i % 25) + 1}`;
    } else if (messageType.senderType === UserType.DOCTOR) {
      senderData.doctorSenderId = `doctor${(i % 10) + 1}`;
    } else if (messageType.senderType === UserType.ADMIN) {
      senderData.adminSenderId = `admin${(i % 2) + 1}`;
    }
    
    // Set receiver
    if (messageType.receiverType === UserType.PATIENT) {
      receiverData.patientReceiverId = `patient${(i % 25) + 1}`;
    } else if (messageType.receiverType === UserType.DOCTOR) {
      receiverData.doctorReceiverId = `doctor${(i % 10) + 1}`;
    } else if (messageType.receiverType === UserType.ADMIN) {
      receiverData.adminReceiverId = `admin${(i % 2) + 1}`;
    }
    
    await prisma.message.create({
      data: {
        content: messageContents[i % messageContents.length],
        isRead: Math.random() > 0.3, // 70% chance of being read
        senderType: messageType.senderType,
        receiverType: messageType.receiverType,
        ...senderData,
        ...receiverData,
      },
    });
  }

  // REVIEWS
  for (let i = 1; i <= 12; i++) {
    await prisma.review.create({
      data: {
        rating: Math.floor(Math.random() * 2) + 4, // 4-5 stars
        comment: [
          "Excellent doctor, very understanding and professional.",
          "Great experience, felt comfortable throughout the session.",
          "Highly recommend Dr. for anyone seeking mental health support.",
          "Professional and caring approach to treatment.",
          "Very helpful session, looking forward to continue treatment.",
        ][i % 5],
        patientId: `patient${(i % 25) + 1}`,
        doctorId: `doctor${(i % 10) + 1}`,
      },
    });
  }

  console.log("Psyencia seeding completed successfully.");
  console.log("Created:");
  console.log("- 2 Admins");
  console.log("- 10 Doctors with specializations");
  console.log("- 25 Patients");
  console.log("- 15 Referrals");
  console.log("- Multiple availability slots");
  console.log("- 20 Appointments");
  console.log("- 15 Payments");
  console.log("- 30 Messages");
  console.log("- 12 Reviews");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });