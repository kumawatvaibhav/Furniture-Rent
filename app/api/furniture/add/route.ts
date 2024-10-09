import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Furniture from "@/model/furniture.model";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

// POST method to add new furniture
export async function POST(req: NextRequest) {
  console.log("Connecting to database...");
  await dbConnect();
  console.log("Database connected.");

  // Create a directory to store uploaded images if it doesn't exist
  const uploadDir = path.join(process.cwd(), "public/uploads");
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  // Use FormData to parse the request body
  const formData = await req.formData();

  const name = formData.get("name");
  const category = formData.get("category");
  const price = formData.get("price");
  const description = formData.get("description");
  const imageFile = formData.get("image") as File;

  // Define image path and write file
  let imagePath = null;
  if (imageFile) {
    const filePath = path.join(uploadDir, imageFile.name);
    await fs.promises.writeFile(
      filePath,
      Buffer.from(await imageFile.arrayBuffer())
    );
    imagePath = `/uploads/${imageFile.name}`;
  }

  try {
    console.log("Creating a new furniture record...");
    const newFurniture = await Furniture.create({
      name,
      price,
      category,
      description,
      image: imagePath,
    });

    console.log("Furniture added successfully:", newFurniture);

    return NextResponse.json(
      {
        message: "Furniture added successfully",
        furniture: newFurniture,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding furniture:", error);
    return NextResponse.json(
      { message: "Error adding furniture", error },
      { status: 500 }
    );
  }
}
