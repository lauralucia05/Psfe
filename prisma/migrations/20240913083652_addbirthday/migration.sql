/*
  Warnings:

  - Making `dateOfBirth` required for Patient and Doctor tables. This is not possible if the table is not empty.
  - Making certain appointment fields optional for flexibility.
  - Adding missing fields that should be required for healthcare compliance.

*/

-- DropForeignKey (if any appointments have null referral IDs)
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_referralId_fkey";

-- AlterTable - Make referralId truly optional for appointments
ALTER TABLE "Appointment" ALTER COLUMN "referralId" DROP NOT NULL;

-- AlterTable - Add required dateOfBirth to Patient (with warning about existing data)
ALTER TABLE "Patient" ALTER COLUMN "dateOfBirth" SET NOT NULL;

-- AlterTable - Add required dateOfBirth to Doctor (with warning about existing data)  
ALTER TABLE "Doctor" ALTER COLUMN "dateOfBirth" SET NOT NULL;

-- AlterTable - Make some Doctor fields required for professional compliance
ALTER TABLE "Doctor" ALTER COLUMN "licenseNumber" SET NOT NULL;

-- AlterTable - Make Patient emergency contact required for safety
ALTER TABLE "Patient" ALTER COLUMN "emergencyContact" SET NOT NULL;

-- AlterTable - Add some optional but useful fields
ALTER TABLE "Patient" ADD COLUMN "insuranceProvider" TEXT;
ALTER TABLE "Patient" ADD COLUMN "insuranceNumber" TEXT;

-- AlterTable - Add professional requirements for doctors
ALTER TABLE "Doctor" ADD COLUMN "malpracticeInsurance" TEXT;
ALTER TABLE "Doctor" ADD COLUMN "hospitalAffiliation" TEXT;

-- AlterTable - Make appointment notes optional but add reason field
ALTER TABLE "Appointment" ADD COLUMN "reason" TEXT;
ALTER TABLE "Appointment" ALTER COLUMN "referralRequired" SET DEFAULT false;

-- AlterTable - Add tracking fields for better audit trail
ALTER TABLE "Payment" ADD COLUMN "processedAt" TIMESTAMP(3);
ALTER TABLE "Payment" ADD COLUMN "refundedAt" TIMESTAMP(3);

-- AlterTable - Add message thread support
ALTER TABLE "Message" ADD COLUMN "threadId" TEXT;
ALTER TABLE "Message" ADD COLUMN "parentMessageId" INTEGER;

-- Re-add the foreign key constraint with proper handling
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_referralId_fkey" FOREIGN KEY ("referralId") REFERENCES "Referral"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Add foreign key for message threading
ALTER TABLE "Message" ADD CONSTRAINT "Message_parentMessageId_fkey" FOREIGN KEY ("parentMessageId") REFERENCES "Message"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Add indexes for new fields
CREATE INDEX "Patient_insuranceProvider_idx" ON "Patient"("insuranceProvider");
CREATE INDEX "Doctor_hospitalAffiliation_idx" ON "Doctor"("hospitalAffiliation");
CREATE INDEX "Appointment_reason_idx" ON "Appointment"("reason");
CREATE INDEX "Message_threadId_idx" ON "Message"("threadId");
CREATE INDEX "Message_parentMessageId_idx" ON "Message"("parentMessageId");