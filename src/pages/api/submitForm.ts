import { NextApiRequest, NextApiResponse } from 'next';
import Airtable from 'airtable';
import { v4 as uuidv4 } from 'uuid'; // Import UUID

const airtable = new Airtable({
    apiKey: process.env.NEXT_AIRTABLE_PERSONAL_ACCESS_TOKEN,
});

const base = airtable.base(process.env.NEXT_AIRTABLE_BASE_ID || '');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { fullName, mobileNumber, email, subject, message } = req.body;
            // Validate required fields
            if (!fullName || !mobileNumber || !email || !subject || !message) {
                return res.status(400).json({ error: 'All fields are required' });
            }
            // Generate a unique UUID for the ID field
            const uniqueId = uuidv4();
            // Create a record in Airtable
            const table = base('tbl2BiyaCUAlxtvS8');
            await table.create([
                {
                    fields: {
                        ID: uniqueId,
                        FullName: fullName,
                        MobileNumber: mobileNumber,
                        Email: email,
                        Subject: subject,
                        Message: message,
                    },
                },
            ]);

            res.status(200).json({ message: 'Form submitted successfully' });
        } catch (error: any) {
            console.error(error);
            res.status(500).json({ error: error.message || 'Failed to submit form' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
