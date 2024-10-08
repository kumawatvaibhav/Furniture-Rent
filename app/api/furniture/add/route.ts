import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Furniture from '@/model/furniture.model';
import formidable from 'formidable';
import path from 'path';

// Disable Next.js built-in body parser to handle multipart/form-data
export const config = {
    api: {
        bodyParser: false,
    },
};

// POST method to add new furniture
export async function POST(req: NextRequest) {
    await dbConnect();

    const form = formidable({
        uploadDir: path.join(process.cwd(), '/public/uploads'),
        keepExtensions: true,
        // You can set other options here
    });

    return new Promise((resolve, reject) => {
        // Use the `req` as a Node.js stream
        const stream = req as any; // Cast the NextRequest to 'any'

        form.parse(stream, async (err, fields, files) => {
            if (err) {
                console.error("Error parsing form data:", err);
                return resolve(NextResponse.json({ message: 'Error parsing form data', error: err }, { status: 500 }));
            }

            try {
                const { name, price, category, description, dimensions } = fields;
                const image = files.image ? files.image.newFilename : null;

                const newFurniture = await Furniture.create({
                    name,
                    price,
                    category,
                    description,
                    dimensions,
                    image: image ? `/uploads/${image}` : null,
                });

                resolve(NextResponse.json(
                    { message: 'Furniture added successfully', furniture: newFurniture },
                    { status: 201 }
                ));
            } catch (error) {
                console.error("Error adding furniture:", error);
                resolve(NextResponse.json({ message: 'Error adding furniture', error }, { status: 500 }));
            }
        });
    });
}
