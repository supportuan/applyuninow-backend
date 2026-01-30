import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import CheckList from 'App/Models/CheckList'

export default class CheckListV3Seeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await CheckList.createMany([
      {
        name: 'CAS Documents',
        type: 'Visa Application',
      },
      {
        name: 'IHS Confirmation',
        type: 'Visa Application',
      },
      {
        name: 'IHS Application',
        type: 'Visa Application',
      },
      {
        name: 'UKVI Document Checklist',
        type: 'Visa Application',
      },
      {
        name: 'UKVI Visa Application',
        type: 'Visa Application',
      },
      {
        name: 'FS Appointment',
        type: 'Visa Application',
      },
      {
        name: 'VFS Receipt',
        type: 'Visa Application',
      },
      {
        name: 'BRP - Biometric Residence Permit',
        type: 'On-Arrival',
      },
      {
        name: 'NI - National Insurance',
        type: 'On-Arrival',
      },
      {
        name: 'State ID',
        type: 'On-Arrival',
      },
      {
        name: 'School ID',
        type: 'On-Arrival',
      },
      {
        name: 'Driving license',
        type: 'On-Arrival',
      },
      {
        name: 'MSP - BC Medical Services Plan',
        type: 'On-Arrival',
      },
      {
        name: 'SIN - Social Insurance Number',
        type: 'On-Arrival',
      },
      {
        name: 'Visa Vignette',
        type: 'Pre-Departure',
      },
      {
        name: 'Visa Confirmation letter',
        type: 'Pre-Departure',
      },
      {
        name: 'Flight ticket',
        type: 'Pre-Departure',
      },
      {
        name: 'Additional information',
        type: 'Pre-Departure',
      },
      {
        name: '1-20 Document',
        type: 'Visa Application',
      },
      {
        name: 'SEVIS fees receipt',
        type: 'Visa Application',
      },
      {
        name: 'DS 160 Form',
        type: 'Visa Application',
      },
      {
        name: 'Visa fees / CGI Federal receipt',
        type: 'Visa Application',
      },
      {
        name: 'OFC - VAC Biometrics & Interview',
        type: 'Visa Application',
      },
      {
        name: 'Visa Interview Guide',
        type: 'Visa Application',
      },
      {
        name: 'SDS - Student Direct Stream',
        type: 'Visa Application',
      },
      {
        name: 'Visa fees receipt',
        type: 'Visa Application',
      },
      {
        name: 'Biometrics',
        type: 'Visa Application',
      },
      {
        name: 'VFS Services',
        type: 'Visa Application',
      },
      {
        name: 'Unconditional Admission',
        type: 'Pre Requisite',
      },
      {
        name: 'Deposit receipt',
        type: 'Pre Requisite',
      },
      {
        name: 'LOA - Letter of Acceptance',
        type: 'Pre Requisite',
      },
      {
        name: 'Medical report',
        type: 'Pre Requisite',
      },
      {
        name: 'GIC - Guaranteed Investment Certificate',
        type: 'Pre Requisite',
      },
      {
        name: 'IBC - Investment Balance Certificate',
        type: 'Pre Requisite',
      },
      {
        name: 'Additional Information1',
        type: 'Pre Requisite',
      },
      {
        name: 'Additional Information2',
        type: 'Pre Requisite',
      },
    ])
  }
}
